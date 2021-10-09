const router = require('express').Router();
const { Pet, User} = require('../models');
const withAuth = require('../utils/auth.js');


 //get all Pets
 router.get('/', (req, res) => {
  console.log('dashboard======================');
  Pet.findAll({
      attributes: [ 'post_url', 'ColumnOne','ColumnTwo','ColumnThree','ColumnFour','ColumnFive','ColumnSix','ColumnSeven', 'created_at'],
})
.then(dbPetData => {
  if (!dbPetData) {
    res.status(404).json({ message: 'No Pet found with this id' });
    return;
  }
  res.render('dashboard');
})
.catch(err => {
  console.log(err);
  res.status(500).json(err);
})
});


router.get('/:id', withAuth, (req, res) =>{

  Pet.findOne({
    where:{
      id: req.params.id,
    }, 
    attributes: [ 'post_url', 'ColumnOne','ColumnTwo','ColumnThree','ColumnFour','ColumnFive','ColumnSix','ColumnSeven', 'created_at'],

      include: [
  
        {
          model: User,
          attributes: ['username']
        }
      ]
    })
      .then(dbPetData => {
        if (dbPetData === false) {
          res.status(404).json({ message: 'No Pet found with this id' });
        return;
      }
          const post = dbPetData.get({plain: true });
          
          res.render('dashboard', {post,loggedIn: true});
        })
      .catch(err => {
      res.status(500).json(err);
      });
  });


  //create new Pet
router.post('/', withAuth, (req, res) => {
  if (req.session) {
    Pet.create({
    
      ColumnOne: req.body.ColumnOne,
      ColumnTwo: req.body.ColumnTwo,
      ColumnThree: req.body.ColumnThree,
      ColumnFour: req.body.ColumnFour,
      ColumnFive: req.body.ColumnFive,
      ColumnSix: req.body.ColumnSix,
      ColumnSeven: req.body.ColumnSeven,
    })
      .then(dbPetData => {
        if (!dbPetData) {
          res.status(404).json({ message: 'No Pet found with this id' });
          return;
        }
        res.json(dbPetData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  }
});


module.exports = router;