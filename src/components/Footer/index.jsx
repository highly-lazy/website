import React from "react";
import email from "../../assets/icons/email.svg"
import iconn from "../../assets/icons/icon.svg"
import Telefon from "../../assets/icons/tel.svg"
import twitter from "../../assets/icons/twitter.svg";
import figma from "../../assets/icons/figma.svg";

import copyright from "../../assets/icons/copyright.svg"

import Github from "../../assets/icons/Buttongit.svg";
const Footer = () => {
    return (
        <footer className="bg-[#FFFFFF] text-gray-300 py-2 px-2 md:px-8">
            <div className="container mx-auto items-center md:px-[96px] md:py-[80px]">

                <div className="wrapper ml-10 dark-[#1F2937] pt-[40px] md:p-[100px] items-center ">
                    <button className='touch rounded-xl  text-[#4B5563] mb-6  md:ml-[350px]  font-medium text-base font-[Inter] bg-[#E5E7EB] py-2 px-5'>Get in touch</button>
                    <p className=" dark:text-white font-normal    text-center  font-[Inter]  mb-2  text-xl text-gray-600">
                        Imom Buxoriy bobomizning “Al Jome as sahih” kitobining <br />eng birinchi hadisi shu hadis bilan boshlangan: “Innamal a’malu  <br />bin niyyati” ya’ni, “Barcha amallar niyatga bog’liq”.
                    </p>


                </div>

                <div className="block  ml-[0px] md:ml-[350px] p-4 mt-4 md:mt-[100px]  items-center ">
                    <div className="flex gap-x-5  items-center  p-2">
                        <img src={email} alt="Email icon" />
                        <p className='font-semibold text-center font-[Inter]   text-[#111827] text-lg md:text-3xl'>khodievm@gmail.com</p>
                        <img src={iconn} alt="icon" />
                    </div>
                    <div className="flex gap-x-5  ml-5 items-center p-2" >
                        <img src={Telefon} alt="Phone icon" />
                        <p className='font-semibold font-[Inter]   text-[#111827] text-lg md:text-3xl'>+998 99 014 99 98</p>
                        <img src={iconn} alt="icon" />
                    </div>
                    <div>
                        <p className="font-normal  max-w-[376px]   text-center  md:mr-[40px] font-[Inter] mt-3 md:mt-10   text-base text-gray-600">You may also find me on these platforms!</p>
                        <div className="flex gap-x-10 items-center ml-[100px] mt-5 mb-10">
                            <img src={Github} alt="" className="w-6 h-6" />
                            <img src={twitter} alt="" className="w-6 h-6" />
                            <img src={figma} alt="" className="w-6 h-6" />
                        </div>
                    </div>


                </div>


                <div className="items-center w-full flex mt-2 md:mt-6 bg-gray-50 px-2 py-6 md:pl-[400px] gap-x-2 ">
                    <img src={copyright} alt=""/>
                    <p className="font-normal    text-center   font-[Inter]    text-base text-gray-600">
                        2023 | Designed and coded with ❤️️ by NAJOT TA’LIM
                    </p>
                </div></div>


        </footer>
    );
};

export default Footer;