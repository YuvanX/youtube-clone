import { RiArrowRightUpLine } from "@remixicon/react";

const Footer = () => {
  return (
    <div className="flex flex-col justify-start md:flex-row md:justify-between w-full text-white font-space items-start md:items-center py-8 ">
      <div className="flex items-center gap-2 font-light cursor-pointer hover:underline hover:text-gray-300">
        <div>
          <RiArrowRightUpLine size={40} />
        </div>
        <a className="text-sm md:text-lg" href="https://github.com/YuvanX/youtube-clone">Source code</a>
      </div>
      <div className="text-sm md:text-lg font-normal">Made by AbhiVignesh</div>
    </div>
  );
};

export default Footer;
