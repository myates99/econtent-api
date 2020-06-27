const express = require('express');
const {
  getArticle,
  getArticles,
  createtArticles,
  updateArticle,
  deleteArticle
} = require('../controllers/articles');

const Article = require('../models/Article');
const advancedResults = require('../middleware/advancedResults');

const router = express.Router();

router
  .route('/')
  .get(advancedResults(Article), getArticles)
  .post(createtArticles);

router.route('/:id').get(getArticle).put(updateArticle).delete(deleteArticle);

module.exports = router;
