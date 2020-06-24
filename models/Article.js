const mongoose = require('mongoose');
const slugify = require('slugify');

const ArticleSchema = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: false
    },
    name: {
      type: String,
      required: [true, 'Please add a name'],
      unique: true,
      trim: true
    },
    slug: String,
    summary: {
      type: String,
      required: [true, 'Please add a summary'],
      maxlength: [500, 'Summary can not be more than 500 characters']
    },
    photo: {
      type: String,
      default: 'no-photo.jpg'
    },
    instagramLink: String,
    paragraphs: [{ subheading: { type: String }, body: { type: [String] } }],
    refrences: [{ name: { type: String }, locatedAt: { type: String } }],
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Created article slug from the name
ArticleSchema.pre('save', function () {
  this.slug = slugify(this.name, { lower: true });
  next();
});

module.exports = mongoose.model('Article', ArticleSchema);
