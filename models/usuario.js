const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre requerido']
    },
    correo: {
        type: String,
        required: [true, 'Correo requerido'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password requerido']
    },
    img: {
        type: String
    },
    rol: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        typeof: Boolean,
        default: false
    }
});

UsuarioSchema.methods.toJSON = function () {
    const { __v, password, ...usuario } = this.toObject();
    return usuario;
}


module.exports = model('Usuario', UsuarioSchema);