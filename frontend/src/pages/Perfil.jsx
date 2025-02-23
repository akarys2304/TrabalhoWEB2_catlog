import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./style_perfil.css"; 
import gato from './img/cat.png';
import volta from './img/back.png';
import luffy from './img/luffy_profile.jpg';

function Perfil(){
    // Defina o estado para 'mensagem'
    const [mensagem, setMensagem] = useState("");

    useEffect(() => {
        const fetchUserName = async () => {
            const token = localStorage.getItem('token');

            const resposta = await fetch('http://localhost:3001/inicio', {
                method: 'GET',
                headers: { Authorization: `Bearer ${token}` },
            });

            const dados = await resposta.json();
            setMensagem(dados.mensagem); // Atualiza o estado com a mensagem
        };

        fetchUserName();
    }, []);

    return(
        <div>
            {/* <!-- Cabeçalho --> */}
            <div className="cabecalho">
                <div className="back-button">
                    <a href="/geral">
                        <img className="seta" src={volta} alt = "voltar" />
                    </a>
                </div>
                <div className="img-gato">
                    <img className="gato" src={gato} alt="Catlog" />
                </div>
            </div>
            
            <div className="container">
                <main className="profile">
                    <p className="user-date">Usuário desde 01/11/2024</p> {/* Ver se isso aqui vai continuar porque precisa por a data do cadastro e não sei se estamos salvando */}
                    <div className="profile-pic">
                        <img src={luffy} alt="Foto do Usuário" />
                    </div>
                    {/* adicionar coisa de sessão aqui */}
                    <h2>{mensagem}</h2> 
                    <ul className="options">
                        <li><a href="/editar_perfil">EDITAR MEUS DADOS</a></li>
                        <li><a href="/">EXCLUIR MINHA CONTA</a></li>
                        <li><a href="/login" className="logout">SAIR</a></li>
                    </ul>
                </main>
            </div>
        </div>

    );
}

export default Perfil;