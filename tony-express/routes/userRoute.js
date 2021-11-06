const router = require('express').Router();

const error500 = {
  msg: 'Server Error',
  isSuccess: false
}

// @route         GET api/user
// @description   GET User List
router.get('/', (_, res) => {
  const result = {
    data: [
      {
        id: 1,
        name: 'tony'
      },
      {
        id: 2,
        name: 'katie'
      }
    ],
    page: 1,
    limit: 10,
    total: 100,
    isSuccess: true
  };

  try {
    res.status(200).json(result)
  } catch(err) {
    res.status(500).json(error500)
  }
})

// @route         GET api/user/:id
// @description   GET single user
router.get('/:id', (req, res) => {
  console.log('single user: ', req.params.id)
  res.send('get single user')
})

module.exports = router;