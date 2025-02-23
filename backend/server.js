require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const verificarToken = require('./authMiddleware');

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

///////////////////////////////////// Usuários /////////////////////////////////////////////////////////////////////

// Rota para recuperar informações do usuário
app.get('/recuperarPerfil', verificarToken, async (req, res) => {
  const id = req.user.id; // Pegando o ID do usuário do token

  try {
    const sql = 'SELECT nome, usuario, email, telefone, dataNascimento, genero FROM usuarios WHERE id = ?';
    db.query(sql, [id], (erro, resultados) => {
      if (erro) return res.status(500).json({ mensagem: 'Erro no servidor', erro });

      if (resultados.length === 0) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado' });
      }

      res.json(resultados[0]); // Retorna os dados do usuário
    });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro no servidor', erro });
  }
});

// Rota do Início (retorna informações do usuário local)
app.get('/inicio', verificarToken, (req, res) => {
  const userName = req.user.nome;  // O nome vem do payload do JWT
  res.status(200).json({ mensagem: `${userName}` });
});

// Rota para deletar perfil
app.delete('/deletarPerfil', verificarToken, async (req, res) => {
  const id = req.user.id; // Pegando o ID do usuário logado

  try {
    const sql = 'DELETE FROM usuarios WHERE id = ?';
    db.query(sql, [id], (erro, resultados) => {
      if (erro) {
        return res.status(500).json({ mensagem: 'Erro ao deletar perfil', erro });
      }

      if (resultados.affectedRows === 0) {
        return res.status(404).json({ mensagem: 'Usuário não encontrado' });
      }

      res.json({ mensagem: 'Perfil deletado com sucesso' });
    });
  } catch (erro) {
    res.status(500).json({ mensagem: 'Erro no servidor', erro });
  }
});

// Rota de Editar Perfil
app.put('/editarPerfil', verificarToken, async (req, res) => {
  const { nome, usuario, email, telefone, dataNascimento, genero, senha } = req.body;
  const id = req.user.id; // Pegando o ID do usuário logado

  try {
    // Criptografa a senha apenas se ela foi alterada
    let senhaCriptografada = undefined;
    if (senha) {
      const salt = await bcrypt.genSalt(10);
      senhaCriptografada = await bcrypt.hash(senha, salt);
    }

    let sql;
    let valores;

    if (senhaCriptografada) {
      // Se a senha foi alterada, inclua ela na atualização
      sql = 'UPDATE usuarios SET nome = ?, usuario = ?, email = ?, telefone = ?, dataNascimento = ?, genero = ?, senha = ? WHERE id = ?';
      valores = [nome, usuario, email, telefone, dataNascimento, genero, senhaCriptografada, id];
    } else {
      // Se a senha não foi alterada, não inclui ela na atualização
      sql = 'UPDATE usuarios SET nome = ?, usuario = ?, email = ?, telefone = ?, dataNascimento = ?, genero = ? WHERE id = ?';
      valores = [nome, usuario, email, telefone, dataNascimento, genero, id];
    }

    db.query(sql, valores, (erro, resultado) => {
      if (erro) {
        return res.status(500).json({ mensagem: 'Erro ao atualizar perfil', erro });
      }

      // Verifica se houve alteração
      if (resultado.affectedRows > 0) {
        return res.status(200).json({ mensagem: 'Usuário atualizado com sucesso!' });
      } else {
        return res.status(404).json({ mensagem: 'Usuário não encontrado ou nenhuma alteração realizada.' });
      }
    });
  } catch (erro) {
    return res.status(500).json({ mensagem: 'Erro no servidor', erro });
  }
});

// Rota de Cadastro
app.post('/cadastro', async (req, res) => {
  const { nome, usuario, email, telefone, dataNascimento, genero, senha } = req.body;

  try {
    // Criptografando a senha
    const salt = await bcrypt.genSalt(10);
    const senhaCriptografada = await bcrypt.hash(senha, salt);

    const sql = 'INSERT INTO usuarios (nome, usuario, email, telefone, dataNascimento, genero, senha) VALUES (?, ?, ?, ?, ?, ?, ?)';

    db.query(sql, [nome, usuario, email, telefone, dataNascimento, genero, senhaCriptografada], (erro, resultado) => {
      if (erro) {
        // Em caso de erro na consulta
        return res.status(500).json({ mensagem: 'Erro ao cadastrar usuário', erro });
      }
      // Sucesso no cadastro
      res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso!' });
    });

  } catch (error) {
    // Em caso de erro na criptografia da senha
    res.status(500).json({ mensagem: 'Erro ao criptografar a senha', error });
  }
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

app.post('/logout', (req, res) => {
  // No caso de JWT, não há nada para remover no backend diretamente.
  // A melhor prática é garantir que o token seja removido no front-end.

  res.status(200).json({ mensagem: 'Usuário deslogado com sucesso!' });
});
///////////////////////////////////// Post /////////////////////////////////////////////////////////////////////

// Rota para publicar post
app.get('/todosPosts', (req, res) =>{
  try{
    const sql = 'SELECT * FROM post';
    db.query(sql, (erro, resultado) => {
      if (erro) {
        return res.status(500).json({ mensagem: 'Erro ao buscar os posts', erro });
      }
      res.status(200).json({mensagem: 'Posts recuperados com sucesso!', posts: resultado});
    });
  }catch(error){
    res.status(500).json({ mensagem: 'Erro ao tentar buscar todos os posts', error });
  }
});

app.post('/publicarPost', verificarToken, (req, res) => {
  const { titulo, texto, caminho_imagem } = req.body;
  const id_user = req.user.id; // Pegando o ID do usuário logado

  try {
    const sql = 'INSERT INTO post (titulo, texto, caminho_imagem, usuario_id) VALUES (?, ?, ?, ?)';
    db.query(sql, [titulo, texto, caminho_imagem, id_user], (erro, resultado) => {
      if (erro) {
        return res.status(500).json({ mensagem: 'Erro ao publicar o post', erro });
      }
      res.status(201).json({ mensagem: 'Post publicado com sucesso!' });
    });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao tentar publicar o post', error });
  }
});

// Rota para editar post
app.put('/editarPost', (req, res) => {
  const { titulo, texto, caminho_imagem, id_post } = req.body;

  try {
    const sql = 'UPDATE post SET titulo = ?, texto = ?, caminho_imagem = ? WHERE id = ?';

    db.query(sql, [titulo, texto, caminho_imagem, id_post], (erro, resultado) => {
      if (erro) {
        return res.status(500).json({ mensagem: 'Erro ao atualizar post', erro });
      }

      if (resultado.affectedRows > 0) {
        return res.status(200).json({ mensagem: 'Post atualizado com sucesso!' });
      } else {
        return res.status(404).json({ mensagem: 'Post não encontrado ou nenhuma alteração realizada.' });
      }
    });

  } catch (erro) {
    return res.status(500).json({ mensagem: 'Erro no servidor', erro });
  }
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
