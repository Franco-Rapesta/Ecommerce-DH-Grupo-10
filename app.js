const express = require('express');
const path = require('path');
const app = express();


const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3002, () => {
    console.log("Servidor 3002 corriendo pefecto")   
});

app.get("/", function(req,res){
    res.sendFile(__dirname + "/views/index.html")

});

app.get("/login", function(req,res){
    res.sendFile(__dirname + "/views/login.html")

});


app.get("/registro", function(req,res){
    res.sendFile(__dirname + "/views/registro.html")

});

app.get("/detalle-producto", function(req,res){
    res.sendFile(__dirname + "/views/detalle-producto.html")

});
app.get("/carrito", function(req,res){
    res.sendFile(__dirname + "/views/carrito.html")

});
    


