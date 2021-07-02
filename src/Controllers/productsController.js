const productsController = {

    carrito: function (req, res){
        res.render("./products/carrito")
    },

    detalle: function (req, res){
        res.render("./products/detalle-producto")
    },
    addProduct: function (req, res){
        res.render("./products/addProduct")
    },
    editProduct: function (req, res){
        res.render("./products/editProduct")
    }
    
}

module.exports = productsController;