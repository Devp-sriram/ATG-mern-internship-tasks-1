import React, { useState } from "react";


function Post() {
  return (
    <div className="w-full h-auto mx-auto xl:w-5/6 ">
      {/*post header*/}
      <nav className="hidden lg:flex justify-between p-8 border-2 border-gray-400 rounded-2xl ">
        <ul className="flex gap-4 p-4">
          <div>
            <li className="font-bold underline underline-offset-8">
              All posts(32)
            </li>
          </div>
          <li>Article</li>
          <li>Events</li>
          <li>Education</li>
          <li>Jobs</li>
        </ul>
        <div className="flex">
          <button className="m-2 px-2 py-1 border-2 border-black rounded">
            <span className="flex gap-2">
              write post{" "}
              <img
                className="w-4 my-auto"
                src="../src/assets/drop-down.png"
                alt=""
              />
            </span>{" "}
          </button>
          <button className="m-2 px-2 py-1 border-2 border-blue-800 rounded bg-customBlue text-white">
            <span className="flex gap-2 ">
              <img
                className="w-4 my-auto invert"
                src="../src/assets/group-ico.png"
                alt=""
              />
              join group{" "}
            </span>
          </button>
        </div>
      </nav>

      {/*cards header*/}
      <div className="flex justify-between m-5 xl:hidden">
        <h2 className="p-4">post(238)</h2>
        <h2 className="flex gap-2 my-4">
          Filter: all{" "}
          <img
            className="w-4 my-auto"
            src="../src/assets/drop-down.png"
            alt=""
          />
        </h2>
      </div>

      {/*edit cursor*/}
      <div className="fixed bottom-8 right-8 lg:hidden">
        <img src="../src/assets/pencil.png" alt="" />
      </div>

      {/*cards */}
      <div className="lg:flex">
        <div>
          <div className="w-full h-auto md:w-5/6 border-2 border-gray-400 mx-auto">
            {/*Sidharth koyal's card*/}
            <div className="rounded-xl m-4 border-2 border-gray-300">
              <div>
                <img
                  className="w-full rounded-xl"
                  src="../src/assets/post-1.png"
                  alt=""
                />
              </div>
              <div>
                <div className="text-2xl font-bold flex ml-5 p-2">
                  <img className="w-5" src="../src/assets/hand.png" alt="" />
                  &nbsp;Article
                </div>

                <div className="flex justify-evenly">
                  <h3 className="text-3xl w-5/6 p-4">
                    What if famous brands had regular fonts? Meet Regularbrands!
                  </h3>
                  <div className="block">
                    <img
                      className="w-8 py-8"
                      src="../src/assets/three-dots.png"
                      alt=""
                    />
                  </div>
                </div>

                <p className="mx-12">
                  I have been working in UX for the better part of decade from
                  now on i retire...
                </p>

                <div className="w-full flex justify-between p-5 gap-2">
                  <div className="flex w-full">
                    <img src="../src/assets/Profile-1.png" alt="" />
                    <div className="block py-1 w-full lg:flex lg:justify-between">
                      <h1 className="ml-2 lg:my-3">Sidharth koyal</h1>
                      <div className="flex ml-2 lg:my-3">
                        {" "}
                        <img
                          className="w-5 h-5"
                          src="../src/assets/eye.png"
                          alt=""
                        />{" "}
                        1.4k views
                      </div>
                    </div>
                  </div>
                  <div className="block-inline">
                    <img
                      className="w-8 py-4 "
                      src="../src/assets/share.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/*2's card*/}
            <div className="rounded-xl m-4 border-2 border-gray-300">
              <div>
                <img
                  className="w-full rounded-xl"
                  src="../src/assets/post-2.png"
                  alt=""
                />
              </div>
              <div>
                <div className="text-2xl font-bold flex ml-5 p-2">
                  <img className="w-5" src="../src/assets/hand.png" alt="" />
                  &nbsp;Education
                </div>

                <div className="flex justify-evenly">
                  <h3 className="text-3xl w-5/6 p-4">
                    Tax Benifits for Investments under National Pension scheme
                    lauched by Government of india
                  </h3>
                  <div className="block">
                    <img
                      className="w-8 py-8"
                      src="../src/assets/three-dots.png"
                      alt=""
                    />
                  </div>
                </div>

                <p className="mx-12">
                  I have been working in UX for the better part of decade from
                  now on i retire...
                </p>

                <div className="w-full flex justify-between p-5 gap-2">
                  <div className="flex w-full">
                    <img src="../src/assets/Profile-2.png" alt="" />
                    <div className="block py-1 w-full lg:flex lg:justify-between">
                      <h1 className="ml-2 lg:my-3">Sidharth koyal</h1>
                      <div className="flex ml-2 lg:my-3">
                        {" "}
                        <img
                          className="w-5 h-5"
                          src="../src/assets/eye.png"
                          alt=""
                        />{" "}
                        1.4k views
                      </div>
                    </div>
                  </div>
                  <div className="block-inline">
                    <img
                      className="w-8 py-4 "
                      src="../src/assets/share.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/*3's card*/}
            <div className="rounded-xl m-4 border-2 border-gray-300">
              <div>
                <img
                  className="w-full rounded-xl"
                  src="../src/assets/post-3.png"
                  alt=""
                />
              </div>
              <div>
                <div className="text-2xl font-bold flex ml-5 p-2">
                  <img className="w-5" src="../src/assets/hand.png" alt="" />
                  &nbsp;Meetup
                </div>

                <div className="flex justify-evenly">
                  <h3 className="text-3xl w-5/6 p-4">
                    Finance and Investment Elite Social Mixer @lujau
                  </h3>
                  <div className="block">
                    <img
                      className="w-8 py-8"
                      src="../src/assets/three-dots.png"
                      alt=""
                    />
                  </div>
                </div>

                <p className="mx-12">
                  Fri, 12 Oct 2018 &nbsp; &nbsp; &nbsp; &nbsp; Ahamedabad,India{" "}
                </p>

                <button className="text-red-600 w-full rounded-xl my-4 border-2 border-gray-700">
                  Visit Website
                </button>

                <div className="w-full flex justify-between p-5 gap-2">
                  <div className="flex w-full">
                    <img src="../src/assets/Profile-3.png" alt="" />
                    <div className="block py-1 w-full lg:flex lg:justify-between">
                      <h1 className="ml-2 lg:my-3">Sidharth koyal</h1>
                      <div className="flex ml-2 lg:my-3">
                        {" "}
                        <img
                          className="w-5 h-5"
                          src="../src/assets/eye.png"
                          alt=""
                        />{" "}
                        1.4k views
                      </div>
                    </div>
                  </div>
                  <div className="block-inline">
                    <img
                      className="w-8 py-4 "
                      src="../src/assets/share.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/*4's card*/}
            <div className="rounded-xl m-4 border-2 border-gray-300">
              <div>
                <div className="text-2xl font-bold flex ml-5 p-2">
                  <img className="w-5" src="../src/assets/hand.png" alt="" />
                  &nbsp;Job
                </div>

                <div className="flex justify-evenly">
                  <h3 className="text-3xl w-5/6 p-4">Software Engineer</h3>
                  <div className="block">
                    <img
                      className="w-8 py-8"
                      src="../src/assets/three-dots.png"
                      alt=""
                    />
                  </div>
                </div>

                <p className="mx-12">
                  innovacar analisys private limited &nbsp;&nbsp;&nbsp;&nbsp;
                  Noida,India
                </p>
                <button className="text-green-600 w-full rounded-xl border-2 my-4 border-gray-700">
                  Visit Website
                </button>

                <div className="w-full flex justify-between p-5 gap-2">
                  <div className="flex w-full">
                    <img src="../src/assets/Profile-2.png" alt="" />
                    <div className="block py-1 w-full lg:flex lg:justify-between">
                      <h1 className="ml-2 lg:my-3">Sidharth koyal</h1>
                      <div className="flex ml-2 lg:my-3">
                        {" "}
                        <img
                          className="w-5 h-5"
                          src="../src/assets/eye.png"
                          alt=""
                        />{" "}
                        1.4k views
                      </div>
                    </div>
                  </div>
                  <div className="block-inline">
                    <img
                      className="w-8 py-4 "
                      src="../src/assets/share.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*side area*/}
        <div className="w-1/3 hidden xl:block">
          {/*side header*/}
          <div className="w-full flex rounded-2xl border-b-2 border-gray-300 mt-8">
            <div className="block my-auto">
              <img
                className="w-8 h-auto"
                src="../src/assets/location (1).png"
                alt=""
              />
            </div>
            <input
              className="w-full"
              type="text"
              placeholder=" Enter your location"
            />
            <img src="../src/assets/edit.png" alt="" />
          </div>

          <div className="w-full flex rounded-2xl border-b-2 border-gray-300 mt-2">
            <div className="block mt-1.5 ml-1">
              <img
                className="w-8 h-auto"
                src="../src/assets/caution.png"
                alt=""
              />
            </div>
            <p className="text-gray-400 ml-2 ">
              your location will help us to serve better and extended
              personalized experience
            </p>
          </div>

          <div className="flex mx-2 my-3 w-full">
            <div className="flex ">
              <img
                className="my-auto block w-8 h-auto"
                src="../src/assets/like.png"
                alt=""
              />
              <h2 className="text-sm ml-2 p-2"> RECOMMENDED GROUPUS </h2>
            </div>
          </div>

          {/*side profile*/}
          <div className="w-full my-3 flex justify-between">
            <div className="flex">
              <div className="block my-auto">
                <img
                  className="w-16 h-auto"
                  src="../src/assets/profile-1.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl p-2 ">Leisure</h1>
            </div>
            <button className="border-2 w-24 rounded-3xl border-gray-400">
              Follow
            </button>
          </div>

          <div className="w-full my-3 flex justify-between">
            <div className="flex">
              <div className="block my-auto">
                <img
                  className="w-16 h-auto"
                  src="../src/assets/profile-2.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl p-2 ">Activism</h1>
            </div>
            <button className="border-2 w-24 rounded-3xl border-gray-400">
              Follow
            </button>
          </div>

          <div className="w-full my-3 flex justify-between">
            <div className="flex">
              <div className="block my-auto">
                <img
                  className="w-16 h-auto"
                  src="../src/assets/profile-3.png"
                  alt=""
                />
              </div>
              <h1 className="text-xl p-2 ">MBA</h1>
            </div>
            <button className="border-2 w-24 rounded-3xl border-gray-400">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Post;
