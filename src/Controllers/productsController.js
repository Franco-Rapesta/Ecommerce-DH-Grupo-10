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
        let idProduct = req.params.idProduct
        //let productToEdit = product[idProduct];
        //res.rendir("productEdit", {productToEdit: productToEdit});
        //  res.send(idProduct);
        res.render("./products/editProduct")
    }
    
}

module.exports = productsController;