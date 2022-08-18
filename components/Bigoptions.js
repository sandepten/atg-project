import React from "react";
import { useState } from "react";

const Bigoptions = () => {
  const [group, setGroup] = useState(true);
  return (
    <div>
      <div className="mx-20 mt-12 mb-3 flex items-center justify-between xl:mx-28 2xl:mx-60 3xl:mx-96">
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
          {group ? (
            <button
              onClick={() => {
                setGroup(false);
              }}
              className="flex items-center space-x-2 rounded-md bg-[#2F6CE5] py-1 px-2 text-white"
            >
              <img src="add-group.svg" alt="" />
              <span>Join Group</span>
            </button>
          ) : (
            <button
              onClick={() => {
                setGroup(true);
              }}
              className="flex items-center space-x-2 rounded-md border border-[#989899] bg-white py-1 px-2 text-[#6A6A6B]"
            >
              <img src="exit.svg" alt="" />
              <span>Leave Group</span>
            </button>
          )}
        </div>
      </div>
      <hr className="mx-20" />
    </div>
  );
};

export default Bigoptions;
