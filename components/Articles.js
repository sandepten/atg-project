import React from "react";
import Image from "next/image";
import { useState } from "react";

const Articles = () => {
  const [follow1, setFollow1] = useState(false);
  const [follow2, setFollow2] = useState(false);
  const [follow3, setFollow3] = useState(false);
  const [follow4, setFollow4] = useState(false);
  return (
    <div className="m-auto max-w-3xl lg:ml-20 lg:mt-5 lg:w-7/12 xl:ml-28 xl:w-3/5 2xl:ml-60 3xl:ml-96">
      {/* This is the sidebar */}
      <div className="hidden lg:block">
        <div className="absolute right-20 xl:right-28 2xl:right-60 3xl:right-96">
          <div className="mb-10 flex items-center">
            <Image src="/location.svg" width={18} height={18} alt="" />
            <span className="ml-2 mr-20">Noida, India</span>
            <Image src="/pencil.svg" width={16} height={16} alt="" />
          </div>
          <div className="flex">
            <Image src="/info.svg" alt="" width={16} height={16} />
            <p className="ml-2 w-52 text-xs text-gray-700">
              Your location will help us serve better and extend a personalised
              experience.
            </p>
          </div>
          <div>
            <div className="mt-10 mb-5 flex">
              <Image src="/thumpsup.svg" alt="" width={18} height={18} />
              <p className="ml-2 text-sm">RECOMMENDED GROUPS</p>
            </div>
            <div className="mb-5 flex items-center text-sm">
              <Image src="/leisure.jpg" alt="" width={35} height={35} />
              <span className="ml-2">Leisure</span>
              {follow1 ? (
                <button
                  onClick={() => {
                    setFollow1(false);
                  }}
                  className="absolute right-0 rounded-2xl bg-[#EDEEF0] py-1 px-2"
                >
                  Following
                </button>
              ) : (
                <button
                  onClick={() => {
                    setFollow1(true);
                  }}
                  className="absolute right-0 rounded-2xl bg-[#EDEEF0] py-1 px-2"
                >
                  Follow
                </button>
              )}
            </div>
            <div className="mb-5 flex items-center text-sm">
              <Image src="/activism.jpg" alt="" width={35} height={35} />
              <span className="ml-2">Activism</span>
              {follow2 ? (
                <button
                  onClick={() => {
                    setFollow2(false);
                  }}
                  className="absolute right-0 rounded-2xl bg-[#EDEEF0] py-1 px-2"
                >
                  Following
                </button>
              ) : (
                <button
                  onClick={() => {
                    setFollow2(true);
                  }}
                  className="absolute right-0 rounded-2xl bg-[#EDEEF0] py-1 px-2"
                >
                  Follow
                </button>
              )}
            </div>
            <div className="mb-5 flex items-center text-sm">
              <Image src="/MBA.jpg" alt="" width={35} height={35} />
              <span className="ml-2">MBA</span>
              {follow3 ? (
                <button
                  onClick={() => {
                    setFollow3(false);
                  }}
                  className="absolute right-0 rounded-2xl bg-[#EDEEF0] py-1 px-2"
                >
                  Following
                </button>
              ) : (
                <button
                  onClick={() => {
                    setFollow3(true);
                  }}
                  className="absolute right-0 rounded-2xl bg-[#EDEEF0] py-1 px-2"
                >
                  Follow
                </button>
              )}
            </div>
            <div className="mb-12 flex items-center text-sm">
              <Image src="/philosophy.jpg" alt="" width={35} height={35} />
              <span className="ml-2">Philosophy</span>
              {follow4 ? (
                <button
                  onClick={() => {
                    setFollow4(false);
                  }}
                  className="absolute right-0 rounded-2xl bg-[#EDEEF0] py-1 px-2"
                >
                  Following
                </button>
              ) : (
                <button
                  onClick={() => {
                    setFollow4(true);
                  }}
                  className="absolute right-0 rounded-2xl bg-[#EDEEF0] py-1 px-2"
                >
                  Follow
                </button>
              )}
            </div>
            <p className="absolute right-0 text-xs text-[#2F6CE5]">
              See More...
            </p>
          </div>
        </div>
      </div>
      <article className="pb-4 shadow-lg">
        <div>
          <img src="dashboard-2.png" width="100%" alt="" />
        </div>
        <div className="px-4">
          <p className="py-2">✍️ Article</p>
          <div className="flex justify-between">
            <p className="w-5/6 text-lg font-semibold">
              What if famous brands had regular fonts? Meet RegulaBrands!
            </p>
            <img src="three-dot.svg" alt="" width={25} />
          </div>
          <p className="mt-2 mb-6 truncate">
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to receive
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div>
                <Image src="/sarthak.jpg" alt="" width={45} height={45} />
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Sarthak Kamra</span>
                <span>1.4k views</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 rounded-md bg-[#F1F3F5] p-2">
              <div>
                <img src="share.svg" alt="" width={16} />
              </div>
              <span>Share</span>
            </div>
          </div>
        </div>
      </article>
      {/* <div className="bg-[#F1F3F5] w-full h-2"></div> */}
      <article className="py-4 shadow-lg">
        <div>
          <img src="article-2.jpg" width="100%" alt="" />
        </div>
        <div className="px-4">
          {/* <p className="py-2">Article</p> */}
          <p className="py-2">🔬️ Education</p>
          <div className="flex justify-between">
            <p className="w-5/6 text-lg font-semibold">
              Tax Benefits for Investment under National Pension Scheme launched
              by Government
            </p>
            <img src="three-dot.svg" alt="" width={25} />
          </div>
          <p className="mt-2 mb-6 truncate">
            I’ve worked in UX for the better part of a decade. From now on, I
            plan to receive
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div>
                <Image src="/sarah.jpg" alt="" width={45} height={45} />
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Sarah West</span>
                <span>4.8k views</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 rounded-md bg-[#F1F3F5] p-2">
              <div>
                <img src="share.svg" alt="" width={16} />
              </div>
              <span>Share</span>
            </div>
          </div>
        </div>
      </article>
      <article className="py-4 shadow-lg">
        <div>
          <img src="/article-3.jpg" width="100%" alt="" />
        </div>
        <div className="px-4">
          <p className="py-2">🗓️ Meetup</p>
          <div className="flex justify-between">
            <p className="w-5/6 text-lg font-semibold">
              Finance & Investment Elite Social Mixer @Lujiazui
            </p>
            <img src="three-dot.svg" alt="" width={25} />
          </div>
          <div className="mt-2 mb-5 mr-10 flex justify-between">
            <div className="flex space-x-2">
              <img src="calender.svg" alt="" />
              <span>Fri, 12 Oct, 2018</span>
            </div>
            <div className="flex space-x-2">
              <img src="location.svg" alt="" width={15} />
              <span>Ahmedabad, India</span>
            </div>
          </div>
          <div>
            <p className="mb-6 rounded-lg border border-gray-400 py-2 text-center font-medium text-[#E56135]">
              Visit Website
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div>
                <Image src="/ronal.jpg" alt="" width={45} height={45} />
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Ronal Jones</span>
                <span>800 views</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 rounded-md bg-[#F1F3F5] p-2">
              <div>
                <img src="share.svg" alt="" width={16} />
              </div>
              <span>Share</span>
            </div>
          </div>
        </div>
      </article>
      <article className="py-4 shadow-lg">
        <hr className="bg-slate-200" />
        <div className="px-4">
          <p className="py-2">💼️ Job</p>
          <div className="mb-3 flex justify-between">
            <p className="w-5/6 text-lg font-semibold">
              Software Developer - II
            </p>
            <img src="three-dot.svg" alt="" width={25} />
          </div>
          <div className="mt-2 mb-5 mr-10 flex justify-between">
            <div className="flex space-x-2">
              <img src="job.svg" alt="" width={16} />
              <p className="sm:hidden">Innovaccer Analytic...</p>
              <p className="hidden truncate sm:block">
                Innovaccer Analytics Private Ltd.
              </p>
            </div>
            <div className="flex space-x-2">
              <img src="location.svg" alt="" width={15} />
              <span>Noida, India</span>
            </div>
          </div>
          <div>
            <p className="mb-8 rounded-lg border border-gray-400 py-2 text-center font-medium text-[#02B875]">
              Apply on Timesjobs
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div>
                <Image src="/joseph.jpg" alt="" width={45} height={45} />
              </div>
              <div className="flex flex-col">
                <span className="font-medium">Joseph Gray</span>
                <span>1.7k views</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 rounded-md bg-[#F1F3F5] p-2">
              <div>
                <img src="share.svg" alt="" width={16} />
              </div>
              <span>Share</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Articles;
