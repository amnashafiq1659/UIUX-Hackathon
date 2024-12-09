import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { PiCoffee } from "react-icons/pi";
import Image from "next/image";

function Page() {
  return (
    <div>
      <div className='bg-[url("/head.png")] h-[350px] w-full sm:bg-cover flex justify-center items-center'>
        <div>
          <h1 className="openSans sm:text-[48px] text-[32px] font-bold text-white">
            Our Menu
          </h1>
          <ul className="flex mt-4 inter sm:text-[20px] text-[16px] sm:leading-[28px] text-center items-center justify-center">
            <li className="text-white ">Home </li>
            <li>
              <MdOutlineKeyboardArrowRight className="sm:text-[22px] text-[18px] text-white" />
            </li>
            <li className=" text-primYellow"> Menu</li>
          </ul>
        </div>
      </div>
      <main className="h-full w-full flex justify-center items-center">
        <div className="xl:w-[1320px] w-full flex flex-col-reverse md:flex-row justify-between lg:mt-20 p-2 xl:p-0 sm:gap-3 xl:gap-0">
          <div className="mt-2 sm:mt-0">
            <Image src={"/menu1.png"} alt="" height={626} width={448} />
          </div>
          <div className="xl:w-[760px] lg:w-[650px] sm:w-[330px] w-full">
            <PiCoffee className="text-primYellow" size={25} />
            <h1 className="openSans xl:text-[48px] sm:text-[38px] text-[28px] text-[#333333] font-bold ">
              Starter Menu
            </h1>
            <ul className="mt-2 md:mt-0">
              <li className="flex w-full justify-between items-start lg:items-center border-b-[1px] border-zinc-200">
                <div className="md:space-y-1 xl:py-4 sm:py-2 py-1">
                  <h1 className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-[#333333] font-bold cursor-pointer hover:text-primYellow">
                    Alder Grilled Chinook Salmon
                  </h1>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#333333]">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#828282]">
                    560 CAL
                  </p>
                </div>
                <div>
                  <p className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-primYellow py-1 sm:py-0">
                    32$
                  </p>
                </div>
              </li>
              <li className="flex w-full justify-between items-start lg:items-center border-b-[1px] border-zinc-200">
                <div className="md:space-y-1 xl:py-4 sm:py-2 py-1">
                  <h1 className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] hover:text-[#333333] font-bold  cursor-pointer text-primYellow">
                    Berries and creme tart
                  </h1>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#333333]">
                    Gorgonzola, ricotta, mozzarella, taleggio
                  </p>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#828282]">
                    700 CAL
                  </p>
                </div>
                <div>
                  <p className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-primYellow py-1 sm:py-0">
                    43$
                  </p>
                </div>
              </li>
              <li className="flex w-full justify-between items-start lg:items-center border-b-[1px] border-zinc-200">
                <div className="md:space-y-1 xl:py-4 sm:py-2 py-1">
                  <h1 className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-[#333333] font-bold cursor-pointer hover:text-primYellow">
                    Tormentoso Bush Pizza Pintoage
                  </h1>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#333333]">
                    Ground cumin, avocados, peeled and cubed
                  </p>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#828282]">
                    100 CAL
                  </p>
                </div>
                <div>
                  <p className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-primYellow py-1 sm:py-0">
                    14$
                  </p>
                </div>
              </li>
              <li className="flex w-full justify-between items-start lg:items-center">
                <div className="md:space-y-1 xl:py-4 sm:py-2 py-1">
                  <h1 className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-[#333333] font-bold cursor-pointer hover:text-primYellow">
                    Spicy Vegan Potato Curry
                  </h1>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#333333]">
                    Spreadable cream cheese, crumbled blue cheeser
                  </p>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#828282]">
                    560 CAL
                  </p>
                </div>
                <div>
                  <p className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-primYellow py-1 sm:py-0">
                    35$
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <main className="h-full w-full flex justify-center items-center">
        <div className="xl:w-[1320px] w-full flex flex-col md:flex-row justify-between lg:mt-20 p-2 xl:p-0 sm:gap-3 xl:gap-0">
          <div className="xl:w-[760px] lg:w-[650px] sm:w-[330px] w-full">
            <PiCoffee className="text-primYellow" size={25} />
            <h1 className="openSans xl:text-[48px] sm:text-[38px] text-[28px] text-[#333333] font-bold ">
              Main Course
            </h1>
            <ul className="mt-2 md:mt-0">
              <li className="flex w-full justify-between items-start lg:items-center border-b-[1px] border-zinc-200">
                <div className="md:space-y-1 xl:py-4 sm:py-2 py-1">
                  <h1 className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-[#333333] font-bold cursor-pointer hover:text-primYellow">
                    Alder Grilled Chinook Salmon
                  </h1>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#333333]">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#828282]">
                    560 CAL
                  </p>
                </div>
                <div>
                  <p className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-primYellow py-1 sm:py-0">
                    32$
                  </p>
                </div>
              </li>
              <li className="flex w-full justify-between items-start lg:items-center border-b-[1px] border-zinc-200">
                <div className="md:space-y-1 xl:py-4 sm:py-2 py-1">
                  <h1 className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-[#333333] font-bold cursor-pointer hover:text-primYellow">
                    Berries and creme tart
                  </h1>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#333333]">
                    Gorgonzola, ricotta, mozzarella, taleggio
                  </p>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#828282]">
                    700 CAL
                  </p>
                </div>
                <div>
                  <p className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-primYellow py-1 sm:py-0">
                    43$
                  </p>
                </div>
              </li>
              <li className="flex w-full justify-between items-start lg:items-center border-b-[1px] border-zinc-200">
                <div className="md:space-y-1 xl:py-4 sm:py-2 py-1">
                  <h1 className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-[#333333] font-bold cursor-pointer hover:text-primYellow">
                    Tormentoso Bush Pizza Pintoage
                  </h1>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#333333]">
                    Ground cumin, avocados, peeled and cubed
                  </p>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#828282]">
                    100 CAL
                  </p>
                </div>
                <div>
                  <p className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-primYellow py-1 sm:py-0">
                    14$
                  </p>
                </div>
              </li>
              <li className="flex w-full justify-between items-start lg:items-center">
                <div className="md:space-y-1 xl:py-4 sm:py-2 py-1">
                  <h1 className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-[#333333] font-bold cursor-pointer hover:text-primYellow">
                    Spicy Vegan Potato Curry
                  </h1>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#333333]">
                    Spreadable cream cheese, crumbled blue cheeser
                  </p>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#828282]">
                    560 CAL
                  </p>
                </div>
                <div>
                  <p className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-primYellow py-1 sm:py-0">
                    35$
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-2 sm:mt-0">
            <Image src={"/menu2.png"} alt="" height={626} width={448} />
          </div>
        </div>
      </main>
      <div className="sm:h-[470px] h-full w-full flex justify-center items-center lg:items-center bg-cover bg-[url('/boxbg.png')] my-6">
        <div className="p-5">
          <Image src={"/box2.png"} alt="" width={1320} height={247} />
        </div>
      </div>
      <main className="h-full w-full flex justify-center items-center my-6">
        <div className="xl:w-[1320px] w-full flex flex-col-reverse md:flex-row justify-between lg:mt-20 p-2 xl:p-0 sm:gap-3 xl:gap-0">
          <div className="mt-2 sm:mt-0">
            <Image src={"/menu3.png"} alt="" height={626} width={448} />
          </div>
          <div className="xl:w-[760px] lg:w-[650px] sm:w-[330px] w-full">
            <PiCoffee className="text-primYellow" size={25} />
            <h1 className="openSans xl:text-[48px] sm:text-[38px] text-[28px] text-[#333333] font-bold ">
              Desserts
            </h1>
            <ul className="mt-2 md:mt-0">
              <li className="flex w-full justify-between items-start lg:items-center border-b-[1px] border-zinc-200">
                <div className="md:space-y-1 xl:py-4 sm:py-2 py-1">
                  <h1 className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-[#333333] font-bold cursor-pointer hover:text-primYellow">
                    Alder Grilled Chinook Salmon
                  </h1>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#333333]">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#828282]">
                    560 CAL
                  </p>
                </div>
                <div>
                  <p className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-primYellow py-1 sm:py-0">
                    32$
                  </p>
                </div>
              </li>
              <li className="flex w-full justify-between items-start lg:items-center border-b-[1px] border-zinc-200">
                <div className="md:space-y-1 xl:py-4 sm:py-2 py-1">
                  <h1 className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-[#333333] font-bold cursor-pointer hover:text-primYellow">
                    Berries and creme tart
                  </h1>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#333333]">
                    Gorgonzola, ricotta, mozzarella, taleggio
                  </p>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#828282]">
                    700 CAL
                  </p>
                </div>
                <div>
                  <p className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-primYellow py-1 sm:py-0">
                    43$
                  </p>
                </div>
              </li>
              <li className="flex w-full justify-between items-start lg:items-center border-b-[1px] border-zinc-200">
                <div className="md:space-y-1 xl:py-4 sm:py-2 py-1">
                  <h1 className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-[#333333] font-bold cursor-pointer hover:text-primYellow">
                    Tormentoso Bush Pizza Pintoage
                  </h1>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#333333]">
                    Ground cumin, avocados, peeled and cubed
                  </p>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#828282]">
                    100 CAL
                  </p>
                </div>
                <div>
                  <p className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-primYellow py-1 sm:py-0">
                    14$
                  </p>
                </div>
              </li>
              <li className="flex w-full justify-between items-start lg:items-center">
                <div className="md:space-y-1 xl:py-4 sm:py-2 py-1">
                  <h1 className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-[#333333] font-bold cursor-pointer hover:text-primYellow">
                    Spicy Vegan Potato Curry
                  </h1>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#333333]">
                    Spreadable cream cheese, crumbled blue cheeser
                  </p>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#828282]">
                    560 CAL
                  </p>
                </div>
                <div>
                  <p className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-primYellow py-1 sm:py-0">
                    35$
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <main className="h-full w-full flex justify-center items-center my-6">
        <div className="xl:w-[1320px] w-full flex flex-col md:flex-row justify-between lg:mt-20 p-2 xl:p-0 sm:gap-3 xl:gap-0">
          <div className="xl:w-[760px] lg:w-[650px] sm:w-[330px] w-full">
            <PiCoffee className="text-primYellow" size={25} />
            <h1 className="openSans xl:text-[48px] sm:text-[38px] text-[28px] text-[#333333] font-bold ">
              Drinks{" "}
            </h1>
            <ul className="mt-2 md:mt-0">
              <li className="flex w-full justify-between items-start lg:items-center border-b-[1px] border-zinc-200">
                <div className="md:space-y-1 xl:py-4 sm:py-2 py-1">
                  <h1 className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-[#333333] font-bold cursor-pointer hover:text-primYellow">
                    Alder Grilled Chinook Salmon
                  </h1>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#333333]">
                    Toasted French bread topped with romano, cheddar
                  </p>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#828282]">
                    560 CAL
                  </p>
                </div>
                <div>
                  <p className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-primYellow py-1 sm:py-0">
                    32$
                  </p>
                </div>
              </li>
              <li className="flex w-full justify-between items-start lg:items-center border-b-[1px] border-zinc-200">
                <div className="md:space-y-1 xl:py-4 sm:py-2 py-1">
                  <h1 className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-[#333333] text-bold cursor-pointer hover:text-primYellow">
                    Berries and creme tart
                  </h1>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#333333]">
                    Gorgonzola, ricotta, mozzarella, taleggio
                  </p>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#828282]">
                    700 CAL
                  </p>
                </div>
                <div>
                  <p className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-primYellow py-1 sm:py-0">
                    43$
                  </p>
                </div>
              </li>
              <li className="flex w-full justify-between items-start lg:items-center border-b-[1px] border-zinc-200">
                <div className="md:space-y-1 xl:py-4 sm:py-2 py-1">
                  <h1 className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-[#333333] font-bold cursor-pointer hover:text-primYellow">
                    Tormentoso Bush Pizza Pintoage
                  </h1>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#333333] ">
                    Ground cumin, avocados, peeled and cubed
                  </p>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#828282]">
                    100 CAL
                  </p>
                </div>
                <div>
                  <p className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-primYellow py-1 sm:py-0">
                    14$
                  </p>
                </div>
              </li>
              <li className="flex w-full justify-between items-start lg:items-center">
                <div className="md:space-y-1 xl:py-4 sm:py-2 py-1">
                  <h1 className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-[#333333] font-bold cursor-pointer hover:text-primYellow">
                    Spicy Vegan Potato Curry
                  </h1>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#333333]">
                    Spreadable cream cheese, crumbled blue cheeser
                  </p>
                  <p className="inter lg:text-[16px] text-[12px] lg:leading-6 text-[#828282]">
                    560 CAL
                  </p>
                </div>
                <div>
                  <p className="openSans lg:text-[24px] text-[18px] lg:leading-[32px] text-primYellow py-1 sm:py-0">
                    35$
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-2 sm:mt-0">
            <Image src={"/menu4.png"} alt="" height={626} width={448} />
          </div>
        </div>
      </main>
      <div className="flex items-center justify-center py-12">
        <Image src={"/clients.png"} alt="" height={275} width={1322} />
      </div>
    </div>
  );
}

export default Page;
