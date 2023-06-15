const express = require("express");
const router = express.Router();
const {postProduct,getAllCamarasyAccesorios,getAllCelulares,getAllComputacion,getAllConsolasyVideojuegos,getAllElectronicaAudioVideo,getAllTV,getAllProducts} = require("../Controllers/controllersTecnologias")
const {disabledProduct,getDisabledProducts} = require("../Controllers/disableProduct")
const {ofertProduct,getOfertProducts} = require ("../Controllers/ofertas")
const detailProduct = require("../Controllers/detail")


//----------getAllProducts---------------------------------------------------------------------------------------------------------------//
router.get("/allProducts",getAllProducts)


//----------PostProducts---------------------------------------------------------------------------------------------------------------//
router.post("/posteo",postProduct)

//----------Disabled---------------------------------------------------------------------------------------------------------------//
router.put("/disabled",disabledProduct)
router.get("/disabled",getDisabledProducts)

//----------getSubCategories---------------------------------------------------------------------------------------------------------------//
router.get("/TV",getAllTV)
router.get("/Computacion",getAllComputacion)
router.get("/ElectronicaAudioVideo",getAllElectronicaAudioVideo)
router.get("/ConsolasyVideojuegos",getAllConsolasyVideojuegos)
router.get("/Celulares",getAllCelulares)
router.get("/CamarasyAccesorios",getAllCamarasyAccesorios)
//----------Ofertas---------------------------------------------------------------------------------------------------------------//
router.get("/Ofertas",getOfertProducts)
router.put("/Ofertas",ofertProduct)
//-----------Detail-------------------------------------------------------------------------------------------------------------//
router.get("/Detail/:id",detailProduct)


module.exports=router