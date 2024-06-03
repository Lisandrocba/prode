import Users from '../../models/Users.js';
import bcrypt from 'bcrypt';
export const signup = async (req, res) => {
    console.log('llego');
    console.log(req.body);
    const { password, userName, nombre, apellido, email } = req.body;
    const user = await Users.findOne({ userName });
    if (user) {
        return res.status(400).send({ status: 'error', error: 'El usuario ya se encuentra registrado' });
    }
    const passEncript = await bcrypt.hash(password, 10);
    console.log(passEncript);
    try {
        const newUser = new Users({ userName, nombre, apellido, email, password: passEncript });
        await newUser.save();
        const idNewUser = newUser._id;
        res.send({ status: 'success', idNewUser, message: 'Usuario creado con exito' });
    }
    catch (error) {
        res.status(500).send({ status: 'error', error: 'Error al cargar el usuario', err: error });
    }
};
