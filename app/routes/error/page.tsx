import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Page() {
  return (
    <div>
      <div className='bg-[url("/head.png")] h-[350px] w-full sm:bg-cover hidden md:flex justify-center items-center'>
        <div>
          <h1 className="openSans sm:text-[48px] text-[32px] font-bold text-white">
            404 Error
          </h1>
          <ul className="flex mt-4 inter sm:text-[20px] text-[16px] sm:leading-[28px] text-center items-center justify-center">
            <li className="text-white ">Home </li>
            <li>
              <MdOutlineKeyboardArrowRight className="sm:text-[22px] text-[18px] text-white" />
            </li>
            <li className=" text-primYellow">404 Error</li>
          </ul>
        </div>
      </div>
      <div className="w-full h-full flex justify-center my-20">
        <div className="w-[1320px] mt-4 lg:mt-12 mb-12 p-3 sm:p-0">
          <div>
            <h1 className="openSans lg:text-[96px] sm:text-[42px] text-[28px] font-bold lg:leading-[106px] text-primYellow text-center">
              404
            </h1>
            <p className="openSans lg:text-[32px] sm:text-[24px] text-[15px] font-bold lg:leading-[40px] text-zinc-900 text-center mt-1 sm:mt-4">
              Oops! Look likes something is going wrong
            </p>
            <p className="inter lg:text-[18px] sm:text-[14px] text-[10px] lg:leading-[26px] text-zinc-700 text-center mt-1 sm:mt-4">
              Page Cannot be found! we will have it figured out in no time.
              Meanwhile, check out these fresh ideas:
            </p>
          </div>
          <div className="w-full flex justify-center">
            <Link href={"./"}>
              <button className="sm:mt-6 mt-2 bg-primYellow rounded-md text-white inter sm:text-[18px] text-[12px] py-2 sm:py-3 px-4 sm:px-8">
                Go to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
