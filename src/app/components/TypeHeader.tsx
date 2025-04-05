import React from "react";
import Image from "next/image";
import rectangle from "../assets/rectangle-type.svg";

type Direction = "left" | "right";

interface TypeHeaderProps {
  direction: Direction;
  header: string;
  subHeader: string;
  bodyText: string;
}

const TypeHeader: React.FC<TypeHeaderProps> = ({
  direction,
  header,
  subHeader,
  bodyText,
}) => {
  return (
    <div className={`flex flex-col-reverse mt-30 gap-10 ${direction === "left" ? "md:flex-row-reverse" : "md:flex-row"}`}>
      <div
        className={`${
          direction === "right" ? "md:text-right" : "md:text-left"
        } max-w-[500px] text-pretty flex items-center justify-center px-10 md:px-0 text-center`}
      >
        {bodyText}
      </div>

      {/* Headers */}
      <div className="flex flex-col items-center justify-center text-blzs-teal font-sans relative px-10 md:px-0">
        <div className='flex flex-col items-center justify-center relative min-h-[150px] before:content-[""] before:absolute before:bg-white before:h-[70%] before:w-full before:z-10 before:top-0 before:translate-y-[25%] before:left-0'>
          <div className="lowercase text-2xl z-20">{subHeader}</div>
          <div className="uppercase text-6xl font-bold z-20">{header}</div>
          <Image
            className="absolute right-[50%] translate-x-[50%] z-0"
            src={rectangle}
            alt="rectangle"
          />
        </div>
      </div>
    </div>
  );
};

export default TypeHeader;
