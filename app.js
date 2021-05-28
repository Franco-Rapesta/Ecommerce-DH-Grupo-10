const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));


app.listen(5500, () => {
    console.log("Servidor corriendo");
});     


app.get('/', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/index.html'));
    res.sendFile(path.resolve(__dirname, './views/login.html')); 
    res.sendFile(path.resolve(__dirname, './views/registro.html')); 
    res.sendFile(path.resolve(__dirname, './views/detalle-producto.html')); 
    res.sendFile(path.resolve(__dirname, './views/carrito.html')); 
});




