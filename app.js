const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, '/public')));

app.get('/public', (req,res) =>{
    res.sendFile(path.resolve(__dirname, '/views/index.html'));
    res.sendFile(path.resolve(__dirname, '/views/login.html')); 
    res.sendFile(path.resolve(__dirname, '/views/registro.html')); 
    res.sendFile(path.resolve(__dirname, '/views/detalle-producto.html')); 
    res.sendFile(path.resolve(__dirname, '/views/carrito.html')); 
});


app.listen(4000, () => {
    console.log("Servidor corriendo");
});
