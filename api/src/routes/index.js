const { Router } = require('express');
// Importar todos los routers;
const dogRouter = require('./dogRoute');
const temperamentRouter = require('./temperamentRouter');
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs',dogRouter);
router.use('/temperaments',temperamentRouter);
module.exports = router;
