const express = require('express');

let { verificaToken } = require('../middlewares/autenticacion');

let app = express();

let Categoria = require('../models/categoria');

app.get('/categoria', (req, res) => {

});

app.get('/categoria/:id', (req, res) => {

});

app.post('/categoria', verificaToken, (req, res) => {
    let body = req.body;

    let categoria = new Categoria({
        descripcion: body.descripcion,
        usuario: req.usuario._id
    });

    categoria.save((err, categoriaDB) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }

        if (!categoriaDB) {
            return res.status(400).json({
                ok: false,
                err
            });
        }

        res.json({
            ok: trua,
            categoria: categoriaDB
        });
    });
});

app.put('/categoria/:id', (req, res) => {

});

app.delete('/categoria/:id', (req, res) => {

});

module.exports = app;