const express = require('express');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { transcribeAudio } = require('./services/transcribeAudio'); // Leave this even if disabled

const app = express();
const PORT = 5000;

// === MIDDLEWARE ===
app.use(cors());
app.use(express.json());
const upload = multer({ dest: 'uploads/' });

// === FILE SETUP ===
const submissionsFile = path.join(__dirname, 'submissions.json');
if (!fs.existsSync(submissionsFile)) {
  fs.writeFileSync(submissionsFile, '[]');
}

// === SAVE FUNCTION ===
function saveSubmission(submission) {
  const existing = fs.existsSync(submissionsFile)
    ? JSON.parse(fs.readFileSync(submissionsFile))
    : [];

  existing.push(submission);
  fs.writeFileSync(submissionsFile, JSON.stringify(existing, null, 2));
}

// === FORM SUBMISSION ENDPOINT ===
app.post('/api/submitStory', upload.single('audio'), async (req, res) => {
  try {
    console.log('📩 Received form submission');

    const fields = JSON.parse(req.body.fields || '{}');
    console.log('📥 Parsed fields:', fields);

    const audioFile = req.file;
    if (audioFile) {
      console.log('🎤 Audio file received:', audioFile.originalname);
    } else {
      console.warn('❗ No audio file attached');
    }

    // === TRANSCRIPTION (OPTIONAL - DISABLED FOR NOW) ===
    let transcript = '';

    // To ENABLE, uncomment these lines:
    // if (audioFile) {
    //   console.log('🔍 Transcribing audio...');
    //   transcript = await transcribeAudio(audioFile.path);
    //   console.log('📝 Transcription:', transcript);
    // }

    // === SAVE SUBMISSION ===
    const newSubmission = {
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      fields,
      transcript, // will be empty unless enabled
      status: 'new'
    };

    saveSubmission(newSubmission);

    // === RESPONSE ===
    res.status(200).json({
      success: true,
      message: '✅ Story data received',
      transcript // optional: return for preview
    });

  } catch (err) {
    console.error('❌ Backend error:', err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// === START SERVER ===
app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
