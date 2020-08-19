import React, { useEffect, useState } from 'react';
import WorkoutCard from '../../components/Card/WorkoutCard/WorkoutCard';
import { Link } from 'react-router-dom';
import WorkoutsFile from '../../assets/Workouts.txt';
import { motion } from 'framer-motion';
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
    <motion.div
      animate={{ scale: 0.92 }}
      transition={{ duration: 1 }}
      className=" flex flex-row flex-wrap justify-evenly  "
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
    </motion.div>
  );
};

export default Workouts;
