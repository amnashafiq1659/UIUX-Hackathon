import React from "react";
import Image from "next/image";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { RiLinkedinLine } from "react-icons/ri";

function Footer() {
  return (
    <>
      <div className="h-full w-full">
        <main className="bg-black w-full justify-center text-white flex items-center p-3 lg:p-6 xl:p-0">
          <div className="w-full lg:w-[1320px] flex-col p-2 sm:py-12 border-b-[1px] border-primYellow">
            <div className="w-full mt-6 md:flex justify-between">
              <div>
                <h1 className="text-[18px] md:text-[28px] lg:text-[32px] font-bold leading-snug md:leading-tight text-primYellow openSans">
                  St
                  <span className="text-white">ill You Need Our Support?</span>
                </h1>
                <p className="inter sm:text-[16px] text-[10px] sm:mt-4 mt-2">
                  Don&apos;t wait make a smart & logical quote here. Its pretty
                  easy.
                </p>
              </div>
              <div>
                <div className="flex items-center px-10 sm:text-[16px] text-[6px]  inter font-normal mt-3 lg:mt-0">
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    className="bg-primYellow text-white placeholder:text-white outline-none w-full py-[12px] px-5"
                  ></input>
                  <button
                    type="submit"
                    className="bg-white text-primYellow  text-center md:px-6 px-3 py-[12px]"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="lg:h-[440px] h-full w-full bg-black flex justify-center items-center border-b-[1px] border-gray-800">
        <div className="sm:flex justify-between grid grid-cols-2 w-[1170px] p-3 space-y-6 lg:space-y-0 gap-3 lg:gap-0">
          <div className="text-white md:space-y-[24px] space-y-2 lg:w-[320px] sm:w-[200px] w-[145px] mt-[24px] lg:mt-0">
            <h1 className="openSans font-bold sm:text-[24px] text-[20px] leading-[32px]">
              About us
            </h1>
            <p className="inter font-normal sm:text-[16px] text-[12px] sm:leading-[24px]">
              orporate clients and leisure travelers has been relying on
              Groundlink for dependab safe, and professional chauffeured car
              service in major cities across World.
            </p>
            <div className="flex gap-1 md:gap-4">
              <div className="bg-primYellow flex items-center justify-center lg:py-3 lg:px-3 px-2 hover:scale-105 transition-transform duration-200">
                <MdAccessTime
                  size={56}
                  className="md:size-[56px] size-[20px]"
                />
              </div>
              <ul className="">
                <li className="inter lg:text-[16px] text-[8px] text-white text-left mt-1">
                  Opening Hours
                </li>
                <li className="inter lg:text-[16px] text-[8px] text-white text-left mt-1">
                  Mon - Sat(8:00 to 6:00)
                </li>
                <li className="inter lg:text-[16px] text-[8px] text-white text-left mt-1">
                  Sunday Closed
                </li>
              </ul>
            </div>
          </div>

          <div className="text-white md:space-y-[24px] space-y-2">
            <h1 className="openSans font-bold sm:text-[24px] text-[18px] sm:leading-[28px] leading-[22px]">
              Useful Link
            </h1>
            <p className="inter font-normal sm:text-[16px] text-[12px] leading-[24px] cursor-pointer hover:underline">
              About
            </p>
            <p className="inter font-normal sm:text-[16px] text-[12px] leading-[24px] cursor-pointer hover:underline">
              News
            </p>
            <p className="inter font-normal sm:text-[16px] text-[12px] leading-[24px] cursor-pointer hover:underline">
              Partners
            </p>
            <p className="inter font-normal sm:text-[16px] text-[12px] leading-[24px] cursor-pointer hover:underline">
              Team
            </p>
            <p className="inter font-normal sm:text-[16px] text-[12px] leading-[24px] cursor-pointer hover:underline">
              Menu
            </p>
            <p className="inter font-normal sm:text-[16px] text-[12px] leading-[24px] cursor-pointer hover:underline">
              Contact
            </p>
          </div>
          <div className="text-white md:space-y-[24px] space-y-2">
            <h1 className="openSans font-bold sm:text-[24px] text-[18px] sm:leading-[28px] leading-[22px]">
              Help?
            </h1>
            <p className="inter font-normal sm:text-[16px] text-[12px] leading-[24px] cursor-pointer hover:underline">
              FAQ
            </p>
            <p className="inter font-normal sm:text-[16px] text-[12px] leading-[24px] cursor-pointer hover:underline">
              Term & conditions
            </p>
            <p className="inter font-normal sm:text-[16px] text-[12px] leading-[24px] cursor-pointer hover:underline">
              Reporting
            </p>
            <p className="inter font-normal sm:text-[16px] text-[12px] leading-[24px] cursor-pointer hover:underline">
              Documentation
            </p>
            <p className="inter font-normal sm:text-[16px] text-[12px] leading-[24px] cursor-pointer hover:underline">
              Support Policy
            </p>
            <p className="inter font-normal sm:text-[16px] text-[12px] leading-[24px] cursor-pointer hover:underline">
              Privacy
            </p>
          </div>
          <div className="text-white md:space-y-[24px] space-y-2">
            <h1 className="openSans font-bold sm:text-[20px] text-[18px] sm:leading-[28px] leading-[22px]">
              Recent Post
            </h1>
            <div className="space-y-2">
              <Image
                src={"/rec1.png"}
                alt=""
                width={245}
                height={53}
                className="cursor-pointer w-[70px] h-[19px] md:w-[104px] md:h-[34px]"
              ></Image>
              <Image
                src={"/rec2.png"}
                alt=""
                width={245}
                height={53}
                className="cursor-pointer w-[70px] h-[19px] md:w-[104px] md:h-[34px]"
              ></Image>
              <Image
                src={"/rec3.png"}
                alt=""
                width={245}
                height={53}
                className="cursor-pointer w-[70px] h-[19px] md:w-[104px] md:h-[34px]"
              ></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#4F4F4F] flex justify-center items-center">
        <div className="lg:w-[1320px] flex justify-between items-center">
          <div className="flex text-white gap-2 lg:text-[16px] text-[8px] inter font-normal items-center p-2">
            <p className="my-6">
              Copyright © 2022 by Ayeman. All Rights Reserved.
            </p>
          </div>
          <div>
            <ul className="flex md:gap-4 gap-1 text-white items-center">
              <li>
                <RiFacebookLine size={24} className="lg:size-6 size-3" />
              </li>
              <li>
                <CiTwitter size={24} className="lg:size-6 size-3" />
              </li>
              <li>
                <FaInstagram size={24} className="lg:size-6 size-3" />
              </li>
              <li>
                <RiLinkedinLine size={24} className="lg:size-6 size-3" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
