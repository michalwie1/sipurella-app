import axios from 'axios';

const API_URL = 'http://localhost:5000/api/submitStory';

export const submitStory = async ({ fields, audioBlob }) => {
  const formData = new FormData();

  // Convert form data to JSON string
  formData.append('fields', JSON.stringify(fields));

  // Convert audioBlob to File before appending (if it exists)
  if (audioBlob?.blob) {
    const audioFile = new File(
      [audioBlob.blob],       // raw blob from react-mic
      'recording.webm',       // filename
      { type: 'audio/webm' }  // correct MIME type
    );

    formData.append('audio', audioFile);
    // formData.append('audio', audioBlob);
  }

  try {
    const response = await axios.post(API_URL, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  } catch (error) {
    console.error('❌ Error submitting story:', error);
    throw error;
  }
};
