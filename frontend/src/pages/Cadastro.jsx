import { useState } from 'react';

function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleCadastro = async (e) => {
    e.preventDefault();

    const resposta = await fetch('http://localhost:3001/cadastro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, senha }),
    });

    const dados = await resposta.json();
    console.log(dados);
    alert(dados.mensagem);
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form onSubmit={handleCadastro}>
        <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}



export default Cadastro;