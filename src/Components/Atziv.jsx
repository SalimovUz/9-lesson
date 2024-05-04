import React, { useState } from "react";
// import Like from "../../public/assets/like.svg";
// import DisLike from "../../public/assets/dislike.svg";
// import Points from "../../public/assets/points.svg";

const Atziv = () => {
const [order, setOrder] = useState(1)
 

  return (
    <div className="z-0 " >
      <div className="bg-white rounded-lg h-[856px] w-full  border border-white relative ">
        <div className="mx-6 mt-5 flex gap-[546px] items-center border border-gray-300 rounded-t-xl">
          <span className="font-semibold px-8 text-gray-500">Название</span>
          <div className="flex gap-[100px]">
            <span className="font-semibold text-gray-500  bg-white p-5 text-center">
              Тип
            </span>
            <span className="font-semibold text-gray-500 bg-white p-5">
              Статус
            </span>
          </div>
        </div>
        <div className="mx-6 flex gap-[505px] items-center border  border-gray-300 ">
          <span className=" text-gray-500 text-base mx-4">
            <span className="mx-3">😉</span> Курьер молодец
          </span>
          <div className="flex gap-[100px]">
            <img src={Like} alt="Like icon" />
            <div className="flex gap-[50px]">
              <button className="bg-gray-300 text-blue-600 mt-6 w-[144px] h-[24px] hover:bg-sky-300 rounded font-bold ">
                Активный
              </button>
              <img src={Points} alt="Points icon" />
            </div>
          </div>
        </div>{" "}
        <div className="mx-6 flex gap-[495px] items-center border  border-gray-300 ">
          <span className=" text-gray-500 text-base mx-4">
            <span className="mx-3">⚡️</span> Быстрая доставка
          </span>
          <div className="flex gap-[100px]">
            <img src={Like} alt="Like icon" />
            <div className="flex gap-[50px]">
              <button className="bg-gray-300 text-blue-600 mt-6 w-[144px] h-[24px] hover:bg-sky-300 rounded font-bold ">
                Активный
              </button>
              <img src={Points} alt="Points icon" />
            </div>
          </div>
        </div>{" "}
        <div className="mx-6 flex gap-[540px] items-center border  border-gray-300 ">
          <span className=" text-gray-500 text-base mx-4">
            <span className="mx-3">😋</span> Вкусная еда
          </span>
          <div className="flex gap-[100px]">
            <img src={Like} alt="Like icon" />
            <div className="flex gap-[50px]">
              <button className="bg-gray-300 text-blue-600 mt-6 w-[144px] h-[24px] hover:bg-sky-300 rounded font-bold ">
                Активный
              </button>
              <img src={Points} alt="Points icon" />
            </div>
          </div>
        </div>{" "}
        <div className="mx-6 flex gap-[347px] items-center border  border-gray-300 ">
          <span className=" text-gray-500 text-base mx-4">
            <span className="mx-3">🤝</span>Оператор был вежлив и дружелюбен
          </span>
          <div className="flex gap-[100px]">
            <img src={DisLike} alt="DisLike icon" />
            <div className="flex gap-[50px]">
              <button className="bg-gray-300 text-blue-600 mt-6 w-[144px] h-[24px] hover:bg-sky-300 rounded font-bold ">
                Активный
              </button>
              <img src={Points} alt="Points icon" />
            </div>
          </div>
        </div>{" "}
        <div className="mx-6 flex gap-[506px] items-center border  border-gray-300 ">
          <span className=" text-gray-500 text-base mx-4">
            <span className="mx-3">🐌</span> Долгая доставка
          </span>
          <div className="flex gap-[100px]">
            <img src={DisLike} alt="DisLike icon" />
            <div className="flex gap-[50px]">
              <button className="bg-gray-300 text-blue-600 mt-6 w-[144px] h-[24px] hover:bg-sky-300 rounded font-bold ">
                Активный
              </button>
              <img src={Points} alt="Points icon" />
            </div>
          </div>
        </div>{" "}
        <div className="mx-6 flex gap-[524px] items-center border  border-gray-300 ">
          <span className=" text-gray-500 text-base mx-4">
            <span className="mx-3">🙁</span> Остывшая еда
          </span>
          <div className="flex gap-[100px]">
            <img src={DisLike} alt="DisLike icon" />
            <div className="flex gap-[50px]">
              <button className="bg-gray-300 text-blue-600 mt-6 w-[144px] h-[24px] hover:bg-sky-300 rounded font-bold ">
                Активный
              </button>
              <img src={Points} alt="Points icon" />
            </div>
          </div>
        </div>{" "}
        <div className="mx-6 flex gap-[445px] items-center border  border-gray-300 rounded-b-xl ">
          <span className=" text-gray-500 text-base mx-4">
            <span className="mx-3">🙁</span> Проблемы с оператором
          </span>
          <div className="flex gap-[100px]">
            <img src={DisLike} alt="DisLike icon" />
            <div className="flex gap-[50px]">
              <button className="bg-gray-300 text-blue-600 mt-6 w-[144px] h-[24px] hover:bg-sky-300 rounded font-bold ">
                Активный
              </button>
              <img src={Points} alt="Points icon" />
            </div>
          </div>
        </div>{" "}

        
          <ul className="flex justify-end absolute items-center bottom-0 right-0 h-[64px] border-t px-6 w-full " >
            <li className={`text-[--grey] text-[24px] mr-2 `} > {"<"} </li>
            <li onClick={() =>  setOrder(1)} className={` cursor-pointer py-1 px-2 text-[20px] rounded-md  ${order === 1 ? "text-[--primary] border " : null }  `} >1</li>
            <li onClick={() =>  setOrder(2)} className={` cursor-pointer py-1 px-2 text-[20px] rounded-md  ${order === 2 ? "text-[--primary] border " : null }  `} >2</li>
            <li onClick={() =>  setOrder(3)} className={` cursor-pointer py-1 px-2 text-[20px] rounded-md  ${order === 3 ? "text-[--primary] border " : null }  `} >3</li>
            <li onClick={() =>  setOrder(4)} className={` cursor-pointer py-1 px-2 text-[20px] rounded-md  ${order === 4 ? "text-[--primary] border " : null }  `} >4</li>
            <li onClick={() =>  setOrder(5)} className={` cursor-pointer py-1 px-2 text-[20px] rounded-md  ${order === 5 ? "text-[--primary] border " : null }  `} >5</li>
            <li  className={` py-1 px-2 text-[20px] rounded-md  ${order === 6 ? "text-[--primary] border " : null }  `} > {"..."} </li>
            <li onClick={() =>  setOrder(7)} className={` cursor-pointer py-1 px-2 text-[20px] rounded-md  ${order === 7 ? "text-[--primary] border " : null }  `} > 86 </li>
            <li className={`text-[--grey] text-[24px] ml-2`} > {">"} </li>
          </ul>
        
      </div>
    </div>
  );
};

export default Atziv;
