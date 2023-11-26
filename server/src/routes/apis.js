const express = require('express');
const router = express.Router();

router.get('/exemplo', (req, res) => {
  res.json({ mensagem: 'Rota de exemplo no backend' });
});

module.exports = router;
