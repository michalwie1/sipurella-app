const { transcribeAudio } = require('./services/transcribeAudio');
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware to handle CORS and JSON
app.use(cors());
app.use(express.json());

// Set up multer to handle multipart/form-data
const upload = multer({ dest: 'uploads/' });

// Endpoint to receive form data and optional audio
app.post('/api/submitStory', upload.single('audio'), async (req, res) => {
    try {
        const formFields = JSON.parse(req.body.fields); // text data from form
        const audioFile = req.file; // optional audio file
        
        console.log('📩 Received form submission');

if (audioFile) {
  console.log('🎤 Audio file received:', audioFile.originalname);
} else {
  console.log('❗ No audio file attached');
}
    // Here you would:
    // 1. Transcribe audio if exists
    // 2. Combine with formFields
    // 3. Send to OpenAI to generate story
    // 4. Return story to frontend

    let transcript = '';
    if (audioFile) {
    console.log('🔍 Transcribing audio...');
    transcript = await transcribeAudio(audioFile.path);
    console.log('📝 Transcription:', transcript);
    }

    res.json({
    success: true,
    transcript, // send this back to preview in frontend (optional)
    message: 'Story will be generated here soon',
    });
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

// Start the server
app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));
