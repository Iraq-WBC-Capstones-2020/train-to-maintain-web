import React from 'react';
import './SocialMedia.css';
const SocialMedia = () => {
  return (
    <section className="social-media  lg:h-xxl flex flex-col items-center py-10">
      <h1 className="md:text-3xl text-lg text-center font-bold text-secondary mb-10 w-10/12">
        Get the most out of socail media content creators
      </h1>
      <div className="w-10/12">
        <blockquote className="twitter-tweet">
          <p lang="en" dir="ltr">
            The mission of our parent company,{' '}
            <a href="https://twitter.com/SEBrands?ref_src=twsrc%5Etfw">
              @SEBrands
            </a>
            , is to improve the self-esteem of the world. At Anytime Fitness, we
            pursue that mission by helping you reach your health goals. With our
            communities facing more challenges than ever, we want to serve that
            mission by giving back.{' '}
            <a href="https://t.co/nTpHpo3GjV">pic.twitter.com/nTpHpo3GjV</a>
          </p>
          &mdash; Anytime Fitness (@AnytimeFitness){' '}
          <a href="https://twitter.com/AnytimeFitness/status/1287795966842753025?ref_src=twsrc%5Etfw">
            July 27, 2020
          </a>
        </blockquote>{' '}
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        ></script>
      </div>
    </section>
  );
};

export default SocialMedia;
