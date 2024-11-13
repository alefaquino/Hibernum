import app from './app.js';

const port =  3002;
app.listen(port, () => {
  console.log(`Servidor rodando em https://127.0.0.1:${port}`);
});
