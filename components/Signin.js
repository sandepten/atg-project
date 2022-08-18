import React from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { authState, signupState } from "../atoms/signAtom";

const Signin = () => {
  const [authOn, setauthOn] = useRecoilState(authState);
  const [sign, setSign] = useRecoilState(signupState);
  const [password, setPassword] = useState("password");
  return (
    <div>
      <div className="mx-4 max-w-2xl md:mx-auto">
        <div className="my-6 flex items-center justify-between">
          <span className="text-xl font-bold">Welcome back!</span>
          <img
            src="x-icon.svg"
            alt=""
            width={25}
            onClick={() => {
              setauthOn(false);
            }}
          />
        </div>
        <div className="">
          <form action="" method="post">
            <input
              type="email"
              name=""
              placeholder="Email"
              className="w-full rounded-sm border border-[#D9D9DB] bg-[#F7F8FA] py-3 pl-3 placeholder:text-[#8A8A8A]"
              id=""
              required
            />
            <div className="relative">
              <input
                type={password}
                name=""
                placeholder="Password"
                id=""
                required
                className="relative w-full rounded-sm border border-[#D9D9DB] bg-[#F7F8FA] py-3 pl-3 placeholder:text-[#8A8A8A]"
              />
              <img
                src="eye-icon.svg"
                className="absolute top-3 right-3 z-20"
                alt=""
                onClick={() => {
                  password === "password"
                    ? setPassword("text")
                    : setPassword("password");
                }}
              />
            </div>
            <div className="flex items-center justify-between">
              <input
                type="submit"
                value="Sign In"
                className="my-6 w-1/2 rounded-3xl bg-[#2F6CE5] py-2 font-semibold text-white"
              />
              <span
                className="underline hover:cursor-pointer"
                onClick={() => {
                  setSign(true);
                }}
              >
                or, Create Account
              </span>
            </div>
          </form>
          <div className="mb-4 flex items-center justify-center space-x-3 border py-2">
            <img src="facebook-logo.svg" alt="" width={20} />
            <p>Sign in with Facebook</p>
          </div>
          <div className="mb-6 flex items-center justify-center space-x-2 border py-2">
            <img src="google-logo.svg" alt="" width={30} />
            <p>Sign in with Google</p>
          </div>
          <p className="mb-6 text-center text-sm font-medium">
            Forgot Password?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;