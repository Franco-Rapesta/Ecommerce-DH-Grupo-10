const fs = require('fs');
const { reset } = require('nodemon');
const path = require('path');

const productsFilePath = path.join(__dirname, '../database/productosDatos.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productsController = {

    
    index: (req, res) => {
		res.render('products',{productos: products})
	},
    
    
    
    
    carrito: function (req, res){
        res.render("./products/carrito")
    },

     /*  VER PRODUCTO DETALLE */

 	detalle: function (req, res) {
		let idProducto = req.params.id;
		for(let i=0;i<products.length;i++){
			if (products[i].id==idProducto){
				var productoEncontrado = products[i];
			}
		}
		res.render('detalle',{productoEnDetalle: productoEncontrado});
	},
    
    /* AÑADIR PRODUCTO - MUESTRA */   
    
    añadirProducto: function (req, res){
        res.render("./products/addProduct")
    },
    
    /* AÑADIR PRODUCTO - METODO */ 
    
    crear: function (req, res) {
		let nombreImagen=req.file.filename;
		let idNuevo = products[products.length-1].id + 1;
		let nuevoObjeto =  Object.assign({id: idNuevo},req.body,{image:nombreImagen});
		products.push(nuevoObjeto);
   	    fs.writeFileSync(productsFilePath, JSON.stringify(products,null, ' '));
		res.redirect('/');
	},
   
    /* EDICION DE PRODUCTO */
    
    editarProducto: function (req, res){
        let idProducto = req.params.id;	

		for(let i=0;i<products.length;i++){
			if (products[i].id==idProducto){
				var productoEncontrado = products[i];
			}
		}
        //const productoEnDetalle = products.find(element => element.id == req.params.id); // mejora mas simplificada

        
        res.render('editProduct',{productoEnDetalle: productoEncontrado});
        
    },

    /* METODO ACTUALIZACION DE PRODUCTO */
    actualizar: function (req,res) {

		let valoresNuevos = req.body;
		let idProducto = req.params.id;	


		for(let i=0;i<products.length;i++){
			if (products[i].id==idProducto){

				products[i].name = valoresNuevos.name;
				products[i].price = valoresNuevos.price;
				products[i].discount = valoresNuevos.discount;
				products[i].category = valoresNuevos.category;
				products[i].description = valoresNuevos.description;

				var productoEncontrado = products[i];

				break;
			}
		}

		fs.writeFileSync(productsFilePath, JSON.stringify(products,null, ' '));

		res.render('detalle',{productoEnDetalle: productoEncontrado})
		
	},
    /* ELIMINAR PRODUCTO */

    eliminar: function (req, res) {
        let idProducto = req.params.id;	
		for(let i=0;i<products.length;i++){
			if (products[i].id==idProducto){
				var nombreImagen=products[i].image;
				products.splice(i,1);
				break;
			}
		}
    }    

}

module.exports = productsController;