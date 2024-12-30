import { RiArrowRightUpLine } from "@remixicon/react";

const Footer = () => {
  return (
    <div className="flex justify-between w-full text-white font-space items-center py-8 ">
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
