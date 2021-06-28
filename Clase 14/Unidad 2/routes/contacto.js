var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('hola soy la pagina de contacto');
});

module.exports = router;

var nodemailer = require("nodemailer");

router.post('/', async (req, res, next) => {

  var nombre = req.body.nombre;
  var email = req.body.email;
  var tel = req.body.tel;
  var mensaje = req.body.mensaje;

  var obj = {
    to: 'rubenpesoa@gmail.com',
    subject: 'CONTACTO WEB',
    html: nombre + " se contacto a traves de la web y quiere mas infomracion a este correo :" + email + ". <br> ademas, hizo este comentario: " + mensaje + ". <br> Su tel: " + tel
  }

  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  })

  var info = await transport.sendMail(obj);

  res.render('contacto', {
    message: 'Mensaje enviado correctamente'
  });
});

