const { Router } = require("express");
const { check } = require("express-validator");
const { userGet, userPost, userPut, userDelete } = require("../controllers/users");
const { validarCampos } = require("../middlewares/validar-campos");
const { esRolValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators')

const router = Router();

router.get('/', userGet);

router.put('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom(esRolValido),
    validarCampos
], userPut);

router.post('/', [
    check('nombre', 'El nombre  es requerido').not().isEmpty(),
    check('password', 'El password debe ser de más de 6 letras').isLength({ min: 6 }),
    check('correo', 'El correo no es valido').isEmail(),
    check('correo').custom(emailExiste),
    // check('rol', 'El rol no es valido').isIn(['USER_ROLE', 'ADMIN_ROLE']),
    check('rol').custom(esRolValido),
    validarCampos
], userPost);

router.delete('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
], userDelete);



module.exports = router;