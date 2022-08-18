import React from "react";
import { useRecoilState } from "recoil";
import { authState } from "../atoms/signAtom";

const Navbarbig = () => {
  const [authOn, setauthOn] = useRecoilState(authState);
  return (
    <div className="border-b-2">
      <div className="mx-10 flex items-center justify-between py-4">
        <div className="text-2xl">
          <span className="text-[#27A365]">ATG</span>
          <span>.W</span>
          <img src="union.svg" width={18} alt="" className="inline" />
          <span>RLD</span>
        </div>
        <div className="relative">
          <input
            type="search"
            name="search"
            id=""
            placeholder="Search for your favorite groups in ATG"
            className="w-80 rounded-xl bg-[#F2F2F2] py-2 pl-10 placeholder:text-sm placeholder:font-medium placeholder:text-[#5C5C5C]"
          />
          <img
            src="search.svg"
            className="absolute top-3 left-2.5"
            width={16}
            alt=""
          />
        </div>
        <div
          className="flex cursor-pointer space-x-2 font-bold"
          onClick={() => {
            setauthOn(true);
          }}
        >
          <span>Create account.</span>
          <span className="text-[#2F6CE5]">It’s free!</span>
          <img src="dropdown.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbarbig;
