import Link from "next/link";
import React from "react";
import { CiSearch, CiMenuBurger } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
import { PiHandbag } from "react-icons/pi";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function Header() {
  return (
    <div className="">
      <div className="w-full h-[90px] flex justify-center items-center bg-black p-5">
        <header className="w-full flex items-center justify-between lg:w-[1320px]  text-white">
          <div>
            <a
              href="./"
              className="text-2xl font-bold openSans text-[24px] leading-[32px] flex"
            >
              <p className="text-white">Food</p>
              <p className=" text-primYellow">tuck</p>
            </a>
          </div>
          <div>
            <ul className="lg:flex hidden space-x-6 text-[16px] leading-[24px] inter">
              <li>
                <Link href="#" className="text-primYellow">
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/routes/menu"} className="hover:text-primYellow">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primYellow">
                  Blog
                </Link>
              </li>
              <HoverCard>
                <HoverCardTrigger>
                  <li>
                    <p className="hover:text-primYellow cursor-pointer">
                      Pages
                    </p>
                  </li>
                </HoverCardTrigger>
                <HoverCardContent className="w-[150%] p-3 bg-black  border-primYellow">
                  <ul className="text-white inter text-[16px] leading-[24px]">
                    <li className="border-b-[1px] border-zinc-500 py-2">
                      <Link href={"/routes/signup"}>Sign Up Page</Link>{" "}
                    </li>
                    <li className="flex gap-1 border-b-[1px] border-zinc-500 py-2">
                      <Link href={"/routes/login"}> Log In Page</Link>{" "}
                    </li>
                    <li className="border-b-[1px] border-zinc-500 py-2">
                      <Link href={"/routes/faq"}>FAQ Page</Link>
                    </li>
                    <li className="border-b-[1px] border-zinc-500 py-2">
                      <Link href={"/routes/checkout"}>Check Out Page</Link>
                    </li>
                    <li className="border-b-[1px] border-zinc-500 py-2">
                      <Link href={"/routes/chefs"}>Our Chefs</Link>
                    </li>
                    <li className="py-2">
                      <Link href={"/routes/error"}>404 Error Page</Link>{" "}
                    </li>
                  </ul>
                </HoverCardContent>
              </HoverCard>
              <li>
                <Link href="/routes/about" className="hover:text-primYellow">
                  About
                </Link>
              </li>
              <li>
                <Link href="/routes/shop" className="hover:text-primYellow">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primYellow">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <CiSearch size={24} className="text-white" />
            <HoverCard>
              <HoverCardTrigger>
                <AiOutlineUser size={24} className="text-white" />
              </HoverCardTrigger>
              <HoverCardContent className="w-[150%] p-3 bg-black  border-primYellow">
                <ul className="text-white inter text-[16px] leading-6">
                  <li className="border-b-[1px] border-zinc-500 py-2">
                    <Link href={"/routes/login"}>Sign Up</Link>{" "}
                  </li>
                  <li className="flex gap-1 border-b-[1px] border-zinc-500 py-2">
                    <Link href={"/"}> My Account</Link>{" "}
                  </li>
                  <li className="border-b-[1px] border-zinc-500 py-2">
                    <Link href={"/"}>My Orders</Link>{" "}
                  </li>
                  <li className="py-2">
                    <Link href={"/"}>Log Out</Link>{" "}
                  </li>
                </ul>
              </HoverCardContent>
            </HoverCard>
            <div className="hidden lg:flex">
              <a href="/routes/cart">
                <PiHandbag size={24} />
              </a>
            </div>
            <Sheet>
              <SheetTrigger>
                <div className="flex lg:hidden items-center">
                  <CiMenuBurger size={24} />
                </div>
              </SheetTrigger>
              <SheetContent className="p-3 bg-black  text-white border border-black">
                <SheetHeader>
                  <SheetTitle className="mt-4">
                    <Link
                      href={"#"}
                      className="text-2xl font-bold openSans text-[24px] leading-[32px] flex justify-center"
                    >
                      <p className="text-primYellow">Food</p>
                      <p className="text-white">tuck</p>
                    </Link>
                    <ul className="text-white space-y-3 mt-8 text-[16px] leading-[24px] inter">
                      <li>
                        <Link href={"./"} className="hover:text-primYellow">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/routes/menu"}
                          className="hover:text-primYellow"
                        >
                          Menu
                        </Link>
                      </li>
                      <li>
                        <Link href={"#"} className="hover:text-primYellow">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <p className="hover:text-primYellow cursor-pointer">
                          Pages
                        </p>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-primYellow">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/routes/shop"
                          className="hover:text-primYellow"
                        >
                          Shop
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="hover:text-primYellow">
                          Contact
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={"/routes/cart"}
                          className="hover:text-primYellow"
                        >
                          Bag
                        </Link>
                      </li>
                    </ul>
                  </SheetTitle>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
