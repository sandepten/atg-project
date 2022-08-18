import Head from "next/head";
import Image from "next/image";
import Articles from "../components/Articles";
import Banner from "../components/Banner";
import Createaccount from "../components/Createaccount";
import Signin from "../components/Signin";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { authState, signupState } from "../atoms/signAtom";
import Bigoptions from "../components/Bigoptions";

export default function Home() {
  const [sign, setSign] = useRecoilState(signupState);
  const [authOn, setauthOn] = useRecoilState(authState);
  return (
    <div className="">
      <Head>
        <title>ATG.WORLD</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      {authOn ? (
        <div className="absolute bottom-0 z-10 h-3/4 w-full bg-white lg:fixed lg:top-1/2 lg:left-1/2 lg:w-3/4 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:transform lg:rounded-xl xl:h-3/5 xl:w-2/3 2xl:w-1/2">
          {sign ? <Createaccount /> : <Signin />}
        </div>
      ) : null}
      {authOn ? (
        <div className="absolute z-[5] h-full w-full backdrop-brightness-50"></div>
      ) : null}
      <div className="mx-4 my-3 flex items-center justify-between md:mx-auto md:max-w-3xl lg:hidden">
        <span className="text-lg font-bold">Posts(368)</span>
        <div>
          <select
            name="drop-down"
            id="drop-down"
            className="rounded-md bg-[#F1F3F5] p-1.5"
          >
            <option value="one">Filter: All</option>
            <option value="two">Filter: Article</option>
            <option value="three">Filter: Event</option>
            <option value="three">Filter: Education</option>
            <option value="three">Filter: Job</option>
          </select>
        </div>
      </div>
      <div className="hidden lg:block">
        <Bigoptions />
      </div>
      <Articles />
    </div>
  );
}
