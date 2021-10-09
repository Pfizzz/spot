const router = require('express').Router();
const { Pet, User } = require('../../models');
const withAuth = require('../../utils/auth.js');


//get all pets 

router.get('/', (req, res) => {
    console.log('======================');
    Pet.findAll({
        attributes: [ 'post_url', 'ColumnOne','ColumnTwo','ColumnThree','ColumnFour','ColumnFive','ColumnSix','ColumnSeven', 'created_at'],
    })
    .then(dbPetData => res.json(dbPetData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

  router.get('/:id', (req, res) => {
    console.log('======================');
    Pet.findOne({
        attributes: [ 'post_url', 'ColumnOne','ColumnTwo','ColumnThree','ColumnFour','ColumnFive','ColumnSix','ColumnSeven', 'created_at'],
    })
    .then(dbPetData => res.json(dbPetData))
    .catch(err => {
      console.log(err);
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

//update product name
router.put('/:id', withAuth, (req, res) => {
  Product.update(
    {
      ColumnFive: req.body.ColumnFive
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPetData => {
      if (!dbPetData) {
        res.status(404).json({ message: 'No pet found with this id' });
        return;
      }
      res.json(dbPetData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//route for delete product
router.delete('/:id', withAuth,(req, res) => {
  console.log('id', req.params.id);
  Pet.destroy({
    where: {
      id: req.params.id
    }
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

});
  module.exports = router;
