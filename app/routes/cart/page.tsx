import React from "react";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

function Page() {
  return (
    <div>
      <div className='bg-[url("/head.png")] h-[350px] w-full sm:bg-cover hidden md:flex justify-center items-center'>
        <div>
          <h1 className="openSans sm:text-[48px] text-[32px] font-bold text-white">
            Shopping Cart
          </h1>
          <ul className="flex mt-4 inter sm:text-[20px] text-[16px] sm:leading-[28px] text-center items-center justify-center">
            <li className="text-white ">Home </li>
            <li>
              <MdOutlineKeyboardArrowRight className="sm:text-[22px] text-[18px] text-white" />
            </li>
            <li className=" text-primYellow">Shopping cart</li>
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-center items-center">
        <ul className="2xl:w-[1320px] w-full lg:p-12 md:p-8 p-4">
          <li className="lg:flex hidden justify-between openSans font-bold text-[#333333] text-[16px] leading-[24px]">
            <p>Products</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </li>
          <li className="flex sm:items-center lg:justify-normal justify-between openSans text-[16px] leading-[24px] py-3 border-b-[1px] border-zinc-200">
            <div>
              <Image src={"/cart1.png"} alt="" width={225} height={97} />
            </div>
            <div className="lg:flex-row flex flex-col justify-between">
              <p className="text-zinc-700 xl:ml-[82px]">$35.00</p>
              <p className="xl:ml-48 lg:ml-32 sm:flex hidden">+1-</p>
              <p className="xl:ml-52 lg:ml-36 sm:flex hidden  font-bold text-[#333333]">
                $173.00
              </p>
              <p className="text-zinc-700 xl:ml-48 ml-36 lg:flex hidden hover:text-primYellow cursor-pointer">
                X
              </p>
            </div>
          </li>
          <li className="flex sm:items-center lg:justify-normal justify-between openSans text-[16px] leading-[24px] py-3 border-b-[1px] border-zinc-200">
            <div>
              <Image src={"/cart2.png"} alt="" width={225} height={97} />
            </div>
            <div className="lg:flex-row flex flex-col justify-between">
              <p className="text-zinc-700 xl:ml-[82px]">$25.00</p>
              <p className="xl:ml-48 lg:ml-32 sm:flex hidden">+1-</p>
              <p className="xl:ml-52 lg:ml-36 sm:flex hidden  font-bold text-[#333333]">
                $233.00
              </p>
              <p className="text-zinc-700 xl:ml-48 ml-36 lg:flex hidden hover:text-primYellow cursor-pointer">
                X
              </p>
            </div>
          </li>
          <li className="flex sm:items-center lg:justify-normal justify-between openSans text-[16px] leading-[24px] py-3 border-b-[1px] border-zinc-200">
            <div>
              <Image src={"/cart3.png"} alt="" width={225} height={97} />
            </div>
            <div className="lg:flex-row flex flex-col justify-between">
              <p className="text-zinc-700 xl:ml-[82px]">$15.00</p>
              <p className="xl:ml-48 lg:ml-32 sm:flex hidden">+1-</p>
              <p className="xl:ml-52 lg:ml-36 sm:flex hidden  font-bold text-[#333333]">
                $421.00
              </p>
              <p className="text-zinc-700 xl:ml-48 ml-36 lg:flex hidden hover:text-primYellow cursor-pointer">
                X
              </p>
            </div>
          </li>
          <li className="xl:flex hidden items-center openSans text-[16px] leading-[24px] py-3 border-b-[1px] border-zinc-200">
            <div>
              <Image src={"/cart4.png"} alt="" width={225} height={97} />
            </div>
            <p className="text-zinc-700 xl:ml-[82px]">$45.00</p>
            <p className="xl:ml-48 lg:ml-32">+1-</p>
            <p className="xl:ml-52 lg:ml-36  font-bold text-[#333333]">
              $275.00
            </p>
            <p className="text-zinc-700 xl:ml-48 lg:ml-36 hover:text-primYellow cursor-pointer">
              X
            </p>
          </li>
          <li className="xl:flex hidden items-center openSans text-[16px] leading-[24px] py-3 border-b-[1px] border-zinc-200">
            <div>
              <Image src={"/cart5.png"} alt="" width={225} height={97} />
            </div>
            <p className="text-zinc-700 xl:ml-[82px]">$15.00</p>
            <p className="xl:ml-48 lg:ml-32">+1-</p>
            <p className="xl:ml-52 lg:ml-36 font-bold text-[#333333]">
              $195.00
            </p>
            <p className="text-zinc-700 xl:ml-48 lg:ml-36 hover:text-primYellow cursor-pointer">
              X
            </p>
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="2xl:w-[1320px] w-full gap-4 lg:p-12 md:p-8 p-4 md:flex">
          <div>
            <Image src={"/coupon.png"} alt="" height={252} width={648} />
          </div>
          <div className="py-4 md:py-0">
            <Link href={"./checkout"}>
              <Image src={"/bill.png"} alt="" height={337} width={648} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
