const axios = require('axios');
const fs = require('fs');
const FormData = require('form-data');

const OPENAI_API_KEY = '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'; // replace with env var later!

async function transcribeAudio(filePath) {
  const formData = new FormData();
  formData.append('file', fs.createReadStream(filePath));
  formData.append('model', 'whisper-1');
  formData.append('language', 'he'); // Hebrew transcription

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/audio/transcriptions',
      formData,
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          ...formData.getHeaders(),
        },
      }
    );

    return response.data.text; // The transcription result
  } catch (err) {
    console.error('❌ Error transcribing audio:', err.response?.data || err.message);
    return '';
  }
}

module.exports = { transcribeAudio };
