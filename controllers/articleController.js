const { all } = require('../api/V1/routees/user.routes');
const articleService = require('../services/articleService');

const getAllArticles = async (req,res) =>  {
    const AllArticles = await articleService.getAllArticles();

    if(AllArticles)
        res.status(200).send({status: 'OK', data: AllArticles})
    else
        res.status(400).send({status: 'FAILED', data: null})
}

const getArticle = async (req,res) =>  {
    let id = req.params.articleId;
    const Article = await articleService.getArticle(id);
    if(Article)
        res.status(200).send({status: 'OK', data: Article})
    else
        res.status(400).send({status: 'FAILED', data: null})
}

const createArticle = async (req,res) =>  {
    const {body} = req;
    const createArticle = await articleService.createArticle(body.title, body.content, body.UserId);
    if(createArticle)
        res.status(200).send({status: 'OK', data: createArticle})
    else
        res.status(400).send({status: 'FAILED', data: null})
}

const updateArticle = async (req,res) =>  {
    let id = req.params.articleId;
    let {title,content,UserId} = req.body;
    const updateArticle = await articleService.updateArticle(id,title,content, UserId);
    if(updateArticle)
        res.status(200).send({status: 'OK', data: updateArticle})
    else
        res.status(400).send({status: 'FAILED', data: null})
}

const deleteArticle = async (req,res) =>  {
    let id = req.params.articleId;
    const deleteArticle = await articleService.deleteArticle(id);
    if(deleteArticle)
        res.status(200).send({status: 'OK', data: deleteArticle})
    else
        res.status(400).send({status: 'FAILED', data: null})
}

module.exports = {
    getAllArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle
};