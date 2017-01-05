const express = require('express');
const Post = require('../models/post').Post;

const router = new express.Router();

router.get('/posts/recent', (req, res) => {
  Post.queryRecentPosts().then(posts => {
    res.json(posts);
  });
});

exports = module.exports = router;
