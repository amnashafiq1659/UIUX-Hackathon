import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const CheckoutPage = () => {
  return (
    <>
      <div className='bg-[url("/head.png")] h-[350px] w-full sm:bg-cover hidden md:flex justify-center items-center'>
        <div>
          <h1 className="openSans sm:text-[48px] text-[32px] text-white font-bold">
            Checkout Page
          </h1>
          <ul className="flex mt-4 inter sm:text-[20px] text-[16px] sm:leading-[28px] text-center items-center justify-center">
            <li className="text-white ">Home </li>
            <li>
              <MdOutlineKeyboardArrowRight className="sm:text-[22px] text-[18px] text-white" />
            </li>
            <li className=" text-primYellow"> Check Out</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center bg-white py-10 px-4">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2 bg-white p-3 sm:p-8 rounded-lg ">
            <h2 className="text-xl openSans font-bold text-[#333333] mb-6">
              Shipping Address
            </h2>
            <form className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-[#333333] "
                >
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="mt-1 block w-full border outline-none border-[#E0E0E0] rounded-md shadow-sm py-2 px-3 focus:ring-primYellow focus:border-primYellow"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-[#333333] "
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="mt-1 block w-full border outline-none border-[#E0E0E0] rounded-md shadow-sm py-2 px-3 focus:ring-primYellow focus:border-primYellow"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#333333] "
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full border outline-none border-[#E0E0E0] rounded-md shadow-sm py-2 px-3 focus:ring-primYellow focus:border-primYellow"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#333333] "
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full border outline-none border-[#E0E0E0] rounded-md shadow-sm py-2 px-3 focus:ring-primYellow focus:border-primYellow"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-[#333333] "
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="mt-1 block w-full border outline-none border-[#E0E0E0] rounded-md shadow-sm py-2 px-3 focus:ring-primYellow focus:border-primYellow"
                />
              </div>

              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-[#333333] "
                >
                  Country
                </label>
                <select
                  id="country"
                  className="mt-1 block w-full border outline-none border-[#E0E0E0]  rounded-md shadow-sm py-2 px-3 focus:ring-primYellow focus:border-primYellow"
                >
                  <option>Choose country</option>
                  <option>USA</option>
                  <option>Canada</option>
                  <option>UK</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-[#333333] "
                >
                  City
                </label>
                <select
                  id="city"
                  className="mt-1 block text-gray-600 w-full border border-[#E0E0E0] rounded-md shadow-sm py-2 px-3 focus:ring-primYellow focus:border-primYellow"
                >
                  <option>Choose city</option>
                  <option>New York</option>
                  <option>Los Angeles</option>
                  <option>Chicago</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="zip"
                  className="block text-sm font-medium text-[#333333] "
                >
                  Zip code
                </label>
                <input
                  type="text"
                  id="zip"
                  className="mt-1 block w-full border outline-none border-[#E0E0E0] rounded-md shadow-sm py-2 px-3 focus:ring-primYellow focus:border-primYellow"
                />
              </div>

              <div>
                <label
                  htmlFor="address1"
                  className="block text-sm font-medium text-[#333333] "
                >
                  Address 1
                </label>
                <input
                  type="text"
                  id="address1"
                  className="mt-1 block w-full border outline-none border-[#E0E0E0] rounded-md shadow-sm py-2 px-3 focus:ring-primYellow focus:border-primYellow"
                />
              </div>

              <div>
                <label
                  htmlFor="address2"
                  className="block text-sm font-medium text-[#333333] "
                >
                  Address 2
                </label>
                <input
                  type="text"
                  id="address2"
                  className="mt-1 block w-full border outline-none border-[#E0E0E0] rounded-md shadow-sm py-2 px-3 focus:ring-primYellow focus:border-primYellow"
                />
              </div>
              <h2 className="text-lg openSans font-bold text-gray-800 ">
                Billing Address
              </h2>
              <div className="col-span-1 md:col-span-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-[#E0E0E0] text-primYellow "
                  />
                  <span className="ml-2 text-sm text-[#4F4F4F]">
                    Same as shipping address
                  </span>
                </label>
              </div>

              <div className="col-span-1 md:col-span-2 sm:flex justify-between mt-4">
                <Link href={"./cart"}>
                  <button
                    type="button"
                    className=" text-[#4F4F4F] border-[#E0E0E0] border w-[320px] h-[56px]"
                  >
                    Back to cart
                  </button>
                </Link>

                <button
                  type="submit"
                  className="bg-primYellow text-white w-[320px] h-[56px]"
                >
                  Proceed to shipping
                </button>
              </div>
            </form>
          </div>
          <div className="bg-white p-2 border sm:p-6">
            <div className="space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/tikka.png"
                      alt="Product"
                      width={83}
                      height={88}
                    />
                    <div>
                      <h3 className="text-sm openSans font-bold text-[#333333]">
                        Chicken Tikka Kabab
                      </h3>
                      <p className="text-xs text-[#4F4F4F] inter py-2">
                        150 gm net
                      </p>
                      <p className="text-xs text-[#4F4F4F] inter">$50</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="pt-4 space-y-4 inter">
                <div className="flex justify-between text-sm">
                  <span className="text-[#4F4F4F]">Sub-total</span>
                  <span className="font-medium text-[#333333]">$130</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#4F4F4F]">Shipping</span>
                  <span className="font-medium text-[#333333]">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#4F4F4F]">Discount</span>
                  <span className="font-medium text-[#333333]">25%</span>
                </div>
                <div className="flex justify-between text-sm border-b pb-4">
                  <span className="text-[#4F4F4F]">Tax</span>
                  <span className="font-medium text-[#333333]">$54.76</span>
                </div>
                <div className="flex justify-between openSans mt-5 text-[#333333] font-bold">
                  <span>Total</span>
                  <span>$432.65</span>
                </div>
              </div>
            </div>
            <button className="mt-6 bg-primYellow text-white text-[16px] inter px-6 py-2  hover:bg-white hover:text-primYellow hover:border-primYellow hover:border w-full">
              Place an order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
