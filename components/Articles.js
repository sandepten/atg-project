import React from "react";

const Articles = () => {
  return (
    <div className="m-auto max-w-3xl lg:ml-20 lg:mt-5 lg:w-7/12 xl:ml-28 xl:w-3/5 2xl:ml-60 3xl:ml-96">
      {/* This is the sidebar */}
      <div className="hidden lg:block">
        <div className="absolute right-20 xl:right-28 2xl:right-60 3xl:right-96">
          <div className="mb-10 flex items-center">
            <img src="location.svg" width={18} alt="" />
            <span className="ml-2 mr-20">Noida, India</span>
            <img src="pencil.svg" alt="" />
          </div>
          <div className="flex">
            <img src="info.svg" alt="" />
            <p className="ml-2 w-52 text-xs text-gray-700">
              Your location will help us serve better and extend a personalised
              experience.
            </p>
          </div>
          <div>
            <div className="mt-10 mb-5 flex">
              <img src="thumpsup.svg" alt="" />
              <p className="ml-2 text-sm">RECOMMENDED GROUPS</p>
            </div>
            <div className="mb-5 flex items-center text-sm">
              <img src="leisure.svg" alt="" />
              <span className="ml-2">Leisure</span>
              <button className="absolute right-0 rounded-2xl bg-[#EDEEF0] py-1 px-2">
                Follow
              </button>
            </div>
            <div className="mb-5 flex items-center text-sm">
              <img src="activism.svg" alt="" />
              <span className="ml-2">Activism</span>
              <button className="absolute right-0 rounded-2xl bg-[#EDEEF0] py-1 px-2">
                Follow
              </button>
            </div>
            <div className="mb-5 flex items-center text-sm">
              <img src="MBA.svg" alt="" />
              <span className="ml-2">MBA</span>
              <button className="absolute right-0 rounded-2xl bg-[#EDEEF0] py-1 px-2">
                Follow
              </button>
            </div>
            <div className="mb-12 flex items-center text-sm">
              <img src="philosophy.svg" alt="" />
              <span className="ml-2">Philosophy</span>
              <button className="absolute right-0 rounded-2xl bg-[#EDEEF0] py-1 px-2">
                Follow
              </button>
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
                <img src="sarthak.svg" alt="" width={45} />
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
          <img src="article-2.svg" width="100%" alt="" />
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
                <img src="sarah.svg" alt="" width={45} />
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
          <img src="article-3.svg" width="100%" alt="" />
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
                <img src="ronal.svg" alt="" width={45} />
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
                <img src="joseph.svg" alt="" width={45} />
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
