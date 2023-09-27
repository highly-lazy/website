import React from 'react';
import "./style.scss"
import js from "../../../assets/icons/javscript.svg"
import ts from "../../../assets/icons/typescript.svg"
import react from "../../../assets/icons/react.svg"
import next from "../../../assets/icons/nextjs.svg"
import node from "../../../assets/icons/nodejs.svg"
import express from "../../../assets/icons/express.svg"
import nest from "../../../assets/icons/nest.svg"
import socket from "../../../assets/icons/socket.svg"
import sql from "../../../assets/icons/postgresql.svg"
import db from "../../../assets/icons/mongodb.svg"
import sass from "../../../assets/icons/sass.svg"
import tailwindscss from "../../../assets/icons/tailwindcss.svg"
import laravel from "../../../assets/icons/php.svg"
import vue from "../../../assets/icons/vue.svg"
import nuxt from "../../../assets/icons/nuxt.svg"
import git from "../../../assets/icons/git.svg"
const index = () => {
    return (
        <div>
            <section id="skills">
                <div className="container">
                    <div className="skillls dark:bg-[#030712] w-full block    items-center  px-5 py-[80px]">
                        <button className='rounded-xl  ml-[150px] mb-6 md:ml-[500px] text-[#4B5563]  font-medium text-base font-[Inter] bg-[#E5E7EB] py-1 px-5'>Skills</button>
                        <h3 className='font-normal text-center  font-[Inter]  mb-5  text-xl text-[#4B5563 ]'>The skills, tools and technologies I am really good at:</h3>
                        <div className="ikons justify-between mb-[60px]  flex-wrap flex gap-x-10 gap-y-5 md:gap-x-[70px]">
                      
                                <div className="javascript">
                                        <img src={js} alt="" />
                                        <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>Javascript</p>
                                    </div>
                                    <div className="typescript items-center">
                                        <img src={ts} alt="" />
                                        <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>TypeScript</p>
                                    </div>

                                    <div className="reacts">
                                        <img src={react} alt="" />
                                        <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>React</p>
                                    </div>
                                    <div className="nextjs">
                                        <img src={next} alt="" />
                                        <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>Nextjs</p>
                                    </div>
                                    <div className="nodejs">
                                        <img src={node} alt="" />
                                        <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>NodeJs</p>
                                    </div>

                                    <div className="expressjs">
                                        <img src={express} alt="" />
                                        <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>expressjs</p>
                                    </div>

                                    <div className="nestjs">
                                        <img src={nest} alt="" />
                                        <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>NestJs</p>
                                    </div>

                                    <div className="socker">
                                        <img src={socket} alt="" />
                                        <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>socket.io</p>
                                    </div>

                                <div className="Postgrelsql">
                                    <img src={sql} alt="" />
                                    <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>PostgreSQL</p>
                                </div>
                                <div className="MongoDB items-center">
                                    <img src={db} alt="" />
                                    <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>MongoDB</p>
                                </div>

                                <div className="Sass/Scss">
                                    <img src={sass} alt="" />
                                    <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>Sass/Scss</p>
                                </div>
                                <div className="Tailwindcss">
                                    <img src={tailwindscss} alt="" />
                                    <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>Tailwindcss</p>
                                </div>
                                <div className="Laravel pb-3">
                                    <img src={laravel} alt="" />
                                    <p className='font-normal text-center  font-[Inter]    text-lg text-[#4B5563 ]'>Laravel(PHP)</p>
                                </div>

                                <div className="vuejs mt-[10px]">
                                    <img src={vue} alt="" />
                                    <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>Vue.js</p>
                                </div>

                                <div className="Nuxt.js">
                                    <img src={nuxt} alt="" />
                                    <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>Nuxt.js</p>
                                </div>

                                <div className="Git">
                                    <img src={git} alt="" />
                                    <p className='font-normal text-center  font-[Inter]  mt-2  text-lg text-[#4B5563 ]'>Git</p>
                                </div>
                          
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default index;