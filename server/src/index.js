const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Adicione rotas e configurações aqui

const apiRoutes = require('./routes/api');

app.use('/api', apiRoutes);



app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
