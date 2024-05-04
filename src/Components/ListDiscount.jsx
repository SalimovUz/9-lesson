import React from "react";
import BannerImg1 from "../../public/img/Rectangle 11611.svg";
import BannerImg2 from "../../public/img/rasm2.svg";
import BannerImg3 from "../../public/img/rasm3.svg";
import BannerImg4 from "../../public/img/rasm4.svg";
import BannerImg5 from "../../public/img/rasm5.svg";
import { BsThreeDots } from "react-icons/bs";

const ListDiscount = () => {
  return (
    <div>
      <div className="wrapper mx-auto py-6 p-4  ">
        <div className="container mx-auto border ">
          <div className="navbar flex items-center border rounded p-4 ">
            <div className="Banner flex items-center justify-between gap-36 ">
              <div className="izobrajeniya flex gap-8">
                <p className="cursor-pointer">Изображение</p>
              </div>
              <p className="cursor-pointer ml-24">Hазвание на узбекском</p>

              <p className="cursor-pointer">Hазвание на русском</p>
              <p className="pl-10 cursor-pointer">Статус</p>
            </div>
          </div>
          <div className="Banners  flex flex-col ">
            <div className="Banner flex items-center justify-between  border p-4 rounded">
              <div className="izobrajeniya flex gap-4 items-center">
                <img src={BannerImg1} alt="photo" className="w-[70%] h-[70%]" />
              </div>
              <p className="">Баннер1</p>

              <p className="">Баннер1</p>
              <div className="flex gap-10 justify-between items-center  ">
                {" "}
                <button className="py-1 text-blue-600 bg-blue-200 px-3 rounded-md">
                  Активный
                </button>
                <BsThreeDots className="text-blue-400" />
              </div>
            </div>
            <div className="Banner flex items-center justify-between border p-4 rounded">
              <div className="izobrajeniya flex gap-4 items-center">
                <img src={BannerImg2} alt="photo" className="w-[70%] h-[70%]" />
              </div>
              <p className="">Баннер1</p>

              <p className="">Баннер1</p>
              <div className="flex gap-10 justify-between items-center  ">
                {" "}
                <button className="py-1 text-blue-600 bg-blue-200 px-3 rounded-md">
                  Активный
                </button>
                <BsThreeDots className="text-blue-400 cursor-pointer" />
              </div>
            </div>
            <div className="Banner flex items-center justify-between border p-4 rounded">
              <div className="izobrajeniya flex gap-4 items-center">
                <img src={BannerImg3} alt="photo" className="w-[70%] h-[70%]" />
              </div>
              <p className="">Баннер1</p>

              <p className="">Баннер1</p>
              <div className="flex gap-10 justify-between items-center  ">
                {" "}
                <button className="py-1 text-blue-600 bg-blue-200 px-3 rounded-md">
                  Активный
                </button>
                <BsThreeDots className="text-blue-400 cursor-pointer" />
              </div>
            </div>
            <div className="Banner flex items-center justify-between border p-4 rounded">
              <div className="izobrajeniya flex gap-4 items-center">
                <img src={BannerImg4} alt="photo" className="w-[70%] h-[70%]" />
              </div>
              <p className="">Баннер1</p>

              <p className="">Баннер1</p>
              <div className="flex gap-10 justify-between items-center  ">
                {" "}
                <button className="py-1 text-blue-600 bg-blue-200 px-3 rounded-md">
                  Активный
                </button>
                <BsThreeDots className="text-blue-400 cursor-pointer" />
              </div>
            </div>
            <div className="Banner flex items-center justify-between border p-4 rounded">
              <div className="izobrajeniya flex gap-4 items-center">
                <img src={BannerImg5} alt="photo" className="w-[70%] h-[70%]" />
              </div>
              <p className="">Баннер1</p>

              <p className="">Баннер1</p>
              <div className="flex gap-10 justify-between items-center  ">
                {" "}
                <button className="py-1 text-blue-600 bg-blue-200 px-3 rounded-md">
                  Активный
                </button>
                <BsThreeDots className="text-blue-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListDiscount;
