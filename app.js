const express = require('express');
const path = require('path');
const app = express();

app.get('/public', (req,res) =>{
    res.sendFile(path.resolve(__dirname, '/views/index.html'));
    res.sendFile(path.resolve(__dirname, '/views/login.html')); 
    res.sendFile(path.resolve(__dirname, '/views/registro.html')); 
    res.sendFile(path.resolve(__dirname, '/views/detalle-producto.html')); 
    res.sendFile(path.resolve(__dirname, '/views/carrito.html')); 
});


app.use(express.static(path.resolve(__dirname, '/public')));

app.listen(4000, () => {
    console.log("Servidor corriendo");
});
