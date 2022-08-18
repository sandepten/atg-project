import React from "react";
import { useRecoilState } from "recoil";
import { authState } from "../atoms/signAtom";

const Navbar = () => {
  const [authOn, setauthOn] = useRecoilState(authState);
  return (
    <div>
      <div className="mr-4 flex justify-end space-x-4 py-3">
        <img src="Rectangle.svg" width={16} />
        <img src="Oval.svg" width={16} />
        <img
          onClick={() => {
            setauthOn(true);
          }}
          src="profile.svg"
          width={20}
          alt=""
        />
      </div>
    </div>
  );
};

export default Navbar;
