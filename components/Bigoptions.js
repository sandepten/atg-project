import React from "react";

const Bigoptions = () => {
  return (
    <div>
      <div className="mx-20 mt-12 mb-3 flex items-center justify-between xl:mx-28 2xl:mx-60">
        <div className="flex space-x-5">
          <p>All Posts(32)</p>
          <p>Article</p>
          <p>Event</p>
          <p>Education</p>
          <p>Job</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-3 rounded-md bg-[#EDEEF0] py-1 px-2">
            <span className="font-medium">Write a Post</span>
            <img src="dropdown.svg" alt="" />
          </button>
          <button className="flex items-center space-x-2 rounded-md bg-[#2F6CE5] py-1 px-2 text-white">
            <img src="add-group.svg" alt="" />
            <span>Join Group</span>
          </button>
        </div>
      </div>
      <hr className="mx-20" />
    </div>
  );
};

export default Bigoptions;
