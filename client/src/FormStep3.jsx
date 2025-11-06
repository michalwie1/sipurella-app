import React, { useState } from "react";
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next';


const FormStep3 = ({ back, data, onData }) => {

    const { register, handleSubmit } = useForm()
    const { t } = useTranslation('form');
    const [images, setImages] = useState([]);

    function onSubmit(data) {
    console.log(data)
  }

  const handleFiles = (files) => {
    const fileArray = Array.from(files);
    const validImages = fileArray.filter((file) => file.type.startsWith("image/"));

    // limit to 20 images
    const newImages = [...images, ...validImages].slice(0, 20);
    setImages(newImages);
  };

  const handleDrop = (ev) => {
    ev.preventDefault();
    handleFiles(ev.dataTransfer.files);
  };

  const handleSelect = (ev) => {
    handleFiles(ev.target.files);
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };


    return (
    <section className="container user-form">
        <h1>Final Step</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
           <label htmlFor="wish">{t('wish')}</label>
            <textarea
              id="wish"
              {...register("wish")}
              rows="6"
              placeholder={t('wish')}
            />
        </div>

         <div>
           <label htmlFor="backCover">{t('backCover')}</label>
            <textarea
              id="backCover"
              {...register("backCover")}
              rows="6"
              placeholder={t('backCover')}
            />
        </div>

      <section
      className="upload-box"
      onDragOver={(ev) => ev.preventDefault()}
      onDrop={handleDrop}
    >
      <label htmlFor="fileInput" className="upload-area">
        <p>📸 Drag and drop up to 20 images here<br />or click to select from your computer</p>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          multiple
          onChange={handleSelect}
          style={{ display: "none" }}
        />
      </label>

      <div className="preview-grid">
        {images.map((img, idx) => (
          <div key={idx} className="preview-item">
            <img
              src={URL.createObjectURL(img)}
              alt={`preview-${idx}`}
              className="preview-img"
            />
            <button
              type="button"
              className="remove-btn"
              onClick={() => removeImage(idx)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {images.length >= 20 && <p className="limit-msg">You can upload up to 20 images only.</p>}
    </section>



        <input type="submit" />
      </form>
    </section>)

};

export default FormStep3;



// export function UserForm() {
    
//     const { register, handleSubmit } = useForm()

//     function onSubmit(data) {
//     console.log(data)
//   }

//     return <section className="container user-form">
//         <h1>Form Page</h1>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div>
//           <label htmlFor="firstName">First Name</label>
//           <input placeholder="bill" {...register("firstName")} />
//         </div>

//         <div>
//           <label htmlFor="lastName">Last Name</label>
//           <input placeholder="luo" {...register("lastName")} />
//         </div>

//         <div>
//           <label htmlFor="isDeveloper">Is an developer?</label>
//           <input
//             type="checkbox"
//             placeholder="luo"
//             value="yes"
//             {...register("isDeveloper")}
//           />
//         </div>

//         <div>
//           <label htmlFor="email">Email</label>
//           <input
//             placeholder="bluebill1049@hotmail.com"
//             type="email"
//             {...register("email")}
//           />
//         </div>
//         <input type="submit" />
//       </form>
//     </section>
// }

