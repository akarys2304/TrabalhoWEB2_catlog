import gato from './img/cat.png';
import logo from './img/LOGO.png';
import voltar from "./img/back.png";

function NovoPost(){
    return(
        <div className="bg-[#2C3231]">
            <div className="w-screen h-screen grid grid-cols-1 grid-rows-12">
                {/* <!-- Cabeçalho --> */}
                <div className="bg-[#1D2120] col-span-1 row-span-1 grid grid-rows-1 grid-cols-3 w-full">
                    <div className="col-span-1 flex justify-start items-center ml-6">
                        <a href="./geral">
                            <img className="w-5" src={voltar} alt="Voltar" />
                        </a>
                    </div>
                    <div className="flex justify-center items-center">
                        <img className="w-8" src={gato} alt="Gatinho" />
                    </div>
                </div>
                <div className="w-full h-full col-span-1 row-span-11 md:grid md:grid-cols-6 md:grid-rows-1">
                    {/* <!-- div vazia para um espaço --> */}
                    <div className="col-span-1 row-span-1 sm:hiddem"></div>
                    <div className="w-full h-full grid grid-cols-1 grid-rows-11 md:col-span-3 md:grid md:grid-cols-1 md:grid-rows-12 ">
                        <div className="w-full col-span-1 row-span-2 md:row-span-2 flex md:justify-start justify-center items-center pt-7">
                            <p className="text-2xl md:text-5xl font-bold font-custom text-white mb-9">NOVO POST</p>
                        </div>
                        <div className="w-full col-span-1 row-span-9 flex flex-col justify-start items-center md:items-start">
                            <form className="flex flex-col justify-center items-center gap-2 md:gap-4">
                                <input className=" bg-transparent border-2 border-white rounded-full pl-5 w-72 md:w-[636px] h-10 md:h-14 text-[#879597] shadow-xl mb-2" type="text" placeholder="Título" />
                                <div className="flex flex-col md:flex-row justify-center items-center md:flex md:justify-center md:items-center gap-2 md:gap-6">
                                    <input className=" bg-transparent border-white rounded-full pl-5 w-72 md:w-[275px] h-10 md:h-14 text-[#879597] mb-2" type="text" placeholder="Selecione arquivos do seu pc" />
                                    <button className="bg-[#AA4F66] w-72 md:w-[150px] h-10 md:h-14 text-white text-base md:text-lg rounded-full font-bold mb-2 hover:bg-[#db728c]">UPLOAD</button>
                                    
                                </div>
                                <textarea className="bg-transparent border-2 border-white rounded-xl pl-5 w-72 md:w-[636px] h-32 text-[#879597] shadow-xl mb-2 resize-none overflow-auto" placeholder="Conteúdo do Post"/>
        
                                <div className="w-full flex justify-end items-center">
                                    <input className="bg-transparent border-2 border-white rounded-full pl-5 w-72 md:w-[636px] h-10 md:h-14 text-[#879597] shadow-xl mb-2 outline-0" type="text" placeholder="Selecione o catálogo" />
                                    <svg className="stroke-1 w-8 stroke-white absolute mr-4 mb-1 size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                                
                                <button className="bg-[#AA4F66] w-40 md:w-44 h-10 md:h-16 text-white text-base md:text-lg rounded-full font-bold mt-5 hover:bg-[#db728c]">CONCLUIR</button>
                            </form>
                        </div>
                    </div>
                    <div className="hidden md:col-span-2 md:row-span-1 md:flex md:justify-end md:items-end md:mr-9 md:mb-10">
                        <img src={logo} alt= "Logo Catlog" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NovoPost;