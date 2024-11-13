import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pg from 'pg'; // Importa o módulo CommonJS como um todo
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import crypto from 'crypto';



const { Pool } = pg; // Desestrutura a exportação Pool do módulo

const app = express();
const port = process.env.PORT || 3002;


// Configuração do Pool para PostgreSQL
const pool = new Pool({
  connectionString: 'postgresql://postgres.rorvdnnjgxnmvzeksfke:Alef@quino123@aws-0-sa-east-1.pooler.supabase.com:6543/postgres',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

// Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo deu errado!');
});
app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));

dotenv.config();

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 5, // Limite de 5 tentativas de login por 15 minutos
  message: { error: 'Muitas tentativas de login. Tente novamente mais tarde.' }
});


app.post('/login', loginLimiter, async (req, res) => {
  const { cpf_paciente, senha_paciente } = req.body;

  try {
    // Consulta para buscar o paciente pelo CPF
    const result = await pool.query('SELECT * FROM public.pacientes WHERE cpf_paciente = $1', [cpf_paciente]);

    // Verifica se o paciente existe
    if (result.rows.length === 0) {
      console.log('Paciente não encontrado.');
      return res.status(401).json({ error: 'CPF ou senha incorretos' });
    }

    const user = result.rows[0]; // Pega o primeiro paciente retornado

    // Comparando a senha fornecida com a senha armazenada
    if (senha_paciente !== user.senha_paciente) {
      return res.status(401).json({ error: 'CPF ou senha incorretos' });
    }

    // Gera um token aleatório de 32 bytes e converte para hexadecimal
    const generateRandomToken = () => crypto.randomBytes(32).toString('hex');

    // Token aleatório
    const randomToken = generateRandomToken();

    // Salvar o token temporariamente em um banco de dados ou sistema de cache (ex: Redis)
    await pool.query('UPDATE public.pacientes SET token = $1 WHERE id_paciente = $2', [randomToken, user.id]);

    console.log('Login realizado com sucesso.');
    res.json({ message: 'Login realizado com sucesso', token: randomToken, nm_paciente: user.nm_paciente });

  } catch (error) {
    console.error('Erro ao validar o login', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});


app.post('/anamnese', async (req, res) => {
  const { remedio, remedioNao,
    alergia,
    alergiaNao,
    emagrecedor,
    emagrecedorNao,
    pressaoAlta,
    perdaPeso,
    anemia,
    problemaRins,
    gorduraLocalizada,
    atividadeFisica,
    atividadeFisicaOutros,
    colesterolTriglicerideos,
    artrite,
    dificuldadeDormir,
    ansiedade,
    deprimido,
    agua,
    constipacaoOuPrisao,
    gorduraFigado,
    dificuldadeCha,
    compulsaoDoceSalgado,
    diabetico,
    libidoFertilidade,
    menopausaOuTpm,
    quedaCabelo,
    polivitaminico,
    doencasCronicasOssos,
    melhorarPele,
    fumante,
    bebidas,
    mulheres } = req.body;

  try {
    // Inserir os dados na tabela anamnese
    const insertQuery = `
          INSERT INTO anamnese(remedio,remedioNao,
      alergia,
      alergiaNao,
      emagrecedor,
      emagrecedorNao,
      pressaoAlta,
      perdaPeso,
      anemia,
      problemaRins,
      gorduraLocalizada,
      atividadeFisica,
      atividadeFisicaOutros,
      colesterolTriglicerideos,
      artrite,
      dificuldadeDormir,
      ansiedade,
      deprimido,
      agua,
      constipacaoOuPrisao,
      gorduraFigado,
      dificuldadeCha,
      compulsaoDoceSalgado,
      diabetico,
      libidoFertilidade,
      menopausaOuTpm,
      quedaCabelo,
      polivitaminico,
      doencasCronicasOssos,
      melhorarPele,
      fumante,
      bebidas,
      mulheres)  
          VALUES ($1, $2, $3, $4, $5, $6, $7 ,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33)
          RETURNING *;
      `;
    const result = await pool.query(insertQuery, [remedio, remedioNao,
      alergia,
      alergiaNao,
      emagrecedor,
      emagrecedorNao,
      pressaoAlta,
      perdaPeso,
      anemia,
      problemaRins,
      gorduraLocalizada,
      atividadeFisica,
      atividadeFisicaOutros,
      colesterolTriglicerideos,
      artrite,
      dificuldadeDormir,
      ansiedade,
      deprimido,
      agua,
      constipacaoOuPrisao,
      gorduraFigado,
      dificuldadeCha,
      compulsaoDoceSalgado,
      diabetico,
      libidoFertilidade,
      menopausaOuTpm,
      quedaCabelo,
      polivitaminico,
      doencasCronicasOssos,
      melhorarPele,
      fumante,
      bebidas,
      mulheres])

    res.status(201).json({
      message: 'Anamnese inserida com sucesso',
      anamnese: result.rows[0],
    });
  } catch (error) {
    console.error('Erro ao inserir anamnese:', error);
    res.status(500).json({ error: 'Erro ao inserir anamnese' });
  }
});

app.get('/anamnese', async (req, res) => {
  const { id, cpf } = req.query;

  try {
      // Consulta SQL para buscar anamnese pelo ID e CPF
      const query = `
          SELECT * FROM anamnese
          WHERE id_anamnese = $1 AND cpf_paciente = $2
      `;
      const values = [id, cpf];

      const result = await pool.query(query, values);

      // Verifica se existem resultados
      if (result.rows.length > 0) {
          res.status(200).json(result.rows);
      } else {
          res.status(404).json({ message: 'Anamnese não encontrada.' });
      }
  } catch (error) {
      console.error('Erro ao buscar anamnese:', error);
      res.status(500).json({ error: 'Erro interno do servidor.' });
  }
});


// Rota para Adicionar Pacientes
app.post('/cadastro', async (req, res) => {
  const {
    nm_paciente,
    email_paciente,
    senha_paciente,
    telefone_paciente,
    cpf_paciente,
    idade_paciente,
    peso_paciente,
    altura_paciente,
  } = req.body;

  // Validação de campos obrigatórios
  if (!nm_paciente || !email_paciente || !senha_paciente || !cpf_paciente) {
    return res.status(400).json({ error: 'Nome, email, senha e CPF são obrigatórios.' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO public.pacientes (nm_paciente, email_paciente, senha_paciente, telefone_paciente, cpf_paciente, idade_paciente, peso_paciente, altura_paciente)
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [
        nm_paciente,
        email_paciente,
        senha_paciente,
        telefone_paciente || null, // Permitir que telefone_paciente seja nulo
        cpf_paciente,
        idade_paciente || null, // Permitir que idade_paciente seja nulo
        peso_paciente || null, // Permitir que peso_paciente seja nulo
        altura_paciente || null, // Permitir que altura_paciente seja nulo
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Erro ao inserir paciente:', error);
    if (error.code === '23505') { // Código de erro para violação de chave única (ex: email ou CPF duplicados)
      return res.status(409).json({ error: 'Email ou CPF já cadastrados.' });
    }
    res.status(500).json({ error: 'Erro ao adicionar o paciente.' });
  }
});


// Rota para listar pacientes pelo nome
app.get('/pacientes/nome/:nm_paciente', async (req, res) => {
  const { nm_paciente } = req.params;

  try {
    const result = await pool.query(
      'SELECT * FROM public.pacientes WHERE nm_paciente ILIKE $1',
      [`%${nm_paciente}%`] // Utiliza ILIKE para pesquisa case-insensitive
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Nenhum paciente encontrado com esse nome.' });
    }

    res.status(200).json(result.rows); // Retorna os pacientes encontrados
  } catch (error) {
    console.error('Erro ao buscar pacientes:', error);
    res.status(500).json({ error: 'Erro ao buscar pacientes.' });
  }
});

// Rota para listar todos os pacientes
app.get('/pacientes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM public.pacientes');
    res.status(200).json(result.rows); // Retorna todos os pacientes
  } catch (error) {
    console.error('Erro ao buscar pacientes:', error);
    res.status(500).json({ error: 'Erro ao buscar pacientes.' });
  }
});


// Encerrar o pool ao desligar o servidor
process.on('SIGTERM', () => {
  console.log('Encerrando o servidor...');
  pool.end(() => {
    console.log('Pool de conexões encerrado.');
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em https://127.0.0.1:${port}`);
});
