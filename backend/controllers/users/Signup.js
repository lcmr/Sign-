// Cargamos nuestros módulos
const Bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// Añadimos dotenv para utilizar las variables de entorno
const dotenv = require('dotenv');

// Cargamos nuestro modelo
const User = require('../../models/user');

// Cargamos nuestras variables de entorno
dotenv.config();

module.exports = async ({ body }, res) => {
  // Aquí irá nuestra action
  const { password, passwordConfirmation, email, first_name, last_name } = body;

  // Primero validamos que las contraseñas sean iguales
  if (password === passwordConfirmation) {
    // Creamos una instancia para guardar el usuario
    const newUser = User({
      // Encriptamos el password, y ese password lo pasamos a la base de datos
      first_name, last_name,
      password: Bcrypt.hashSync(password, 10),
      email,
    });

    // Si la instancia del model se ejecutó con éxito
    // intentamos guardarlo en nuestra base de datos
    // utilizando una promesa (async/await)
    try {
      // Guardamos el usuario
      const savedUser = await newUser.save();

      // Si el usuario se guardó con éxito, entonces
      // regresamos el email, el id y el first_name, last_name, para firmarlo
      // con jsonwebtoken
      const token = jwt.sign(
        { email, id: savedUser._id, first_name, last_name },
        process.env.API_KEY,
        { expiresIn: process.env.TOKEN_EXPIRES_IN },
      );

      // Cuando el usuario se firma, regresamos solamente el token
      // ya que este contiene la información necesaria para en un
      // futuro obtener todos los datos del usuario
      return res.status(201).json({ token });
    } catch (error) {
      // En caso que no se haya realizado la petición con éxito al guardar
      // regresamos un error 400 con el error en el "message" de la respuesta
      return res.status(400).json({
        status: 400,
        message: error,
      });
    }
  }

  // En caso de que las contraseñas no sean iguales
  // retornamos un error 400 en la petición
  return res.status(400).json({
    status: 400,
    message: '¡Las contraseñas no coinciden, intenta nuevamente!',
  });
};