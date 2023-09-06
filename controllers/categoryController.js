const { all } = require('../api/V1/routees/categories.routes');
const categoryService = require('../services/categoryService')

const getAllCategories = async(req,res)=>{
    try{
    const allCategories = await categoryService.getAllCategories();
        res.status(200).send({status:'OK',data: allCategories})
    }catch(error){
        res.status(error.status || 500).send({ status: 'FAILED', data: {error: error.message}});
    }
}

const getCategory =  async(req,res)=>{
    try{
    let id = req.params.id;
        const category = await categoryService.getCategory(id);
        res.status(200).send({status: 'OK', data: category});
    }catch(error){
        res.status(error.status || 500).send({ status: 'FAILED', data: {error: error.message}});
    }
}   

const createCategories =  async(req,res)=>{
    try{
    const {body} = req;
    const createdCategory = await categoryService.createCategories(body.name);
        res.status(201).send({status: 'OK', data:createdCategory})
    }catch(error){
        res.status(error.status || 500).send({ status: 'FAILED', data: {error: error.message}});
    }
}

const updateCategories =  async(req,res)=>{
    try{
    let id = req.params.id
    let {name} = req.body;
    const updatedCategories = await categoryService.updateCategories(id,name);
        res.status(200).send({status: 'OK', data:updatedCategories})
    }catch(error){
        res.status(error.status || 500).send({ status: 'FAILED', data: {error: error.message}});
    }
}

const deleteCategories =  async(req,res)=>{
    try{
    let id = req.params.id
    const deletedCategories = await categoryService.deleteCategories(id);
        res.status(200).send({status: 'OK', data:deletedCategories})
    }catch(error){
        res.status(error.status || 500).send({ status: 'FAILED', data: {error: error.message}});
    }
}

module.exports = {
    getAllCategories,
    getCategory,
    createCategories,
    updateCategories,
    deleteCategories,
};