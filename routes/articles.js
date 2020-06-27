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

const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(advancedResults(Article), getArticles)
  .post(protect, authorize('publisher', 'admin'), createtArticles);

router
  .route('/:id')
  .get(getArticle)
  .put(protect, authorize('publisher', 'admin'), updateArticle)
  .delete(protect, authorize('publisher', 'admin'), deleteArticle);

module.exports = router;
