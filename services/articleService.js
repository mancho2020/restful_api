const db = require('../models');

const getAllArticles = async () =>{
    try{
        let Articles = await db.Article.findAll({
            include: {
                model: db.User,
                required: true,
                as: "User",
                attributes: ["id", "name", "email"],
            },
        });
        return Articles;
    }catch(error){
        return error.message || "Failed to get Articles";
    }   
}

const getArticle = async (id) =>{
    try{
        let Article = await db.Article.findByPk(id);
        return Article;
    }catch(error){
        return error.message || "Failed to get Article";
    }
}

const createArticle = async (title,content,UserId) =>{
    try{
        let newArticle = await db.Article.create({
            title,
            content,
            UserId
        });
        if(newArticle){
            const categories = [4,2,3];
            await newArticle.setCategories(categories); 
        }
        return newArticle;
    }catch(error){
        return error.message || "Article cloud not be created";
    }
}

const updateArticle = async (id, title, content, UserId) =>{
    try{
        let updateArticle = await db.Article.update({
            title,
            content,
            UserId
        },{
            where: {
                id,
            }
        });
        return updateArticle;
    }catch(error){
        return error.message || "Article cloud not be updated";
    }
}

const deleteArticle = async (id) =>{
    try{
        let deleteArticle = await db.Article.destroy({
            where: {
                id,    
            }
            });
        return deleteArticle;
    }catch(error){
        return error.message || "Article cloud not be deleted";
    }
}

module.exports = {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle
};