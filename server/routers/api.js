const express = require('express');
const Post = require('../models/post').Post;

const router = new express.Router();

router.get('/posts/recent', (req, res) => {
  Post.queryRecentPosts().then(posts => {
    res.json(posts);
  });
});

router.get('/post/:id', (req, res) => {
  Post.querySinglePost(req.params.id).then(post => {
    res.json(post);
  });
});

exports = module.exports = router;
