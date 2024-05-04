import React from "react";
import { IoIosRefresh } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { TfiLayoutColumn3Alt } from "react-icons/tfi";
import { FaFilter } from "react-icons/fa";
import { GiSaveArrow } from "react-icons/gi";

const Header = () => {
  return (
    <div>
      <div className="border-b">
        <header className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-[#5B6871] text-[18px] my-[20px]">
              Список акций
            </h1>

            <div className="flex justify-center items-center  ">
              <button className="border text-[blue] flex justify-between items-center gap-2 px-[10px] py-[20px]">
                <IoIosRefresh className="text-[blue]" />
                Обновить Telegram
              </button>
              <button className="border text-[green] flex justify-between items-center gap-2 px-[15px] py-[20px]">
                <FaPlus className="text-[green]" />
                Добавить
              </button>
            </div>
          </div>
        </header>
      </div>
      <div className="bg-[#6E8BB70D] px-6">
        <div className=" container mx-auto px-4 flex justify-between items-center">
          <form action="" className="bg-[white] my-[15px]">
            <label
              for="search"
              className="border-none px-[10px] py-[8px] w-[300px] flex items-center gap-2 "
            >
              <FaSearch className="text-[grey]" />
              <input
                className="outline-none"
                type="text"
                id="search"
                name="search "
                placeholder="Поиск..."
              />
            </label>
          </form>
          <div className="flex justify-between items-center gap-4">
            <p className="flex justify-between items-center gap-4 text-[#303940]">
              <TfiLayoutColumn3Alt />
              Столбцы
            </p>
            <p className="flex justify-between items-center gap-4 text-[#303940]">
              <FaFilter />
              Фильтр
            </p>
            <p className="flex justify-between items-center gap-4 text-[#303940]">
              <GiSaveArrow />
              Скачать
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
