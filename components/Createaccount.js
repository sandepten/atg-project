import React from "react";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { authState, signupState } from "../atoms/signAtom";

const Createaccount = () => {
  const [authOn, setauthOn] = useRecoilState(authState);
  const [password, setPassword] = useState("password");
  const [sign, setSign] = useRecoilState(signupState);
  return (
    <div>
      <div>
        <div className="hidden bg-[#EFFFF4] py-3 text-center font-medium text-[#008A45] lg:block lg:rounded-xl">
          Let&apos;s learn, share & inspire each other with our passion for
          computer engineering. Sign up now 🤘🏼
        </div>
        <div className="items-center justify-around lg:block xl:flex">
          <div className="mx-4 max-w-2xl md:mx-auto xl:w-2/5">
            <div className="my-6 flex items-center justify-between">
              <span className="text-xl font-bold">Create Account</span>
              <img
                src="x-icon.svg"
                alt=""
                width={25}
                onClick={() => {
                  setauthOn(false);
                }}
                className="xl:hidden"
              />
              <img
                src="x-icon-white.svg"
                alt=""
                className="absolute -top-10 right-0 hidden cursor-pointer xl:block"
                width={25}
                onClick={() => {
                  setauthOn(false);
                }}
              />
            </div>
            <div className="">
              <form action="" method="post">
                <div>
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="First Name"
                    required
                    className="w-1/2 rounded-sm border border-[#D9D9DB] bg-[#F7F8FA] py-3 pl-3 placeholder:text-[#8A8A8A]"
                  />
                  <input
                    type="text"
                    name="name"
                    id=""
                    placeholder="Last Name"
                    className="w-1/2 rounded-sm border border-[#D9D9DB] bg-[#F7F8FA] py-3 pl-3 placeholder:text-[#8A8A8A]"
                  />
                </div>
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
                  <input
                    type="password"
                    name=""
                    placeholder="Confirm Password"
                    id=""
                    required
                    className="relative w-full rounded-sm border border-[#D9D9DB] bg-[#F7F8FA] py-3 pl-3 placeholder:text-[#8A8A8A]"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <input
                    type="submit"
                    value="Create Account"
                    className="my-6 w-1/2 rounded-3xl bg-[#2F6CE5] py-2 font-semibold text-white xl:w-full"
                  />
                  <span
                    className="underline hover:cursor-pointer xl:hidden"
                    onClick={() => {
                      setSign(false);
                    }}
                  >
                    or, Sign In
                  </span>
                </div>
              </form>
              <div className="mb-4 flex cursor-pointer items-center justify-center space-x-3 border py-2">
                <img src="facebook-logo.svg" alt="" width={20} />
                <p>Sign up with Facebook</p>
              </div>
              <div className="mb-6 flex cursor-pointer items-center justify-center space-x-2 border py-2">
                <img src="google-logo.svg" alt="" width={30} />
                <p>Sign up with Google</p>
              </div>
              <p className="m-auto w-2/3 pb-6 text-center text-xs font-medium xl:hidden">
                By signing up, you agree to our Terms & conditions, Privacy
                policy
              </p>
            </div>
          </div>
          <div className="hidden w-1/2 xl:block">
            <p className="absolute top-20 right-6 mr-14 text-right">
              Already have an account?
              <span
                className="ml-2 text-[#2F6CE5] hover:cursor-pointer hover:underline"
                onClick={() => {
                  setSign(false);
                }}
              >
                Sign In
              </span>
            </p>
            <img
              src="people-sign.svg"
              className="mx-auto w-3/4 text-center 2xl:w-2/3"
              alt=""
            />
            <p className="m-auto text-center text-xs">
              By signing up, you agree to our Terms & conditions, Privacy policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createaccount;
