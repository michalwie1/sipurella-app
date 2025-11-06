// Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Home = () => {
const navigate = useNavigate();
const { t } = useTranslation('home');

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>This is your beautiful story creator ✨</p>
        <button onClick={() => navigate('/form')}>{t('start')}</button>
    </div>
  );
};

export default Home;
