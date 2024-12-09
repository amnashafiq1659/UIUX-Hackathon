import React from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Page() {
  return (
    <div>
      <div className='bg-[url("/head.png")] h-[350px] w-full sm:bg-cover hidden md:flex justify-center items-center'>
        <div>
          <h1 className="openSans sm:text-[48px] font-bold text-[32px] text-white">
            FAQ Page
          </h1>
          <ul className="flex mt-4 inter sm:text-[20px] text-[16px] sm:leading-[28px] text-center items-center justify-center">
            <li className="text-white ">Home </li>
            <li>
              <MdOutlineKeyboardArrowRight className="sm:text-[22px] text-[18px] text-white" />
            </li>
            <li className=" text-primYellow"> FAQ</li>
          </ul>
        </div>
      </div>
      <div className="w-full h-full flex justify-center">
        <div className="w-[1320px] mt-4 lg:mt-12 mb-12">
          <div>
            <h1 className="openSans lg:text-[48px] sm:text-[32px] text-[18px] lg:leading-[56px] font-bold text-[#333333] text-center">
              Questions Looks Here
            </h1>
            <p className="inter lg:text-[18px] sm:text-[14px] text-[8px] lg:leading-6 text-[#4F4F4F] mt-4 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
              quod blanditiis est!
            </p>
          </div>
          <div className="grid grid-cols-1 grid-rows-6 gap-2 sm:grid-cols-2 sm:grid-rows-3 lg:mt-16 mt-2 p-2 space-y-2 lg:space-y-4">
            <div className="lg:mt-4 mt-2">
              <Image src={"/faq1.png"} alt="" width={648} height={170} />
            </div>
            <div>
              <Image src={"/faq2.png"} alt="" width={648} height={170} />
            </div>
            <div>
              <Image src={"/faq3.png"} alt="" width={648} height={170} />
            </div>
            <div>
              <Image src={"/faq4.png"} alt="" width={648} height={170} />
            </div>
            <div>
              <Image src={"/faq5.png"} alt="" width={648} height={170} />
            </div>
            <div>
              <Image src={"/faq6.png"} alt="" width={648} height={170} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
