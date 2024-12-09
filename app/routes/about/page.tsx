import React from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Page() {
  return (
    <div>
      <div className='bg-[url("/head.png")] h-[350px] w-full sm:bg-cover hidden md:flex justify-center items-center'>
        <div>
          <h1 className="openSans sm:text-[48px] text-[32px] font-bold text-white">
            About Us
          </h1>
          <ul className="flex mt-4 inter sm:text-[20px] text-[16px] sm:leading-[28px] text-center items-center justify-center">
            <li className="text-white ">Home </li>
            <li>
              <MdOutlineKeyboardArrowRight className="sm:text-[22px] text-[18px] text-white" />
            </li>
            <li className=" text-primYellow">About</li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center my-16">
        <Image src={"/About us.png"} alt="" width={1320} height={734} />
      </div>
      <div className="flex items-center justify-center my-16">
        <Image src={"/Why chose us.png"} alt="" width={1320} height={865} />
      </div>
      <div className="flex items-center justify-center my-16">
        <Image src={"/Team Member.png"} alt="shop" width={1920} height={686} />
      </div>
      <div className="h-full w-full">
        <main className="bg-white w-full justify-center text-black flex items-center p-3 lg:p-6 xl:p-0">
          <div className="w-full lg:w-[1320px] flex-col p-2 sm:py-12">
            <div className="w-full mt-6 text-start">
              <h1 className="text-primYellow text-[18px] sm:text-[24px] lg:text-[32px] sm:leading-[32px] lg:leading-[40px] greatVibes tracking-wider">
                Testimonials
              </h1>
              <h1 className="text-[28px] md:text-[36px] lg:text-[60px] font-bold leading-snug md:leading-tight text-primYellow openSans">
                Wh<span className="text-black">at Our Clients are saying</span>
              </h1>
            </div>
            <div className="lg:mt-20 sm:mt-12 mt-4 flex justify-center">
              <div className="w-[868px] h-full bg-white flex justify-center">
                <Image
                  src={"/card.png"}
                  alt="card"
                  width={695}
                  height={485}
                  className="my-4"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src={"/Dot.png"}
                alt="dots"
                height={16}
                width={86}
                className="mt-4 sm:w-[86px] w-[35px]"
              />
            </div>
          </div>
        </main>
      </div>
      <div className="flex items-center justify-center my-16">
        <Image src={"/Food Menu.png"} alt="" width={1320} height={941} />
      </div>
    </div>
  );
}
