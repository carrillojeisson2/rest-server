const { Router } = require("express");
const { userGet, userPost, userPut, userDelete } = require("../controllers/users");

const router = Router();

router.get('/', userGet);

router.put('/:id', userPut);

router.post('/', userPost);

router.delete('/', userDelete);



module.exports = router;