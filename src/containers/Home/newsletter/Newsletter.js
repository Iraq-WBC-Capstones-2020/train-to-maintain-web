import React from 'react';
import './Newsletter.css';
import Mailchimp from 'react-mailchimp-form';
import { useTranslation } from 'react-i18next';
const Newsletter = () => {
  const { t } = useTranslation();
  return (
    <section className=" lg:h-lg h-48 bg-secondary flex justify-center py-16">
      <div className="newsletter-section  flex flex-col justify-center items-center   lg:w-6/12 md:w-9/12 w-11/12   ">
        <h1 className="lg:text-3xl text-lg font-bold text-darkgray mb-5  text-center">
          {t('newsletter.subscribeto')}{' '}
          <span className="text-primary">{t('newsletter.newsletter')}</span>
          {t('newsletter.rest')}
        </h1>
        <Mailchimp
          action="https://gmail.us17.list-manage.com/subscribe/post?u=6e1ffa7c27b10359eb761b4a2&amp;id=613be8624d"
          fields={[
            {
              name: 'EMAIL',
              placeholder: 'Email',
              type: 'email',
              required: true,
            },
          ]}
          className="newsletter"
        />
      </div>
    </section>
  );
};

export default Newsletter;
