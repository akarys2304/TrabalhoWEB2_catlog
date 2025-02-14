require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conectar ao banco de dados
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar no MySQL:', err);
  } else {
    console.log('Banco de dados conectado!');
  }
});

// Rota de Cadastro
app.post('/cadastro', async (req, res) => {
  const { nome, email, senha } = req.body;
  const senhaCriptografada = await bcrypt.hash(senha, 10);

  const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
  db.query(query, [nome, email, senhaCriptografada], (err, result) => {
    if (err) {
      return res.status(500).json({ erro: err.message });
    }
    res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
  });
});

// Rota de Login
app.post('/login', async (req, res) => {
    const { email, senha } = req.body;
  
    // Verificar se o e-mail existe no banco
    db.query('SELECT * FROM usuarios WHERE email = ?', [email], async (err, result) => {
      if (err) {
        return res.status(500).json({ erro: 'Erro ao acessar o banco de dados' });
      }
      
      if (result.length === 0) {
        return res.status(400).json({ erro: 'Usuário não encontrado' });
      }
  
      const usuario = result[0];
  
      // Comparar a senha digitada com a criptografada no banco
      const senhaValida = await bcrypt.compare(senha, usuario.senha);
  
      if (!senhaValida) {
        return res.status(400).json({ erro: 'Senha incorreta' });
      }
  
      // Gerar token JWT
      const token = jwt.sign(
        { id: usuario.id, nome: usuario.nome, email: usuario.email },
        process.env.JWT_SECRET, // Defina uma chave secreta no .env
        { expiresIn: '1h' } // Token expira em 1 hora
      );
  
      // Retornar o token para o frontend
      res.status(200).json({ mensagem: 'Login bem-sucedido', token });
    });
  });

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
