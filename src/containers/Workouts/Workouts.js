import React, { useEffect, useState } from 'react';
import WorkoutCard from '../../components/Card/WorkoutCard/WorkoutCard';
import { Link } from 'react-router-dom';
import WorkoutsFile from '../../assets/Workouts.txt';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    fetchWorkouts();
  }, []);
  const fetchWorkouts = () => {
    fetch(WorkoutsFile)
      .then((resp) => resp.json())
      .then((data) => {
        setWorkouts(data.workouts);
      });
  };

  return (
    <div
      className=" flex flex-row flex-wrap justify-evenly  "
      whileHover={{ scale: 1.02 }}
    >
      {workouts.map((workout) => {
        return (
          <>
            <Link to={`/workouts/${workout.id}`}>
              <WorkoutCard workout={workout} key={workout.id} />
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default Workouts;
