const db = require('../models');

const getAllCategories = async () =>{
    try{
        let Categories = await db.Category.findAll();
        return Categories;
    }catch(error){
        return error.message || "Failed to get Articles";
    }   
}

const getCategory = async (id) =>{
    try{
        let Category = await db.Category.findByPk(id);
        return Category;
    }catch(error){
        return error.message || "Failed to get Article";
    }
}

const createCategories = async (name) =>{
    try{
        let newCategory = await db.Category.create({
            name
        });
        return newCategory;
    }catch(error){
        return error.message || "Article cloud not be created";
    }
}

const updateCategories = async (id, name) =>{
    try{
        let updateCateogires = await db.Category.update({
            name
        },{
            where: {
                id,
            }
        });
        return updateCateogires;
    }catch(error){
        return error.message || "Article cloud not be updated";
    }
}

const deleteCategories = async (id) =>{
    try{
        let deleteCategories = await db.Category.destroy({
            where: {
                id,    
            }
            });
        return deleteCategories;
    }catch(error){
        return error.message || "Article cloud not be deleted";
    }
}

module.exports = {
    getAllCategories,
    getCategory,
    createCategories,
    updateCategories,
    deleteCategories
};