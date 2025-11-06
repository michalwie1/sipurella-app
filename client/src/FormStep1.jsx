import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next';


const FormStep1 = ({ next, onData }) => {
    // const [step, setStep] = useState(1);
    const { register, handleSubmit } = useForm()
    const { t } = useTranslation('form');

    const onSubmit = (data) => {
    onData(data);  
    next();       
    console.log(data)
  };


    return (
    <section className="user-form1">
        <h1>Form Page</h1>

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
          <label htmlFor="relation"></label>
          <input placeholder={t('relation')} {...register("relation")} />
          {/* <select id="relation"  {...register("relation")} name="relation">
           
            <option value="" style={{display:"none"}}>{t('relation')}</option>
            <option value="relation1">{t('relation1')}</option>
            <option value="ev1">{t('ev2')}</option>
            <option value="ev1">{t('ev3')}</option>
            <option value="ev1">{t('ev4')}</option>
            <option value="ev1">{t('ev5')}</option>
            <option value="ev1">{t('ev6')}</option>
            <option value="ev1">{t('ev7')}</option>
            <option value="ev1">{t('ev8')}</option>
        </select> */}
        </div>

        <div>
          <label htmlFor="sipurellatEv"></label>
          <select id="sipurellatEv"  {...register("sipurellatEv")} name="sipurellatEv">
           
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
{/* 
        <div>
          <label htmlFor="isDeveloper">Is an developer?</label>
          <input
            type="checkbox"
            placeholder="luo"
            value="yes"
            {...register("isDeveloper")}
          />
        </div> */}

     
        <button type="submit">{t('next')}</button>
      </form>
    </section>)

};

export default FormStep1;
