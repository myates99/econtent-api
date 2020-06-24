// @desc    Get all articles
// @route   GET /api/v1/articles
// @access  Public
exports.getArticles = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all articles' });
};

// @desc    Get single article
// @route   GET /api/v1/articles/:id
// @access  Public
exports.getArticle = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Get article ${req.params.id}` });
};

// @desc    Create article
// @route   POST /api/v1/articles
// @access  Private
exports.createtArticles = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Create new article' });
};

// @desc    Update article
// @route   PUT /api/v1/articles/:id
// @access  Private
exports.updateArticle = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update article ${req.params.id}` });
};

// @desc    Delete article
// @route   DELETE /api/v1/articles/:id
// @access  Private
exports.deleteArticle = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete article ${req.params.id}` });
};
