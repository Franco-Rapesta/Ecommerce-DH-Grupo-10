const productsController = {

    carrito: function (req, res){
        res.render("./products/carrito")
    },

    detalle: function (req, res){
        res.render("./products/detalle-producto")
    },

    
}

module.exports = productsController;