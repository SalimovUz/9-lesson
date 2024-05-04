import React from "react";
import { SlBasket } from "react-icons/sl";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineMyLocation } from "react-icons/md";
import { IoStatsChart } from "react-icons/io5";
import { RiMenuUnfold4Line2 } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "../App.css"


const Sidebar = () => {
  return (
    <div className="flex w-[25%]">
      <div className="sidebar h-screen w-[95%] flex bg-[#FFFFFF] border-r border-solid border-gray-200 pr-5">
        <div className="left flex flex-col w-[25%] items-center  mt-2 justify-between">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-center w-[50px] h-[50px] py-2 text-xl rounded-full text-white font-semibold bg-blue-600 ml-[-20px]">
              D
            </h1>
            <SlBasket className="w-[50px] h-[50px] border-r-[3px] border-solid hover:border-blue-500 pr-5 border-white transition-all duration-500" />
            <IoPeopleSharp className="w-[50px] h-[50px] border-r-[3px] border-solid hover:border-blue-500 pr-5 border-white transition-all duration-500" />
            <MdOutlineMyLocation className="w-[50px] h-[50px] border-r-[3px] border-solid hover:border-blue-500 pr-5 border-white transition-all duration-500" />
            <IoStatsChart className="w-[50px] h-[50px] border-r-[3px] border-solid hover:border-blue-500 pr-5 border-white transition-all duration-500" />
          </div>
          <div>
            <IoIosNotifications className="w-[50px] h-[50px] border-r-[3px] border-solid hover:border-blue-500 pr-5 border-white transition-all duration-500" />
            <IoMdSettings className="w-[50px] h-[50px] border-r-[3px] border-solid hover:border-blue-500 pr-5 border-white transition-all duration-500" />
          </div>
        </div>

        <span className="h-screen w-[3px] bg-slate-300 mr-4"></span>

        <div id="hello"  className="sidebarr right w-full flex flex-col gap-8 py-4">
          <div className="flex items-center justify-between ">
            <h1 className="text-2xl text-blue-700 font-bold">Delever</h1>
            <RiMenuUnfold4Line2 />
          </div>

          <ul className="flex flex-col items-center gap-5">
            <NavLink to="/" className="hover:bg-blue-500 py-2 hover:text-white text-black rounded-lg px-4 text-bold text-lg w-full">
              Акции
            </NavLink>
            <NavLink to="/banner" className="hover:bg-blue-500 py-2 text-black hover:text-white rounded-lg px-4 text-bold text-lg w-full transition-all duration-500">
              Баннеры
            </NavLink>
            <NavLink to="/believe" className="hover:bg-blue-500 py-2 text-black hover:text-white rounded-lg px-4 text-bold text-lg w-full transition-all duration-500">
              Отзывы
            </NavLink>

            <select className="w-full px-4 py-2 text-lg" name="" id="">
              <option value="">Рассылка</option>
            </select>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
