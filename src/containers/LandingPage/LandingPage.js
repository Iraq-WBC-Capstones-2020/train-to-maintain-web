import React from 'react';
import landingWorkout from '../LandingPage/assets/landingWorkout.mp4';
import LandingPageCard from '../../components/Card/LandingPageCard/LandingPageCard';
const LandingPage = () => {
  return (
    <div>
      <video
        autoPlay="autoplay"
        loop="loop"
        muted
        className="w-full h-screen object-cover absolute"
      >
        <source src={landingWorkout} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex flex-row justify-between p-2 ">
        <LandingPageCard
          image={
            'https://pixnio.com/free-images/2019/01/21/2019-01-21-13-19-05-460x307.jpg'
          }
          title={'Meals'}
        />
        <LandingPageCard
          image={
            'https://pixnio.com/free-images/2019/01/21/2019-01-21-13-19-05-460x307.jpg'
          }
          title={'Meals'}
        />
        <LandingPageCard
          image={
            'https://pixnio.com/free-images/2019/01/21/2019-01-21-13-19-05-460x307.jpg'
          }
          title={'Meals'}
        />
      </div>
    </div>
  );
};

export default LandingPage;
