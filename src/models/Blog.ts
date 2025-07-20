import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: String,
  slug: String,
  meta: String,
  media: [String],
  content: String,
});

export const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);
