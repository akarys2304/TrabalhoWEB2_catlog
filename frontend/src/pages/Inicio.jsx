import { useState, useEffect } from 'react';
import capa from './img/cogu.jpg';
import gato from './img/cat.png';
import logo from './img/LOGO.png';

function Inicio(){
    
    useEffect(() => {
        document.body.style.backgroundColor = "#2C3231";
        return () => {
          document.body.style.backgroundColor = ""; // Reseta ao desmontar
        };
      }, []);

    return (

        

        // <div className="bg-[#2C3231]" > antigo body 
            <div className="w-screen h-screen bg-[#2C3231] grid grid-cols-1 md:grid-cols-2 grid-rows-12">
                <div className="bg-[#1D2120] row-span-1 col-span-1 md:col-span-2 flex items-stretch gap-4">
                    <div className="flex-auto w-8 flex items-center">
                        <img className="ms-4 w-8 h-8" src={gato}  alt="Gato catlog"/>
                    </div>
                    <div className="flex-none flex items-center">
                        <p className="text-white">GERAL</p>
                    </div>
                    <div className="flex-auto w-8 flex flex-row-reverse items-center">
                        <a href="login.html" className=" h-10 w-20 mr-4 border-2 border-slate-100 rounded-3xl bg-custom-purp text-white flex items-center justify-center text-center">
                            LOGAR
                        </a>
                    </div>
                </div>


                <div className="max-container flex w-screen">
                    <div className="hidden md:block w-3/12 md:flex w-3/12 h-dvh items-center justify-center">
                        <div className="ml-30 border border-[#AA4F66] rounded-3xl self-center h-96 p-5">
                            <h1 className="text-center text-white w-60">Faça seu login</h1>
                            <img className="my-8 w-24 justify-self-center" src={logo}/>
                            <p className="text-center text-white mb-6 ">Seus posts recentes: </p>
                        <div className="justify-self-center butao"> 
                        <a href="login.html" className="h-10 w-20 border-2 border-slate-100 rounded-3xl bg-custom-purp text-white p-3">
                                LOGAR
                            </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Feed --> */}
                    <div className="flex-col feed h-fit w-full relative md:w-1/2 md:bg-[#242927] md:border-x-2 md:border-[#1D2120]">
                        {/* <!--Card--> */}
                        <div className="my-8 flex-col mb-15 md:border md:rounded-md md:border-gray-400 border-b-4 border-b-[#1D2120] md:p-4 pb5 md:w-9/12 md:justify-self-center"> 
                            <div className="flex-row flex mb-4">
                                <div className="w-8"></div>
                                <h1 className="text-white flex-auto w-8 text-center text-2xl font-bold flex-1">AMANITA</h1>
                                <div className="w-8 hidden hidden md:block"></div>
                            </div>
                            <img src={capa}  className="justify-self-center md:w-4/5 md:w-3/4" alt="Imagem de cogumelo"/>
                            <div className="texto mt-5 w-5/6 mb-10 md:w-3/4 justify-self-center">
                                <p className="text-center text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                        {/* <!--Card--> */}
                        <div className="my-8 flex-col mb-15 md:border md:rounded-md md:border-gray-400 border-b-4 border-b-[#1D2120] md:p-4 pb5 md:w-9/12 md:justify-self-center"> 
                            <div className="flex-row flex mb-4">
                                <div className="w-8"></div>
                                <h1 className="text-white flex-auto w-8 text-center text-2xl font-bold flex-1">AMANITA</h1>
                                <div className="w-8 hidden hidden md:block"></div>
                            </div>
                            <img src={capa}  className="justify-self-center md:w-4/5 md:w-3/4" alt="Imagem de cogumelo"/>
                            <div className="texto mt-5 w-5/6 mb-10  md:w-3/4 justify-self-center">
                                <p className="text-center text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                        {/* <!--Card--> */}
                        <div className="my-8 flex-col md:border md:rounded-md md:border-gray-400 border-b-4 border-b-[#1D2120] md:p-4 pb5 md:w-9/12 md:justify-self-center"> 
                            <div className="flex-row flex mb-4">
                                <div className="w-8"></div>
                                <h1 className="text-white flex-auto w-8 text-center text-2xl font-bold flex-1">AMANITA</h1>
                                <div className="w-8 hidden hidden md:block"></div>
                            </div>
                            <img src={capa}  className="justify-self-center md:w-4/5 md:w-3/4" alt="Imagem de cogumelo" />
                            <div className="texto mt-5 w-5/6 mb-10  md:w-3/4 justify-self-center">
                                <p className="text-center text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="righside hidden md:block w-3/12"></div>

                </div>
            </div>
        // </div>


    );
}

export default Inicio;