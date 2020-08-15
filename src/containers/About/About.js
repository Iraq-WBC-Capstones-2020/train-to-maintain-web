import React from 'react';
import Header from './header/Header';
import aboutImg from './assets/about.png';
import storyImg from './assets/pushups.png';
import './About.css';
import TeamCard from '../../components/Card/TeamCard/TeamCard';

const Member = [
  {
    id: '7',
    name: 'Osama Abdullah',
    role: 'front-end web developer',
    image: 'https://i.ytimg.com/vi/eVG-KfxPPbk/maxresdefault.jpg',
  },
  {
    id: '1',
    name: 'Yazen Firas',
    role: 'front-end web developer',
    image: 'https://i.ytimg.com/vi/eVG-KfxPPbk/maxresdefault.jpg',
  },
  {
    id: '2',
    name: 'Ahmed Faisal',
    role: 'front-end web developer',
    image: 'https://i.ytimg.com/vi/eVG-KfxPPbk/maxresdefault.jpg',
  },
  {
    id: '3',
    name: 'Mahmoud Mansour',
    role: 'front-end web developer',
    image: 'https://i.ytimg.com/vi/eVG-KfxPPbk/maxresdefault.jpg',
  },
  {
    id: '4',
    name: 'Shirin Muataz',
    role: 'front-end web developer',
    image: 'https://i.ytimg.com/vi/eVG-KfxPPbk/maxresdefault.jpg',
  },
  {
    id: '5',
    name: 'Evan Hameed',
    role: 'front-end web developer',
    image: 'https://i.ytimg.com/vi/eVG-KfxPPbk/maxresdefault.jpg',
  },
  {
    id: '6',
    name: 'Aya Faisal',
    role: 'front-end web developer',
    image: 'https://i.ytimg.com/vi/eVG-KfxPPbk/maxresdefault.jpg',
  },
];
const About = () => {
  return (
    <>
      <img
        className="bg-image absolute w-screen left-0 top-0 "
        src={aboutImg}
      />
      <Header />
      <div className="lg:flex">
        <div
          className="w-screen lg:w-1/2 h-screen md:h-screen-50 xl:h-screen lg:ml-10 mb-20 mt-10 lg:mt-32 overflow-scroll"
          style={{
            backgroundColor: '#4527A0',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <h1 className="text-secondary font-bold text-4xl text-center">
            Our story
          </h1>
          <p className="text-secondary mt-5 ml-5 mr-5 lg:ml-10 lg:mr-10 mb-20">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div
          className="h-screen md:h-screen-50 xl:h-screen w-screen lg:w-1/2 lg:mr-10 lg:ml-5 mt-10 lg:mt-32"
          style={{
            backgroundImage: `url(${storyImg})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>
      </div>
      <div className="bg-secondary h-64 flex items-center shadow">
        <h1 className="text-2xl md:text-3xl lg:text-5xl  text-center font-bold textDream">
          “ Great Energy Comes from great body Your dream is wating for you
          Build it.”
        </h1>
      </div>
      <section>
        <h2 className="text-4xl text-center">Team behind Train To Maintain</h2>
        <div className=" flex flex-row flex-wrap justify-evenly">
          {Member.map((team) => {
            return (
              <TeamCard
                id={team.id}
                name={team.name}
                role={team.role}
                image={team.image}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;
