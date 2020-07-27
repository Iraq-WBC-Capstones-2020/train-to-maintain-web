import React from 'react';

const BlogCard = () => {
  return (
    <React.Fragment>
      <div className="max-w-sm w-full md:w-10/12 md:max-w-full md:flex md:justify-center  my-10">
        <div className="h-56 md:h-auto md:w-48 flex-none bg-cover  text-center overflow-hidden shadow-xl"></div>
        <div>
          <div>Can coffee make you a better developer?</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
            perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogCard;
