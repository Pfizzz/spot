const router = require('express').Router();
const { Post, User } = require('../../models');

// get all users
router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
        attributes: [ 'post_url', 'ColumnOne','ColumnTwo','ColumnThree','ColumnFour','ColumnFive','ColumnSix','ColumnSeven', 'created_at'],
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });
  module.exports = router;