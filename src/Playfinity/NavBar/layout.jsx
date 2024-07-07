import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  const [dropDown, setdropDown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setdropDown(false);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-sky-200 via-purple-300 to-blue-300 grid grid-cols-1 grid-rows-4"
      style={{ gridTemplateRows: "auto auto 1fr auto" }}
    >
      <div className="h-12 flex z-50 justify-center">
        <nav className="bg-gray-800 w-screen">
          <div className="px-2 mx-auto">
            <div className="flex items-center justify-center h-12">
              <div className="absolute z-20 flex justify-center md:left-3">
                <Link
                  to="/PlayFinity/"
                  className="text-white  font-bold text-xl"
                >
                  Playfinity
                </Link>
              </div>

              <nav>
                <div className="hidden md:block">
                  <ul className="flex">
                    <li>
                      <Link
                        to="/PlayFinity/"
                        className="text-gray-300 hover:text-white px-3 py-2 hover:text-lg rounded-md text-base font-medium"
                      >
                        Home
                      </Link>
                    </li>

                    <li className="relative">
                      <Link
                        to="#"
                        className={`text-gray-300 ${
                          dropDown ? "text-white text-lg" : ""
                        } hover:text-white px-3 py-2 rounded-md text-base font-medium`}
                        onMouseEnter={() => setdropDown(true)}
                        onMouseLeave={() => setdropDown(false)}
                      >
                        Games
                      </Link>
                      <ul
                        className={`${
                          !dropDown ? "hidden" : ""
                        } shadow-sm shadow-black z-50 bg-white absolute inline-block mt-10 min-w-max left-1/2 transform -translate-x-1/2 text-black px-2 py-2 rounded-md text-base font-bold`}
                        onMouseEnter={() => setdropDown(true)}
                        onMouseLeave={() => setdropDown(false)}
                      >
                        <li className="absolute w-2 transform -translate-x-1/2 h-0 left-1/2 -top-4 m-auto border-solid border-8 border-transparent border-b-white"></li>
                        <li className="px-2 py-2 hover:rounded hover:bg-slate-600 border-b-2 hover:text-white">
                          <Link to="/PlayFinity/BounceBall">BOUNCE BALL</Link>
                        </li>
                        <li className="px-2 py-2 hover:rounded hover:bg-slate-600 border-b-2 hover:text-white">
                          <Link to="/PlayFinity/MEMORYBOOSTER">
                            MEMORY BOOSTER
                          </Link>
                        </li>
                        <li className="px-2 py-2 hover:rounded hover:bg-slate-600 border-b-2 hover:text-white">
                          <Link to="/PlayFinity/TikTacToe">TIK-TAC-TOE</Link>
                        </li>
                        <li className="px-2 py-2 hover:rounded hover:bg-slate-600 hover:text-white">
                          <Link to="/PlayFinity/DICERUMBLE">DICE RUMBLE</Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <Link
                        to="/PlayFinity/About"
                        className=" hover:text-lg text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium"
                      >
                        About
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>

              <nav className="flex md:hidden relative justify-start items-center w-full">
                <div className="flex ">
                  <div className="flex items-center">
                    <button
                      onClick={toggleMobileMenu}
                      className="text-white hover:text-gray-300 focus:outline-none"
                    >
                      <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            className="transform bg-red-600"
                            d="M4 5h16a1 1 0 010 2H4a1 1 0 010-2zm0 7h16a1 1 0 010 2H4a1 1 0 010-2zm0 7h16a1 1 0 010 2H4a1 1 0 010-2z"
                          />
                        ) : (
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3 12a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0-7a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 14a1 1 0 100-2h16a1 1 0 100 2H4z"
                          />
                        )}
                      </svg>
                    </button>
                  </div>
                  {isMobileMenuOpen && (
                    <div className="absolute w-1/6 text-center -left-5 top-8">
                      <ul className="bg-gray-800 rounded-b-lg w-40 min-h-fit px-2 py-2 box-border shadow-md shadow-black">
                        <li>
                          <Link
                            to="/PlayFinity/"
                            className="block hover:bg-slate-600 border-b-2 hover:text-white hover:text-2xl text-gray-300 px-4 py-2 text-xl font-medium"
                            onClick={() => setdropDown(false)}
                          >
                            Home
                          </Link>
                        </li>

                        <li className="relative hover:bg-slate-600 active:bg-slate-600 px-4 py-2 border-b-2">
                          <Link
                            to="#"
                            className={`text-gray-300  ${
                              dropDown ? "text-white text-lg" : ""
                            } hover:text-white px-3 py-2 text-xl font-medium`}
                            onClick={() => setdropDown(!dropDown)}
                          >
                            Games
                          </Link>

                          <ul
                            className={`${
                              !dropDown ? "hidden" : ""
                            } shadow-sm shadow-black z-50 bg-gray-800 ml-8 absolute inline-block mt-10 min-w-max left-1/2 transform -translate-x-1/2 text-black px-2 py-2 rounded-md text-base font-semibold`}
                          >
                            <li className="px-2 py-2 text-gray-300 hover:rounded-t-md hover:bg-slate-600 border-b-2 hover:text-white">
                              <Link to="/PlayFinity/BounceBall">
                                BOUNCE BALL
                              </Link>
                            </li>
                            <li className="px-2 py-2 text-gray-300 hover:bg-slate-600 border-b-2 hover:text-white">
                              <Link to="/PlayFinity/MEMORYBOOSTER">
                                MEMORY BOOSTER
                              </Link>
                            </li>
                            <li className="px-2 py-2 text-gray-300 hover:bg-slate-600 border-b-2 hover:text-white">
                              <Link to="/PlayFinity/TikTacToe">
                                TIK-TAC-TOE
                              </Link>
                            </li>
                            <li className="px-2 py-2 text-gray-300 hover:rounded-b-md hover:bg-slate-600 hover:text-white">
                              <Link to="/PlayFinity/DICERUMBLE">
                                DICE RUMBLE
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <Link
                            to="/PlayFinity/About"
                            className="block hover:bg-slate-600 rounded-b-lg hover:text-white hover:text-2xl text-gray-300 px-4 py-2 text-xl font-medium"
                            onClick={() => setdropDown(false)}
                          >
                            About
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </nav>
            </div>
          </div>
        </nav>
      </div>

      <Outlet />

      <footer className="bg-slate-800">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <p className="text-white text-base font-bold">
              &copy; {new Date().getFullYear()} Playfinity. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
