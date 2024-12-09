import React from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Page() {
  return (
    <div>
      <div className='bg-[url("/head.png")] h-[350px] w-full sm:bg-cover hidden md:flex justify-center items-center'>
        <div>
          <h1 className="openSans sm:text-[48px] text-[32px] font-bold text-white">
            Our Chefs
          </h1>
          <ul className="flex mt-4 inter sm:text-[20px] text-[16px] sm:leading-[28px] text-center items-center justify-center">
            <li className="text-white ">Home </li>
            <li>
              <MdOutlineKeyboardArrowRight className="sm:text-[22px] text-[18px] text-white" />
            </li>
            <li className=" text-primYellow">Chefs</li>
          </ul>
        </div>
      </div>
      <h1 className="openSans sm:hidden text-[32px] text-zinc-900 text-center mt-4">
        Our Chefs
      </h1>
      <div className="w-full h-full flex justify-center items-center py-5 sm:py-8 lg:py-20">
        <div className="grid md:grid-cols-4 grid-cols-2 md:grid-rows-3 gap-1 md:gap-3 xl:gap-6 p-1 sm:p-2 xl:p-0">
          <div>
            <Image src={"/Chef Card 1.png"} alt="" height={446} width={312} />
          </div>
          <div>
            <Image src={"/Chef Card 2.png"} alt="" height={446} width={312} />
          </div>
          <div>
            <Image src={"/Chef Card 3.png"} alt="" height={446} width={312} />
          </div>
          <div>
            <Image src={"/Chef Card 4.png"} alt="" height={446} width={312} />
          </div>
          <div>
            <Image src={"/Chef Card 5.png"} alt="" height={446} width={312} />
          </div>
          <div>
            <Image src={"/Chef Card 6.png"} alt="" height={446} width={312} />
          </div>
          <div>
            <Image src={"/Chef Card 7.png"} alt="" height={446} width={312} />
          </div>
          <div>
            <Image src={"/Chef Card 8.png"} alt="" height={446} width={312} />
          </div>
          <div>
            <Image src={"/Chef Card 9.png"} alt="" height={446} width={312} />
          </div>
          <div>
            <Image src={"/Chef Card 10.png"} alt="" height={446} width={312} />
          </div>
          <div>
            <Image src={"/Chef Card 11.png"} alt="" height={446} width={312} />
          </div>
          <div>
            <Image src={"/Chef Card 12.png"} alt="" height={446} width={312} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
