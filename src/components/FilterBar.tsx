import React, { useState } from "react";

export type govWebObj = {
  name: string;
  url: string;
  description: string;
};
interface filterBarProps {
  GovermentWebsites: govWebObj[];
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}
const FilterBar: React.FC<filterBarProps> = ({ GovermentWebsites, filter, setFilter }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <div onClick={() => setOpen(false)} className="absolute w-full h-screen z-[9] top-0 left-0 overflow-hidden"></div>}
      <div className="relative flex itemes-center justify-center">
        <div className="flex cursor-pointer justify-between md:w-[32%] items-center " onClick={() => setOpen((preVal) => !preVal)}>
          <div>{filter}</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 animation transform duration-300 ${open ? "-rotate-180" : "rotate-0"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {open && (
          <div className="absolute overflow-auto top-8 z-10 bg-[#242424] border h-[40rem] border-gray-500 shadow-ld p-2 rounded-md">
            <div
              className="cursor-pointer p-2 rounded-lg hover:bg-[#111111]"
              onClick={() => {
                setFilter("All");
                setOpen(false);
              }}
            >
              All
            </div>
            {GovermentWebsites.map((item, index) => (
              <div
                className="cursor-pointer p-2 rounded-lg hover:bg-[#111111]"
                onClick={() => {
                  setFilter(item.name);
                  setOpen(false);
                }}
                key={index}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default FilterBar;
