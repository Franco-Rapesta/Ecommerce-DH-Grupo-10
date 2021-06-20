const partialsRouters = require("./src/Routes/partialsRouters");
const productsRouters = require("./src/Routes/productsRouters");
const usersRouters = require("./src/Routes/usersRouters");

const { Router } = require('express');
const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');


const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));



app.use("/", partialsRouters);
app.use("/products", productsRouters);
app.use("/users", usersRouters);
//app.use("/users", usersController);

app.listen(3002, () => {
    console.log("Servidor 3002 corriendo pefecto")   
});





//  app.get("/", function(req,res){
//     res.sendFile(__dirname + "/views/index.html")

// });

// app.get("/login", function(req,res){
//     res.sendFile(__dirname + "/views/login.html")

// });


// app.get("/registro", function(req,res){
//     res.sendFile(__dirname + "/views/registro.html")

// });

// app.get("/detalle-producto", function(req,res){
//     res.sendFile(__dirname + "/views/detalle-producto.html")

// });
// app.get("/carrito", function(req,res){
//     res.sendFile(__dirname + "/views/carrito.html")

//});
    


