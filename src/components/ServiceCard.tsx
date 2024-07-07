import React from "react";
import Image from "next/image";

interface PropsType {
  img: string;
  title: string;
  desc: string;
}

const ServiceCard: React.FC<PropsType> = ({ img, title, desc }) => {
  return (
    <div className="prod-container">
      <div className="space-y-4 text-center flex flex-col  ">
        <div  className="h-28 w-28  mx-auto">
        <Image
          src={img}
          className="mx-auto "
          width={70}
          height={70}
          alt={title}
        />
        </div>
        <div className="uppercase flex items-center flex-col">
          {title}
          <div className="flex gap-2 w-fit mx-auto mt-2">
            <div className="bg-accent w-[7px] h-[7px] rounded-full " />
            <div className="bg-accent w-[7px] h-[7px] rounded-full" />
            <div className="bg-accent w-[7px] h-[7px] rounded-full" />
          </div>
        </div>
        <p className="text-[14px] text-gray-700 overflow-hidden overflow-ellipsis max-h-14">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
