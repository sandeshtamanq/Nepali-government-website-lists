import React from "react";

interface cardProps {
  name: string;
  description: string;
  url: string;
  imageUrl: string;
}

const Card: React.FC<cardProps> = ({ name, description, url, imageUrl }) => {
  return (
    <>
      <a href={url} target="_blank">
        <div className="h-[22rem] text-white border border-gray-500 rounded-md cursor-pointer relative">
          <img src={`/images/${imageUrl}.png`} alt="" className="h-[21.9rem] rounded-md object-cover" />
          <div className="absolute h-full w-full bg-[#383838]/70 opacity-0 hover:opacity-95 rounded-md transition-all top-0 z-1 duration-300">
            <div className="h-full w-full flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-3xl">{name.toUpperCase()}</h1>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default Card;
