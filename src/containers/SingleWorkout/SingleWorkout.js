import React from 'react';

const SingleWorkout = () => {
  return (
    <div className="my-16 md:pl-16  h-xl  p-8 md:flex ">
      <div className="mb-4 md:w-7/12  md:pt-8">
        <h1 className=" md:text-2xl text-xl font-bold text-primary">
          CHEST WORKOUT
        </h1>
        <p className="text-darkgray">
          This is an effective chest workout that targets all of the chest pecs.
          (upper,middle, and lower chest)
        </p>
      </div>
      <div className="md:w-5/12 w-full flex md:justify-center">
        <img
          className="md:w-7/12 w-full h-full"
          src="https://i2.wp.com/behungrystayhumble.com/wp-content/uploads/2018/05/brutal-caucasian-handsome-fitness-men-on-diet-training-chest-pum-95191475.jpg?w=2123&ssl=1"
        ></img>
      </div>
    </div>
  );
};

export default SingleWorkout;
