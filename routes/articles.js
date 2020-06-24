const express = require('express');
const {
  getArticle,
  getArticles,
  createtArticles,
  updateArticle,
  deleteArticle
} = require('../controllers/articles');

const router = express.Router();

router.route('/').get(getArticles).post(createtArticles);

router.route('/:id').get(getArticle).put(updateArticle).delete(deleteArticle);

module.exports = router;
