import React from 'react';

const BlogCard = () => {
  return (
    <React.Fragment>
      <div className="max-w-sm w-full md:w-10/12 md:max-w-full md:flex md:justify-center  my-10">
        <div
          className="h-56 md:h-auto md:w-48 flex-none bg-cover  text-center overflow-hidden shadow-xl"
          style={{
            backgroundImage: "url('https://tailwindcss.com/img/card-top.jpg')",
          }}
        ></div>
        <div className=" bg-purple-700  p-4 flex flex-col justify-between leading-normal shadow-xl">
          <div className="mb-8">
            <div className="text-gray-100 font-bold text-xl mb-2">
              Can coffee make you a better developer?
            </div>
            <p className="text-gray-100 text-base md:w-9/12s">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
              perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogCard;
