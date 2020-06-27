const Article = require('../models/Article');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc    Get all articles
// @route   GET /api/v1/articles
// @access  Public
exports.getArticles = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc    Get single article
// @route   GET /api/v1/articles/:id
// @access  Public
exports.getArticle = asyncHandler(async (req, res, next) => {
  const article = await Article.findById(req.params.id);

  if (!article) {
    return next(
      new ErrorResponse(`Article not found with id of ${err.value}`, 404)
    );
  }

  res.status(200).json({ success: true, data: article });
});

// @desc    Create article
// @route   POST /api/v1/articles
// @access  Private
exports.createtArticles = asyncHandler(async (req, res, next) => {
  const article = await Article.create(req.body);

  res.status(201).json({ success: true, data: article });
});

// @desc    Update article
// @route   PUT /api/v1/articles/:id
// @access  Private
exports.updateArticle = asyncHandler(async (req, res, next) => {
  const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  if (!article) {
    return next(
      new ErrorResponse(`Article not found with id of ${err.value}`, 404)
    );
  }

  res.status(200).json({ success: true, data: article });
});

// @desc    Delete article
// @route   DELETE /api/v1/articles/:id
// @access  Private
exports.deleteArticle = asyncHandler(async (req, res, next) => {
  const article = await Article.findByIdAndDelete(req.params.id);

  if (!article) {
    return next(
      new ErrorResponse(`Article not found with id of ${err.value}`, 404)
    );
  }

  res.status(200).json({ success: true });
});
