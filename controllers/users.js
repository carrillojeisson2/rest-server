const { response, request } = require('express');

const userGet = (req = request, res = response) => {

    const { q, nombre = "no name", apikey } = req.query;
    res.json({
        msg: 'api get - controller',
        q,
        nombre,
        apikey
    });
}

const userPost = (req, res = response) => {
    // const body = req.body;
    const { nombre, edad } = req.body;
    res.json({
        msg: 'api post - controller...',
        nombre,
        edad
    });
}


const userPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'api put - controller',
        id
    });
}

const userDelete = (req, res = response) => {
    res.json({
        msg: 'api delete - controller'
    });
}
module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}