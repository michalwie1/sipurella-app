// import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next';
import { ReactMic } from 'react-mic';
import { useState } from 'react';
// import { InputRecording } from 'Inp'


const FormQuestions = ({ question, register, onAudioCapture }) => {
    // const { register, handleSubmit } = useForm()
    const { t } = useTranslation('form');
    // const { sipurellatEv } = data;

let [recordingToggle, setRecordingToggle] = useState(true)
const [recording, setRecording] = useState(false);
const [audioBlob, setAudioBlob] = useState(null);

//     const onSubmit = (data) => {
//     onData(data);  
//     next();       
//   };

  const onRecordingToggle = () => {
    setRecordingToggle(!recordingToggle)
  }


    return (
      <section>
        <label htmlFor="info1">{question}</label>
        <div className='toggle' onClick={onRecordingToggle}>
          {`Toggle ${recordingToggle}`}
        </div>

        
      {recordingToggle 
      ? <div className='recording'>
        <ReactMic
        record={recording}
        onStop={(blob) => {
          setAudioBlob(blob)
          onAudioCapture?.(blob)}}
        mimeType="audio/webm"
        // strokeColor="#000000"
        // backgroundColor="#FF4081"
    />
      <button type="button" onClick={() => setRecording(true)}>🎙️ התחל הקלטה</button>
      <button type="button" onClick={() => setRecording(false)}>⏹️ עצור</button>

      {audioBlob && (
        <div>
          <p>🔊 האזנה להקלטה</p>
          <audio controls src={audioBlob.blobURL}></audio>
        </div>
      )}

      </div>
    : 
    <div>
    <label htmlFor="storyInput">{t('tellUs')}</label>
      <textarea
        id="storyInput"
        {...register("storyText")}
        rows="6"
        placeholder={t('tellUsPlaceholder')}
      />

    </div>
    }


</section>
    )

};

export default FormQuestions;
