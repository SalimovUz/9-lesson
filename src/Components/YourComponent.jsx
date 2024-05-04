import { useState } from "react";

const initialData = [
  {
    name: "Vulputate velit lacus, enim viverra quis.",
    start: "10.06.2021",
    end: "01.09.2021",
    condition: "Активный",
  },
  {
    name: "Vulputate velit lacus, enim viverra quis.",
    start: "10.06.2021",
    end: "01.09.2021",
    condition: "Активный",
  },
  {
    name: "Vulputate velit lacus, enim viverra quis.",
    start: "10.06.2021",
    end: "01.09.2021",
    condition: "Активный",
  },
  {
    name: "Vulputate velit lacus, enim viverra quis.",
    start: "10.06.2021",
    end: "01.09.2021",
    condition: "Активный",
  },
  {
    name: "Vulputate velit lacus, enim viverra quis.",
    start: "10.06.2021",
    end: "01.09.2021",
    condition: "Активный",
  },
  {
    name: "Vulputate velit lacus, enim viverra quis.",
    start: "10.06.2021",
    end: "01.09.2021",
    condition: "Активный",
  },
  {
    name: "Vulputate velit lacus, enim viverra quis.",
    start: "10.06.2021",
    end: "01.09.2021",
    condition: "Активный",
  },
  {
    name: "Vulputate velit lacus, enim viverra quis.",
    start: "10.06.2021",
    end: "01.09.2021",
    condition: "Активный",
  },
  {
    name: "Vulputate velit lacus, enim viverra quis.",
    start: "10.06.2021",
    end: "01.09.2021",
    condition: "Активный",
  },
];

const YourComponent = () => {
  const [data, setData] = useState(initialData);

  return (
    <div className="md:container w-full mx-auto">
      <table className="border-collapse flex w-full mx-auto flex-col border-[#E5E9EB] border-2 rounded-lg p-5">
        <thead className="mx-auto border-collapse">
          <tr className="flex">
            <th className="w-[400px] flex items-center justify-start">
              Название
            </th>
            <th className="w-[170px] flex items-center justify-center">
              Начало акции
            </th>
            <th className="w-[170px] flex items-center justify-center">
              Конец акции
            </th>
            <th className="w-[170px] flex items-center justify-center">
              Статус
            </th>
          </tr>
        </thead>
        <tbody className="mx-auto border-collapse">
          {data.map((item, index) => (
            <tr key={index} className="flex border-collapse">
              <td className="border-collapse border-t border-b border-[#E5E9EB] w-[400px] h-[48px] flex items-center justify-start">
                <p>{item.name}</p>
              </td>
              <td className="border-collapse border-t border-b border-[#E5E9EB] w-[170px]  h-[48px] flex items-center justify-center">
                <p>{item.start}</p>
              </td>
              <td className="border-collapse border-t border-b border-[#E5E9EB] w-[170px] h-[48px] flex items-center justify-center">
                <p>{item.end}</p>
              </td>
              <td className="border-collapse border-t border-b border-[#E5E9EB] w-[170px ] flex items-center justify-center">
                <div className="flex items-center justify-center gap-5">
                  <button className="h-min px-[16px] bg-[#e0efff] text-[#4094F7] rounded-[6px] ">
                    {item.condition}
                  </button>
                  <span className="p-[12px] bg-white shadow-md ">
                    <svg
                      className=""
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M8 12C8 12.5304 7.78929 13.0391 7.41421 13.4142C7.03914 13.7893 6.53043 14 6 14C5.46957 14 4.96086 13.7893 4.58579 13.4142C4.21071 13.0391 4 12.5304 4 12C4 11.4696 4.21071 10.9609 4.58579 10.5858C4.96086 10.2107 5.46957 10 6 10C6.53043 10 7.03914 10.2107 7.41421 10.5858C7.78929 10.9609 8 11.4696 8 12ZM14 12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14C11.4696 14 10.9609 13.7893 10.5858 13.4142C10.2107 13.0391 10 12.5304 10 12C10 11.4696 10.2107 10.9609 10.5858 10.5858C10.9609 10.2107 11.4696 10 12 10C12.5304 10 13.0391 10.2107 13.4142 10.5858C13.7893 10.9609 14 11.4696 14 12ZM18 14C18.5304 14 19.0391 13.7893 19.4142 13.4142C19.7893 13.0391 20 12.5304 20 12C20 11.4696 19.7893 10.9609 19.4142 10.5858C19.0391 10.2107 18.5304 10 18 10C17.4696 10 16.9609 10.2107 16.5858 10.5858C16.2107 10.9609 16 11.4696 16 12C16 12.5304 16.2107 13.0391 16.5858 13.4142C16.9609 13.7893 17.4696 14 18 14Z"
                        fill="#2E3A59"
                      />
                    </svg>
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YourComponent;
