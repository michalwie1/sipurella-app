import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next';


const FormStep2 = ({ data, onData, next, back }) => {
    const { register, handleSubmit } = useForm()
    const { t } = useTranslation('form');
    const { sipurellatEv } = data;

    const onSubmit = (data) => {
    onData(data);  
    next();       
  };
//   return (
//     <div>
//       <h1>User Story Form</h1>
//       <p>This is where the form will go ✏️</p>
//     </div>
    return (
    <section className="user-form2">

      {sipurellatEv === 'ev1'  &&

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="giverName"></label>
          <input placeholder={t('giverName')} {...register("giverName")} />
        </div>

           <div>
          <label htmlFor="email"></label>
          <input
            placeholder={t('email')}
            type="email"
            {...register("email")}
          />
        </div>

        <div>
          <label htmlFor="receiverName"></label>
          <input placeholder={t('receiverName')} {...register("receiverName")} />
        </div>

        <div>
          <label htmlFor="sipurellatEv"></label>
          <select id="sipurellatEv" name="sipurellatEvent">
            <option value="" style={{display:"none"}}>{t('sipurellatEv')}</option>
            <option value="ev1">{t('ev1')}</option>
            <option value="ev1">{t('ev2')}</option>
            <option value="ev1">{t('ev3')}</option>
            <option value="ev1">{t('ev4')}</option>
            <option value="ev1">{t('ev5')}</option>
            <option value="ev1">{t('ev6')}</option>
            <option value="ev1">{t('ev7')}</option>
            <option value="ev1">{t('ev8')}</option>
        </select>
        </div>
     
        <button type="submit">{t('next')}</button>
      </form>
      }
        
    </section>)

};

export default FormStep2;
