const productModel = require('../models/Product');

exports.createProduct = async (req, res, next) => {
  try {
    const createProduct = await productModel.create(req.body);
    //console.log(`req.body `, req.body);
    //console.log(`createProduct ::`, createProduct);
    res.status(201).json(createProduct);
  } catch (error) {
    next(error);
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    const allProducts = await productModel.find({});
    res.status(200).json(allProducts);
  } catch (error) {
    next(error);
  }
};

exports.getProductById = async (req, res, next) => {
  try {
    const product = await productModel.findById(req.params.productId);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json(null);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
