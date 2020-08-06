import React from 'react';
import './Newsletter.css';
import Mailchimp from 'react-mailchimp-form';
const Newsletter = () => {
  return (
    <section className=" lg:h-64 h-48 bg-secondary flex justify-center py-16">
      <div className="newsletter-section  flex flex-col justify-center items-center   lg:w-6/12 md:w-9/12 w-11/12   ">
        <h1 className="lg:text-3xl text-lg font-bold text-darkgray mb-5  text-center">
          Subscribe to our <span className="text-primary">newsletter</span> to
          get the latest of our Blogs, workouts, bundles, and content!
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
