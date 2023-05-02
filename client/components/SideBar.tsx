import type { ReactNode } from "react";
import Navbar from "./Navbar";
import { FaBell } from "react-icons/fa";
import { BsFillChatDotsFill } from "react-icons/bs";
import { BsMicrosoftTeams } from "react-icons/bs";
import { BsFillCalendarDayFill } from "react-icons/bs";
import { AiOutlineFile } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { AiFillQuestionCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { AiFillAppstore } from "react-icons/ai";
import { useState } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Navbar />
      <div className="flex mt-7 ">
        <div className="bg-gray-100 w-1/8 h-screen p-4">
          <ul className="flex flex-col space-y-4 justify-center items-center text-center mt-auto">
            
          <li className="text-xl">
              <a href="/Profile" className="focus:outline-none">
                <CgProfile  className="text-2xl inline-block mb-2 " />{" "}
                <br /> Profile
              </a>
            </li>

            <li className="text-xl">
              <a href="/Activity" className="focus:outline-none">
                <FaBell  className="text-2xl inline-block mb-2 " />{" "}
                <br /> Activity
              </a>
            </li>

            <li className="text-xl">
              <a href="/Chat" className="focus:outline-none">
                <BsFillChatDotsFill className="text-2xl inline-block mb-2 " />{" "}
                <br /> Chat
              </a>
            </li>

            <li className="text-xl">
              <a href="/Teams" className="focus:outline-none">
                <BsMicrosoftTeams  className="text-2xl inline-block mb-2 " />{" "}
                <br /> Teams
              </a>
            </li>


            <li className="text-xl">
              <a href="/Calendar" className="focus:outline-none">
                <BsFillCalendarDayFill  className="text-2xl inline-block mb-2 " />{" "}
                <br /> Calendar
              </a>
            </li>


            {/* <li className="text-xl">
              <button className="focus:outline-none" onClick={toggleSidebar}>
                <AiOutlineFile className="text-2xl inline-block mb-2" /> <br />{" "}
                Files
              </button>
            </li> */}
{/* 
            <li className="text-xl">
              <button className="focus:outline-none" onClick={toggleSidebar}>
                <AiFillAppstore className="text-2xl inline-block mb-2  " />{" "}
                <br /> Apps
              </button>
            </li> */}

            <li className="text-xl">
              <a href="/About" className="focus:outline-none">
                <AiFillQuestionCircle className="text-2xl inline-block mb-2 " />{" "}
                <br /> About
              </a>
            </li>

            <li className="text-xl">
              <button className="focus:outline-none" onClick={toggleSidebar}>
                <BsThreeDots className="text-2xl inline-block mb-2" /> <br />{" "}
                More
              </button>
            </li>
          </ul>
        </div>
        <main className={`flex-grow ${isSidebarOpen ? "ml-28" : ""}`}>
          {children}
        </main>
      </div>
    </>
  );
}
