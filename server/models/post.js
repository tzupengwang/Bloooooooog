const mongoose = require('mongoose');

const options = {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
};

const PostSchema = new mongoose.Schema({
  postId: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: String, required: true },       // 2016-12-22
  author: { type: String, required: true },
  category: { type: String, required: true },
  tags: [{ type: String, required: true }],
  content: { type: String, required: true },
}, options);

if (!PostSchema.options.toObject) PostSchema.options.toObject = {};
PostSchema.options.toObject.transform = function(doc, ret) {
  // remove the _id and __v of every document before returning the result
  /* eslint no-underscore-dangle: "off" */
  const nret = ret;
  delete nret._id;
  delete nret.__v;
  return nret;
};

PostSchema.statics.createNewPost = function(post) {
  // generate postId, example: 2016-12-22-learning-reactjs
  post.postId = `${post.date}-${post.title.toLowerCase().split(' ').join('-')}`;
  (new this(post)).save();
}

PostSchema.statics.queryRecentPosts = function(limit) {
  limit = limit || 5;
  return this.find({}).sort({ created_at: 'descending' }).limit(limit).lean().exec();
}

exports.Post = mongoose.model('Post', PostSchema);
