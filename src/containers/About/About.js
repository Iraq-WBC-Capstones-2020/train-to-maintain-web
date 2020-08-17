import React from 'react';
import Header from './header/Header';
import aboutImg from './assets/about.png';
import storyImg from './assets/pushups.png';
import './About.css';
import TeamCard from '../../components/Card/TeamCard/TeamCard';

const Member = [
  {
    id: 1,
    name: 'Osama Abdullah',
    role: 'Lead engineer',
    image: 'https://ca.slack-edge.com/TV9LMJJ0P-U011GKA4JEQ-191475249b45-512',
  },
  {
    id: 2,
    name: 'Yazen Firas',
    role: 'Front-end web developer',
    image: 'https://ca.slack-edge.com/TV9LMJJ0P-U011FQKCVGQ-8f191df5cab4-512',
  },
  {
    id: 3,
    name: 'Ahmed Faisal',
    role: 'Front-end web developer',
    image: 'https://ca.slack-edge.com/TV9LMJJ0P-U011FQL6W0Y-c7aab93ef567-512',
  },
  {
    id: 4,
    name: 'Mahmoud Mansour',
    role: 'Front-end web developer',
    image: 'https://ca.slack-edge.com/TV9LMJJ0P-U011BCR71RD-f40d090b0b32-512',
  },
  {
    id: 5,
    name: 'Shirin Muataz',
    role: 'Front-end web developer',
    image: 'https://ca.slack-edge.com/TV9LMJJ0P-U011FQKH0AC-f314d7a5b572-512',
  },
  {
    id: 6,
    name: 'Evan Hameed',
    role: 'Front-end web developer',
    image: 'https://ca.slack-edge.com/TV9LMJJ0P-U0110FBCLQM-302e8afd9f0b-512',
  },
];
const About = () => {
  return (
    <>
      <img
        className="bg-image absolute w-screen left-0 top-0 object-cover"
        src={aboutImg}
      />
      <Header />
      <div className="lg:flex">
        <div className="pink-story w-screen lg:w-1/2 h-screen md:h-screen-50 xl:h-screen lg:ml-10 mb-20 mt-10 lg:mt-48">
          <h1 className="text-secondary font-bold text-5xl text-center mt-5">
            Our story
          </h1>
          <p className="text-secondary mt-5 ml-5 mr-5 lg:ml-10 lg:mr-10  text-3xl">
            We are a group of people who loves to maintain our health and bodies
            just as much as we love programming. <br /> After we gained the
            experience to build web applications we were so passionate to build
            this website because we know there are many obstacles that
            bodybuilders face. With this website,
            <br />
            <span className="font-bold"> WE WILL CRUSH THEM TOGETHER.</span>
          </p>
        </div>
        <div
          className="h-screen md:h-screen-50 xl:h-screen w-screen lg:w-1/2 lg:mr-10 lg:ml-5 mt-10 lg:mt-48"
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
        <h2 className="text-4xl text-center font-bold m-10">The Team</h2>
        <div className=" flex flex-row flex-wrap justify-center">
          {Member.map((team) => {
            return (
              <TeamCard
                key={team.id}
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
