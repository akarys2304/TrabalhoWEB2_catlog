import { useState, useEffect } from 'react';
import capa from './img/cogu.jpg';
import gato from './img/cat.png';
import logo from './img/LOGO.png';
import fotoperfil from './img/user.png';

function Geral(){
    useEffect(() => {
        document.body.style.backgroundColor = "#2C3231";
        return () => {
          document.body.style.backgroundColor = ""; // Reseta ao desmontar
        };
      }, []);

    let flag = 0;
    function VisualizarPost() {
    const elemento = document.getElementById("viewpost");
    elemento.classList.add("md:block");
    flag = 1;
    }

    function VoltaAoNormal(){
        if(flag){
            const elemento = document.getElementById("viewpost");
            elemento.classList.remove("md:block");
        }
        flag = 0;
    }

    function VisualizarPostMobile(){
        const elemento = document.getElementById("viewpostmobile");
        const rodape = document.getElementById("botoespe");
        rodape.classList.add("hidden");
        elemento.classList.remove("hidden");
        flag = 1
    }

    function VoltaAoNormalMobile(){
        const elemento = document.getElementById("viewpostmobile");
        const rodape = document.getElementById("botoespe");
        rodape.classList.remove("hidden");
        elemento.classList.add("hidden");
        flag = 0;
    }


    let larguraInicial = window.innerWidth;

    window.addEventListener('resize', () => {
    const larguraAtual = window.innerWidth;

    // Recarrega a página somente se houver mudança significativa no tamanho
        if (Math.abs(larguraAtual - larguraInicial) > 50) { // Evitar reload em pequenos ajustes
            window.location.reload();
            if(flag){
                const card = document.getElementById("card");
                card.click();
            }
        }
    });


 return (

    <div className="bg-[#2C3231]" id="obody">
        <div className="hidden viewpost h-screen w-screen fixed bg-[#00000080] " onclick={VoltaAoNormal} id="viewpost">
            <div
                className="post bg-custom-gray fixed md:h-10/12 inset-0 rounded-full top-10 left-5/6 bottom-10 flex-col mb-15 md:border md:rounded-md md:border-gray-400 border-b-4 border-b-[#1D2120] md:p-4 pb5 md:w-2/5 md:justify-self-center">
                <div className="flex-row flex mb-4">
                    <div className="w-8"></div>
                    <h1 className="text-white flex-auto w-8 text-center text-2xl font-bold flex-1">AMANITA</h1>
                    <img className="block md:hidden w-6 h-6 mr-2" src="img/view.png" onclick="VisualizarPostMobile()" alt="Ver mais" />
                    <div className="w-8 hidden hidden md:block"></div>
                </div>
                <img src={capa} className="justify-self-center md:w-4/5 md:w-3/4" alt="Imagem de cogumelo" />
                <div className="texto mt-5 w-5/6 mb-10 md:w-3/4 justify-self-center">
                    <p className="text-center text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <p className="truncate text-center text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <div className="reactions flex-row flex justify-items-center align-center justify-self-center mt-2">
                        <img className="align-middle h-3.5 self-center" src="./img/like.png" alt="Likes" />
                        <p className="align-self-start font-bold ml-2 text-white mr-4">3</p>
                        <img className="align-middle h-3.5 self-center" src="./img/view.png" alt="ver" />
                        <p className="text-indigo-200 ml-2">Ver comentários</p>
                    </div>
                    <div className="">
                        <p className="text-center text-white"><span className="font-bold ">teteux2</span> Fascinante, mais um rei do
                            reino fungi</p>
                    </div>
                    <div>
                        <input className="bg-[#1D2120] p-3 text-white mt-3 w-full" type="text" name="" id=""
                            placeholder="Digite um comentário" />
                    </div>
                </div>
            </div>
        </div>
        <div className=" fixed w-screen h-screen bg-[#2C3231] flex flex-col justify-items-center hidden" id="viewpostmobile">
            {/* <!-- Cabeçalho --> */}
            <div className="bg-[#1D2120] row-span-1 col-span-1 md:col-span-2 flex items-stretch gap-4">
                <div className="flex-auto w-8 flex items-center">
                    <img className="ms-4 w-6 h-6" src="./img/back.png" onclick="VoltaAoNormalMobile()" />
                </div>  
                <div className="flex-none flex items-center">
                    <img className="ms-4 w-8 h-8" src="./img/cat.png"  />
                </div>
                <div className="flex-auto w-8 flex flex-row-reverse items-center pr-4">
                    <a href="profile.html"><img className="rounded-full w-12" src="./img/user.png" alt="Foto de Perfil" /></a>
                    <a href="#">
                        <p className="mr-5 text-white hidden md:block">MEUS CATÁLOGOS</p>
                    </a>
                </div>
            </div>

            <h1 className="text-white text-center font-bold text-3xl mt-10">AMANITA</h1>
            <img src={capa} alt="Foto do post" />
            <p className="text-white text-center mt-5 ">Post por <span className="font-bold ">teteux2 </span>em <a className="font-bold text-blue-500" href="#">Cogumelos Famosos</a></p>
            <p className="text-center text-white mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="truncate text-center text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="reactions flex-row flex justify-items-center align-center self-center justify-self-center mt-10">
                <img className="align-middle h-5.5 self-center" src="./img/like.png" alt="Likes" />
                <p className="align-self-start font-bold ml-2 text-white mr-4">3</p>
                <img className="align-middle h-4.5 self-center" src="./img/view.png" alt="ver" />
                <p className="text-indigo-200 ml-2">Ver comentários</p>
            </div>
            <div className="mt-10">
                <p className="text-center text-white"><span className="font-bold ">teteux2</span> Fascinante, mais um rei do
                    reino fungi</p>
            </div>
            <div>
                <input className="bg-[#1D2120] p-3 text-white mt-10 w-full" type="text" name="" id=""
                    placeholder="Digite um comentário"  />
            </div>


        </div>

        <div className="w-screen h-screen grid grid-cols-1 md:grid-cols-2 grid-rows-12">
            {/* <!-- Cabeçalho --> */}
            <div className="bg-[#1D2120] row-span-1 col-span-1 md:col-span-2 flex items-stretch gap-4">
                <div className="flex-auto w-8 flex items-center">
                    <img className="ms-4 w-8 h-8" src={gato} />
                </div>  
                <div className="flex-none flex items-center">
                    <p className="text-white">GERAL</p>
                </div>
                <div className="flex-auto w-8 flex flex-row-reverse items-center pr-4">
                    <a href="profile.html"><img className="rounded-full w-12" src={fotoperfil} alt="Foto de Perfil" /></a>
                    <a href="#">
                        <p className="mr-5 text-white hidden md:block">MEUS CATÁLOGOS</p>
                    </a>
                </div>
            </div>


            <div className="max-container flex w-screen md:flex-row flex-col">
                {/* <!-- Mini menu que só tem no mobile --> */}
                <div className="block md:hidden w-full bg-custom-gray h-fit text-white flex justify-center fixed bottom-0" id="botoespe">
                    <a href="./new_post.html"
                        className="font-bold w-30 text-center m-2 border-2 border-slate-100 rounded-3xl bg-[#AA4F66] text-white p-3 mr-4">
                        NOVO POST
                    </a>
                    <a href="/"
                        className="font-bold w-30 text-center m-2 border-2 border-slate-100 rounded-3xl bg-[#AA4F66] text-white p-3">
                        CATÁLOGOS
                    </a>
                </div>

                {/* <!-- Parte esquerda do max-container --> */}
                <div className="hidden md:block w-3/12 md:flex w-3/12 h-dvh items-center justify-center">
                    {/* <!-- Lateral esquerdo --> */}
                    <div className="ml-30 border border-[#AA4F66] rounded-3xl self-center h-96 p-5">
                        <h1 className="text-center text-white w-60">Olá, USER0000</h1>
                        <img className="my-8 w-24 justify-self-center" src={logo} />
                        <p className="text-center text-white mb-6 ">Seus posts recentes: </p>
                        <div className="justify-self-center butao">
                            <ul>
                                <li className="text-blue-500 text-center"><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li className="text-blue-500 text-center"><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li className="text-blue-500 text-center"><a href="">Lorem ipsum dolor sit amet</a></li>
                                <li className="text-blue-500 text-center"><a href="">Lorem ipsum dolor sit amet</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- Feed --> */}
                <div className="flex-col feed h-fit w-full md:w-1/2 md:bg-custom-gray md:border-x-2 md:border-[#1D2120]">
                    {/* <!--Card--> */}
                    <div
                        className="my-8 flex-col mb-15 md:border md:rounded-md md:border-gray-400 border-b-4 border-b-[#1D2120] md:p-4 pb5 md:w-9/12 md:justify-self-center"
                        onclick="VisualizarPost()" id="card">
                        <div className="flex-row flex mb-4">
                            <div className="w-8"></div>
                            <h1 className="text-white flex-auto w-8 text-center text-2xl font-bold flex-1">AMANITA</h1>
                            <img className="block md:hidden w-6 h-6 mr-2" src="img/view.png" onclick="VisualizarPostMobile()" alt="Ver mais" />
                            <div className="w-8 hidden hidden md:block"></div>
                        </div>
                        <img src={capa} className="justify-self-center md:w-4/5 md:w-3/4" alt="Imagem de cogumelo" / >
                        <div className="texto mt-5 w-5/6 mb-10 md:w-3/4 justify-self-center">
                            <p className="text-center text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                    </div>
                    {/* <!--Card--> */}
                    <div
                        className="my-8 flex-col mb-15 md:border md:rounded-md md:border-gray-400 border-b-4 border-b-[#1D2120] md:p-4 pb5 md:w-9/12 md:justify-self-center" onclick="VisualizarPost()" id="card">
                        <div className="flex-row flex mb-4">
                            <div className="w-8"></div>
                            <h1 className="text-white flex-auto w-8 text-center text-2xl font-bold flex-1">AMANITA</h1>
                            <img className="block md:hidden w-6 h-6 mr-2" src="img/view.png" onclick="VisualizarPostMobile()" alt="Ver mais"/>
                            <div className="w-8 hidden hidden md:block"></div>
                        </div>
                        <img src={capa} className="justify-self-center md:w-4/5 md:w-3/4" alt="Imagem de cogumelo" / >
                        <div className="texto mt-5 w-5/6 mb-10  md:w-3/4 justify-self-center">
                            <p className="text-center text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                    </div>
                    {/* <!--Card--> */}
                    <div
                        className="my-8 flex-col md:border md:rounded-md md:border-gray-400 border-b-4 border-b-[#1D2120] md:p-4 pb5 md:w-9/12 md:justify-self-center"
                        onclick="VisualizarPost()" id="card">
                        <div className="flex-row flex mb-4">
                            <div className="w-8"></div>
                            <h1 className="text-white flex-auto w-8 text-center text-2xl font-bold flex-1">AMANITA</h1>
                            <img className="block md:hidden w-6 h-6 mr-2" src="img/view.png" onclick="VisualizarPostMobile()" alt="Ver mais" />
                            <div className="w-8 hidden hidden md:block"></div>
                        </div>
                        <img src={capa} className="justify-self-center md:w-4/5 md:w-3/4" alt="Imagem de cogumelo" />
                        <div className="texto mt-5 w-5/6 mb-10  md:w-3/4 justify-self-center">
                            <p className="text-center text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="righside hidden md:block w-3/12 flex flex-col h-screen mt-10 justify-items-center">
                    <div
                        className="font-bold text-center w-3/5 m-2 border-2 border-slate-100 rounded-3xl bg-[#AA4F66] text-white p-3 mr-4 mb-10">
                        <a href="./new_post.html">
                            NOVO POST
                        </a>
                    </div>
                    <div
                        className="font-bold w-3/5 text-center m-2 border-2 border-slate-100 rounded-3xl bg-[#AA4F66] text-white p-3">
                        <a href="/">
                            CATÁLOGOS
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
 );
}

export default Geral;