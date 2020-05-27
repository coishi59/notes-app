const {Router} = require('express');
const router = Router();
const {renderSignupForm, renderSigninForm, signin, signup, logout} = require('../controllers/users.controllers');

//cuando se registra
router.get('/users/signup', renderSignupForm);
//una vez que se registro
router.post('/users/signup', signup);

//para inciar sesion
router.get('/users/signin', renderSigninForm);
//envio de inicio de sesion
router.post('/users/signin', signin);

//cuando cierra sesion
router.get('/users/logout', logout);


module.exports = router;