import Link from "next/link";
import Image from "next/image";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CiLock, CiMail } from "react-icons/ci";

function Page() {
  return (
    <div>
      <div className='bg-[url("/head.png")] h-[350px] w-full sm:bg-cover hidden md:flex justify-center items-center'>
        <div>
          <h1 className="openSans sm:text-[48px] text-[32px] font-bold text-white">
            Log In Page
          </h1>
          <ul className="flex mt-4 inter sm:text-[20px] text-[16px] sm:leading-[28px] text-center items-center justify-center">
            <li className="text-white ">Home </li>
            <li>
              <MdOutlineKeyboardArrowRight className="sm:text-[22px] text-[18px] text-white" />
            </li>
            <li className=" text-primYellow"> Log In</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center min-h-screen bg-white sm:py-6 lg:py-12">
        <div className="bg-white w-[424px] p-6 h-[624px] shadow-lg">
          <h2 className="openSans text-[20px] leading-[26px] text-[#333333] font-bold">
            Sign In!
          </h2>

          <form action="" className="space-y-4 py-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CiMail className="h-5 w-5 text-[#4F4F4F]" />
              </div>
              <input
                type="email"
                name=""
                id=""
                placeholder="Mail"
                className="pl-10 block mt-1 w-full placeholder:text-[#4F4F4F] border-[#E0E0E0] border-2 text-xs outline-none px-3 py-2 "
              />
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <CiLock className="h-5 w-5 text-[#4F4F4F]" />
              </div>
              <input
                type="password"
                name=""
                id=""
                placeholder="Password"
                className="pl-10 block mt-1 w-full placeholder:text-[#4F4F4F] border-[#E0E0E0] border-2 text-xs outline-none px-3 py-2 "
              />
            </div>
            <div className="flex gap-2">
              <input type="checkbox" name="check" id="check" />
              <p className="text-[16px] text-[#4F4F4F]">Remember me?</p>
            </div>
            <div>
              <button
                type="submit"
                className="bg-primYellow w-full block text-sm inter transition-all py-2 border-primYellow border-2 hover:bg-white hover:border-primYellow hover:text-primYellow text-white"
              >
                Sign In
              </button>
            </div>
            <div className="text-xs text-center justify-center flex text-[#4F4F4F]">
              <p>Don&apos;t have an Account? </p>
              <Link
                href={"/routes/signup"}
                className="text-primYellow ml-2 underline"
              >
                Signup
              </Link>
            </div>
            <div>
              <Image src={"/or.png"} alt="" height={152} width={360} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;
