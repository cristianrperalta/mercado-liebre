// requerimos express
const express = require('express')
// instanciamos express
const app = express()
// modulo nativo de node para trabajar con rutas de archivos
const path = require('path')

// resuelve ruta home
app.get('/', function(req, res){
    let rutaFile = path.resolve('./vistas/index.html')
    res.sendFile(rutaFile)
})

// resuelve ruta Register
app.get('/register', function(req, res){
    let rutaFile = path.resolve('./vistas/register.html')
    res.sendFile(rutaFile)
})

// resuelve ruta LogIn
app.get('/login', function(req, res){
    let rutaFile = path.resolve('./vistas/login.html')
    res.sendFile(rutaFile)
})

// resuelve ruta para archivos. Ejemplo: estilos, imagenes, etc.
app.get('*', function(req, res){

    if (req.url.includes('.')){
        let file = path.resolve('public' + req.url)
        return res.sendFile(file)
    }
    res.sendFile('Not found')
})

app.listen(3000)
