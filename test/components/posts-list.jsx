import React from "react";

export const PostsList = ({ Posts }) => {
  const items = Posts;

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3  grid-cols-1 w-full mt-10">
      {items.map((item, index) => {
        return (
          <div key={index} className="relative p-4">
            <img className="block h-64 w-full grayscale-0 sm:grayscale" src={item?.image} />
            <div className="absolute bottom-8 left-8 font-bold text-lg text-white">{item?.price}</div>
            <div className="absolute bottom-8 right-8 font-bold text-lg text-white">{item?.address}</div>
          </div>
        );
      })}
    </div>
  );
};

export default PostsList;
