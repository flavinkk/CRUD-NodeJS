const { response } = require('express');
const express = require('express');

const server = express()

server.use(express.json())

const artistas = [
    {
        "artista": "Kanye West",
        "albums": {
            "College Dropout": {
                "ano": 2004
            },
            "Late Registration": {
                "ano": 2006
            },
            "Graduation": {
                "ano": 2007
            },
            "808's and Heartbreak": {
                "ano": 2008
            },
            "My Beautiful and Dark Twisted Fantasy": {
                "ano": 2010
            },
            "Yeezus": {
                "ano": 2013
            },
            "The Life of Pablo": {
                "ano": 2016
            },
            "JESUS IS KING": {
                "ano": 2018
            },
            "ye": {
                "ano": 2018
            },
            "DONDA": {
                "ano": 2021
            },
            "DONDA 2": {
                "ano": 2022
            },
        },
    },
    {
        "artista": "Pop Smoke",
        "albums": {
            "Meet the Woo": {
                "ano": 2018
            },
            "Meet the Woo 2": {
                "ano": 2019
            },
            "Shoot for the Stars, Aim for the Moon": {
                "ano": 2020
            },
            "Faith": {
                "ano": 2021
            },
        }
    },
    {
        "artista": "J Cole",
        "albums": {
            "Friday Night Lights": {
                "ano": 2010
            },
            "Cole World: The Sideline Story": {
                "ano": 2011
            },
            "Truly Yours 2": {
                "ano": 2013
            },
            "Born Sinner": {
                "ano": 2013
            },
            "2014 Forest Hills Drive": {
                "ano": 2014
            },
            "4 Your Eyez on Me": {
                "ano": 2016
            },
            "KOD": {
                "ano": 2018
            },
            "The Off-Season": {
                "ano": 2021
            },
        }
    }

]

// Buscar Artista!
server.get('/artistas/:index', (req, res) => {
    const { index } = req.params;
    return res.json(artistas[index]);
})

// Buscar Artistas!
server.get('/artistas', (req, res) => {
    return res.json(artistas);
})

// Buscar Album;
server.get('/artistas/:index/albums', (req, res) => {
    const { index } = req.params;
    return res.json(artistas[index].albums)
})

// Adicionar Artista!
server.post('/artistas', (req, res) => {
    const { name } = req.body;
    artistas.push(name);
    return res.json(artistas);
})

// Atualizar nome do Artista!
server.put('/artistas/:index', (req, res) => {
    
    const { index } = req.params;
    const { name } = req.body;

    artistas[index] = name;
    return res.json(artistas)
})

// Deletar artista!
server.delete('/artistas/:index', (req, res) => {
    const { index } = req.params;
    artistas.split(index, 1)
    return res.json ({message: 'O Artista fora removido da lista'})
})

server.listen(3000)