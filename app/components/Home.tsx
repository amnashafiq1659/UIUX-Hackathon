import React from "react";
import { FaCircle, FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { CiSearch, CiMenuBurger } from "react-icons/ci";
import { AiOutlineCheck } from "react-icons/ai";
import {
  PiHamburgerThin,
  PiCookieLight,
  PiWineLight,
  PiHandbag,
} from "react-icons/pi";
import Image from "next/image";
import Link from "next/link";
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

export default function Home() {
  return (
    <>
      <div className=" h-full w-full bg-cover bg-[url('/bgHome.png')]">
        <div className="w-full h-full xl:p-0 sm:p-7 p-4">
          <div className="w-full flex justify-center pt-6">
            <header className="w-full max-w-[1320px] h-[87px] bg-transparent text-white">
              <Link
                href={"#"}
                className="text-2xl font-bold openSans text-[24px] leading-[32px] flex justify-center"
              >
                <p className="text-primYellow">Food</p>
                <p className="text-white">tuck</p>
              </Link>
              <nav className="container mx-auto flex flex-wrap items-center lg:justify-between justify-center pt-4">
                <ul className="lg:flex hidden space-x-6 text-[16px] leading-[24px] inter">
                  <li>
                    <Link href={"#"} className="hover:text-primYellow">
                      Home
                    </Link>
                    <FaCircle className="text-primYellow" size={10}></FaCircle>
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
                    <HoverCard>
                      <HoverCardTrigger>
                        <p className="hover:text-primYellow cursor-pointer">
                          Pages
                        </p>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-[150%] p-3 bg-black opacity-85 border-primYellow">
                        <ul className="text-white inter text-[16px] leading-[24px]">
                          <li className="border-b-[1px] border-zinc-500 py-2">
                            <Link href={"/routes/signup"}>Sign Up Page</Link>{" "}
                          </li>
                          <li className="flex gap-1 border-b-[1px] border-zinc-500 py-2">
                            <Link href={"/routes/login"}> Log In Page</Link>{" "}
                          </li>
                          <li className="border-b-[1px] border-zinc-500 py-2">
                            <Link href={"/routes/faq"}>FAQ Page</Link>{" "}
                          </li>
                          <li className="border-b-[1px] border-zinc-500 py-2">
                            <Link href={"/routes/checkout"}>
                              Check Out Page
                            </Link>
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
                  </li>
                  <li className="flex items-center">
                    <Link
                      href="/routes/about"
                      className="hover:text-primYellow flex items-center"
                    >
                      About
                      <FiChevronDown
                        className="text-secondary"
                        size={15}
                      ></FiChevronDown>
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
                <div className="flex items-center gap-2 mt-4 sm:mt-0">
                  <div className="bg-transparent rounded-full sm:px-3 px-2 sm:py-[12px] py-[7px] border-[1px] border-primYellow inter sm:text-[16px] text-[12px] sm:leading-[24px] flex items-center">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="text-white placeholder-white bg-transparent outline-none"
                    />
                    <CiSearch size={24} className="text-white" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="hidden lg:flex">
                      <a href="/routes/cart">
                        <PiHandbag size={24} />
                      </a>
                    </div>
                  </div>

                  <Sheet>
                    <SheetTrigger>
                      <div className="flex lg:hidden items-center">
                        <CiMenuBurger size={24} />
                      </div>
                    </SheetTrigger>
                    <SheetContent className="p-3 bg-black opacity-85 text-white border border-black">
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
                              <Link
                                href={"#"}
                                className="hover:text-primYellow"
                              >
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
                              <Link
                                href={"#"}
                                className="hover:text-primYellow"
                              >
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
                              <Link href="#" className="hover:text-primYellow">
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
              </nav>
            </header>
          </div>

          <main className=" w-full justify-center mt-12 text-white flex items-center gap-7">
            {/* Social Media Section */}
            <div className="flex flex-col items-center gap-10">
              {/* Top Vertical Line */}
              <div className="w-[1px] h-[158px] bg-secondary"></div>

              {/* Social Media Icons */}
              <FaFacebookF size={25} />
              <FaTwitter className="text-primYellow" size={25} />
              <FaPinterestP size={25} />

              {/* Bottom Vertical Line */}
              <div className="w-[1px] h-[158px] bg-secondary"></div>
            </div>

            <div className="w-full lg:w-[1320px] md:flex-row flex flex-col-reverse lg:gap-7 justify-between">
              <div className="sm:w-[472px] lg:mt-32 mt-8">
                <h1 className="text-primYellow text-[18px] sm:text-[24px] lg:text-[32px] sm:leading-[32px] lg:leading-[40px] greatVibes tracking-wider">
                  Its Quick & Amusing!
                </h1>
                <h1 className="text-[28px] md:text-[36px] lg:text-[60px] font-bold leading-snug md:leading-tight text-primYellow openSans">
                  Th
                  <span className="text-white">
                    e Art of speed food Quality
                  </span>
                </h1>
                <p className="mt-4 text-[14px] lg:text-[16px] inter text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Varius sed pharetra dictum neque massa congue.
                </p>
                <button className="mt-8 text-[14px] lg:text-[16px] inter leading-[24px] bg-primYellow text-white px-5 lg:px-7 py-2 lg:py-3 rounded-full hover:bg-transparent hover:text-primYellow transition-colors duration-300 hover:border-primYellow hover:border">
                  See Menu
                </button>
              </div>
              <div className="mt-6 sm:mt-0 ">
                <Image src={"/home.png"} alt="bg" width={878} height={670} />
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="h-full w-full">
        <main className=" bg-black w-full justify-center text-white flex items-center p-3 lg:p-6 xl:p-2">
          <div className="w-full lg:w-[1320px] md:flex-row flex flex-col-reverse lg:gap-7 justify-between">
            <div className="sm:w-[472px] lg:mt-16 mt-6">
              <h1 className="text-primYellow text-[18px] sm:text-[24px] lg:text-[32px] sm:leading-[32px] lg:leading-[40px] greatVibes tracking-wider">
                About us
              </h1>
              <h1 className="text-[28px] md:text-[36px] lg:text-[60px] font-bold leading-snug md:leading-tight text-primYellow openSans">
                We
                <span className="text-white">
                  {" "}
                  Create the best foody product
                </span>
              </h1>
              <p className="mt-4 sm:mt-2 lg:mt-4 text-[14px] sm:text-[12px] lg:text-[16px] inter text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus
                sit eu velit in consequat.{" "}
              </p>
              <ul className="space-y-2 mt-4 text-[14px] sm:text-[12px] lg:text-[16px] inter">
                <li className="flex items-center gap-2">
                  <AiOutlineCheck /> Lacus nisi, et ac dapibus sit eu velit in
                  consequat.
                </li>
                <li className="flex items-center gap-2">
                  <AiOutlineCheck />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  dapibus
                </li>
                <li className="flex items-center gap-2">
                  <AiOutlineCheck />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
              <button className="mt-8 sm:mt-3 lg:mt-8 text-[14px] sm:text-[12px] lg:text-[16px] inter leading-[24px] bg-primYellow text-white px-3 sm:px-5 lg:px-7 py-1 sm:py-2 lg:py-3 rounded-full hover:bg-transparent hover:text-primYellow transition-colors duration-300 hover:border-primYellow hover:border">
                Read Menu
              </button>
            </div>
            <div className="lg:mt-20 sm:mt-12 flex justify-center sm:justify-normal">
              <div className="sm:grid grid-cols-1 grid-rows-2 space-y-2 sm:space-y-3">
                <Image
                  src={"/home1.png"}
                  alt="iamge"
                  width={660}
                  height={330}
                />
                <div className="grid grid-cols-2 grid-rows-1 space-x-2 sm:space-x-3">
                  <Image
                    src={"/home2.png"}
                    alt="iamge"
                    width={322}
                    height={195}
                  />
                  <Image
                    src={"/home3.png"}
                    alt="iamge"
                    width={322}
                    height={195}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="h-full w-full">
        <main className="bg-black w-full justify-center text-white flex items-center p-3 lg:p-6 xl:p-0">
          <div className="w-full lg:w-[1320px] flex-col ">
            <div className="w-full mt-6 text-center">
              <h1 className="text-primYellow text-[18px] sm:text-[24px] lg:text-[32px] sm:leading-[32px] lg:leading-[40px] greatVibes tracking-wider">
                Food Category
              </h1>
              <h1 className="text-[28px] md:text-[36px] lg:text-[60px] font-bold leading-snug md:leading-tight text-primYellow openSans">
                Ch<span className="text-white">oose Food Item</span>
              </h1>
            </div>
            <div className="lg:mt-20 mt-8 ">
              <Image src={"/box.png"} alt="box" width={1320} height={330} />
            </div>
          </div>
        </main>
      </div>
      <div className="h-full w-full">
        <main className=" bg-black w-full justify-center text-white flex items-center p-3 lg:p-6 xl:p-2">
          <div className="w-full lg:w-[1320px] md:flex-row gap-4 flex flex-col-reverse md:justify-between justify-center mt-8 py-8 lg:py-16">
            <div className="lg:mt-18 sm:mt-12 md:mt-0 ">
              <div className="grid grid-cols-2 grid-rows-2 space-y-2 sm:space-y-3 space-x-2 md:space-x-3 w-full">
                <div className="flex items-end">
                  <Image
                    src={"/img1.png"}
                    alt="iamge"
                    width={362}
                    height={356}
                    className=" sm:mt-0 hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="flex items-end">
                  <Image
                    src={"/img2.png"}
                    alt="iamge"
                    width={281}
                    height={231}
                    className=" hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="grid grid-cols-3 col-span-3 md:col-span-2 lg:col-span-3 grid-rows-1 space-x-2 sm:space-x-3">
                  <div>
                    <Image
                      src={"/img3.png"}
                      alt="iamge"
                      width={244}
                      height={306}
                      className="hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <div>
                    <Image
                      src={"/img4.png"}
                      alt="iamge"
                      width={221}
                      height={226}
                      className="hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                  <div className="space-y-2 sm:space-y-3 ">
                    <Image
                      src={"/img5.png"}
                      alt="image"
                      width={161}
                      height={168}
                      className="hover:scale-105 transition-transform duration-200"
                    />
                    <Image
                      src={"/img6.png"}
                      alt="image"
                      width={161}
                      height={168}
                      className="hover:scale-105 transition-transform duration-200"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:w-[490px] lg:w-[530px] md:w-full w-full lg:mt-24 mt-6 ">
              <h1 className="text-primYellow text-[18px] sm:text-[24px] lg:text-[32px] sm:leading-[32px] lg:leading-[40px] greatVibes tracking-wider">
                Why Choose us
              </h1>
              <h1 className="text-[28px] md:text-[36px] lg:text-[60px] font-bold leading-snug md:leading-tight text-primYellow openSans">
                Ex
                <span className="text-white">
                  tra ordinary taste And Experience{" "}
                </span>
              </h1>
              <p className="mt-4 sm:mt-2 lg:mt-4 text-[14px] sm:text-[12px] lg:text-[16px] inter text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus
                sit eu velit in consequat.{" "}
              </p>
              <ul className="flex w-full justify-center lg:justify-start gap-4 lg:gap-8 lg:mt-8 mt-4">
                <li>
                  <div className="bg-primYellow flex items-center justify-center lg:py-3 py-1 lg:px-3 px-1 hover:scale-105 transition-transform duration-200">
                    <PiHamburgerThin size={56} />
                  </div>
                  <p className="inter lg:text-[18px] text-[12px] text-white text-center mt-1">
                    Fast Food
                  </p>
                </li>
                <li>
                  <div className="bg-primYellow flex items-center justify-center lg:py-3 py-1 lg:px-3 px-1 hover:scale-105 transition-transform duration-200">
                    <PiCookieLight size={56} />
                  </div>
                  <p className="inter lg:text-[18px] text-[12px] text-white text-center mt-1">
                    Lunch
                  </p>
                </li>
                <li>
                  <div className="bg-primYellow flex items-center justify-center lg:py-3 py-1 lg:px-3 px-1 hover:scale-105 transition-transform duration-200">
                    <PiWineLight size={56} />
                  </div>
                  <p className="inter lg:text-[18px] text-[12px] text-white text-center mt-1">
                    Dinner
                  </p>
                </li>
              </ul>
              <div className="lg:mt-8 mt-4 px-2 md:px-0 flex justify-center lg:justify-start">
                <Image src={"/exp.png"} alt="exp" width={374} height={92} />
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="sm:h-[470px] h-full w-full flex justify-center items-center bg-cover bg-[url('/boxbg.png')]">
        <div className="p-5">
          <Image src={"/box2.png"} alt="box 2" width={1320} height={247} />
        </div>
      </div>
      <div className="h-full w-full">
        <main className="bg-black w-full justify-center text-white flex items-center p-3 lg:p-6 xl:p-0">
          <div className="w-full lg:w-[1320px] flex-col p-2 py-9">
            <div className="w-full mt-6 text-center">
              <h1 className="text-primYellow text-[18px] sm:text-[24px] lg:text-[32px] sm:leading-[32px] lg:leading-[40px] greatVibes tracking-wider">
                Choose & Pick
              </h1>
              <h1 className="text-[28px] md:text-[36px] lg:text-[60px] font-bold leading-snug md:leading-tight text-primYellow openSans">
                Fr<span className="text-white">om Our Menu</span>
              </h1>
              <ul className="md:flex hidden justify-around inter text-[20px] text-white mt-12">
                <li className="hover:text-primYellow cursor-pointer">
                  Breakfast
                </li>
                <li className="hover:text-primYellow cursor-pointer">Lunch</li>
                <li className="hover:text-primYellow cursor-pointer">Dinner</li>
                <li className="hover:text-primYellow cursor-pointer">
                  Dessert
                </li>
                <li className="hover:text-primYellow cursor-pointer">Drink</li>
                <li className="hover:text-primYellow cursor-pointer">Snack</li>
                <li className="hover:text-primYellow cursor-pointer">Soups</li>
              </ul>
            </div>
            <div className="mt-8 flex gap-4 items-center">
              <Image
                src={"/img7.png"}
                alt="iamge"
                width={366}
                height={366}
                className="hidden lg:flex"
              />
              <ul className="space-y-2">
                <li>
                  <Image
                    src={"/item1.png"}
                    alt="item 1"
                    width={376}
                    height={79}
                  />
                </li>
                <li>
                  <Image
                    src={"/item2.png"}
                    alt="item 2"
                    width={376}
                    height={79}
                  />
                </li>
                <li>
                  <Image
                    src={"/item3.png"}
                    alt="item 3"
                    width={376}
                    height={79}
                  />
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <Image
                    src={"/item4.png"}
                    alt="item 4"
                    width={376}
                    height={79}
                  />
                </li>
                <li>
                  <Image
                    src={"/item5.png"}
                    alt="item 5"
                    width={376}
                    height={79}
                  />
                </li>
                <li>
                  <Image
                    src={"/item6.png"}
                    alt="item 6"
                    width={376}
                    height={79}
                  />
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
      <div className="h-full w-full">
        <main className="bg-black w-full justify-center text-white flex items-center p-3 lg:p-6 xl:p-0">
          <div className="w-full lg:w-[1320px] flex-col p-2">
            <div className="w-full mt-6 text-center">
              <h1 className="text-primYellow text-[18px] sm:text-[24px] lg:text-[32px] sm:leading-[32px] lg:leading-[40px] greatVibes tracking-wider">
                Chefs
              </h1>
              <h1 className="text-[28px] md:text-[36px] lg:text-[60px] font-bold leading-snug md:leading-tight text-primYellow openSans">
                Me<span className="text-white">et Our Chef</span>
              </h1>
            </div>
            <div className="lg:mt-20 sm:mt-12 mt-4">
              <ul className="space-x-3 w-full flex">
                <li>
                  <Image
                    src={"/Chef1.png"}
                    alt="chef 1"
                    width={312}
                    height={391}
                  />
                </li>
                <li>
                  <Image
                    src={"/Chef2.png"}
                    alt="chef 2"
                    width={312}
                    height={391}
                  />
                </li>
                <li>
                  <Image
                    src={"/Chef3.png"}
                    alt="chef 3"
                    width={312}
                    height={391}
                  />
                </li>
                <li>
                  <Image
                    src={"/Chef4.png"}
                    alt="chef 4"
                    width={312}
                    height={391}
                    className="sm:flex hidden"
                  />
                </li>
              </ul>
            </div>
            <div className="flex justify-center mt-10">
              <button className="inter sm:text-[16px] text-[10px] sm:px-5 px-3 sm:py-2 py-1 border-[1px] rounded-full border-primYellow hover:bg-primYellow hover:text-black transition-colors duration-200">
                See More
              </button>
            </div>
          </div>
        </main>
      </div>
      <div className="h-full w-full">
        <main className="bg-black w-full justify-center text-white flex items-center p-3 lg:p-6 xl:p-0">
          <div className="w-full lg:w-[1320px] flex-col p-2 sm:py-12">
            <div className="w-full mt-6 text-start">
              <h1 className="text-primYellow text-[18px] sm:text-[24px] lg:text-[32px] sm:leading-[32px] lg:leading-[40px] greatVibes tracking-wider">
                Testimonials
              </h1>
              <h1 className="text-[28px] md:text-[36px] lg:text-[60px] font-bold leading-snug md:leading-tight text-primYellow openSans">
                Wh<span className="text-white">at Our Clients are saying</span>
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
      <div className="bg-black">
        <Image
          src={"/box3.png"}
          alt="box 3"
          width={1920}
          height={560}
          className="sm:py-12 py-4"
        />
      </div>
      <div className="h-full w-full">
        <main className="bg-black w-full justify-center text-white flex items-center p-3 lg:p-6 xl:p-0">
          <div className="w-full lg:w-[1320px] flex-col p-2 sm:py-12">
            <div className="w-full mt-6 text-center">
              <h1 className="text-primYellow text-[18px] sm:text-[24px] lg:text-[32px] sm:leading-[32px] lg:leading-[40px] greatVibes tracking-wider">
                Blog Posts
              </h1>
              <h1 className="text-[28px] md:text-[36px] lg:text-[60px] font-bold leading-snug md:leading-tight text-primYellow openSans">
                La<span className="text-white">test News & Blogs</span>
              </h1>
            </div>
            <div className=" sm:mt-12 mt-4">
              <ul className="space-x-5 w-full flex">
                <li>
                  <Image
                    src={"/BlogCard1.png"}
                    alt="blog car 1"
                    width={424}
                    height={569}
                  />
                </li>
                <li>
                  <Image
                    src={"/BlogCard2.png"}
                    alt="blog card 2"
                    width={424}
                    height={569}
                  />
                </li>
                <li>
                  <Image
                    src={"/BlogCard3.png"}
                    alt="bolg card 3"
                    width={424}
                    height={569}
                  />
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
