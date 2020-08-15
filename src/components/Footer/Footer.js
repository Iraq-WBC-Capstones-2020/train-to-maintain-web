import React, { useState } from 'react';
import workoutImage from './assets/workoutImage.jpg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';
const Footer = () => {
  const [lang, setLang] = useState('English');
  const { t, i18n } = useTranslation();

  const handleLanguageToggle = (language) => {
    lang === 'English' ? setLang('ألعربية') : setLang('English');
    i18n.changeLanguage(language);
  };
  return (
    <div className=" sm:h-auto lg:h-64 flex lg:flex-row xl:flex-row flex-col md:flex-row justify-between items-center text-secondary">
      <img
        src={workoutImage}
        className="object-cover bg-center h-auto md:h-64 sm:h-64 w-full absolute"
        alt="workout"
      />
      <h1 className="text-4xl p-5 select-none z-0 relative">
        Train to
        <span className="border-b-4 border-primary z-40">Maintain</span>
      </h1>

      <ul className="text-2xl sm:p-2 p-2 relative capitalize">
        <li>
          <Link to="/home">{t('navbar.home')}</Link>
        </li>
        <li>
          <Link to="/workouts">{t('navbar.workouts')}</Link>
        </li>
        <li>
          <Link to="/meals">{t('navbar.meals')}</Link>
        </li>
        <li>
          <Link to="/about">{t('navbar.about')}</Link>
        </li>
      </ul>

      <div className="p-5 w-56 relative">
        <div className="md:w-3/12 flex items-center justify-center">
          <div className="group inline-block text-poppins text-secondary">
            <button className="outline-none focus:outline-none border px-3 py-1 bg-primary rounded-sm flex items-center min-w-32">
              <span className="pr-1 font-semibold flex-1">{lang}</span>
              <span>
                <svg
                  className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </span>
            </button>
            <ul
              className="bg-primary border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
            >
              {lang === 'English' ? (
                <li
                  className="rounded-sm px-3 py-1 hover:bg-purple-700"
                  onClick={() => handleLanguageToggle('ar')}
                >
                  ألعربية
                </li>
              ) : (
                <li
                  className="rounded-sm px-3 py-1 hover:bg-purple-700"
                  onClick={() => handleLanguageToggle('en')}
                >
                  English
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
