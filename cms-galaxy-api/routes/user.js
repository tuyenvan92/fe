const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

// middlewares
const auth = require('../middlewares/auth');

// model
const User = require('../model/User');

// @route   GET api/user
// @desc    get user list
// @access  Public
router.get('/', async (req, res) => {
  try {
    const users = await User.find().sort({ data: -1 });
    const result = {
      data: users,
      isSuccess: true
    };
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      msg: 'Server Error',
      isSuccess: false
    })
  }
});

// @route  POST api/user/register
// @desc   Register user
// @access Public
router.post('/register', async(req, res) => {
  const firstName = req.body.firstName || '';
  const lastName = req.body.lastName || '';
  const email = req.body.email || '';
  const password = req.body.password || '';
  const avatar = req.body.avatar || '';
  const role = req.body.role || '';

  // check email exist
  const isEmailExist = await User.findOne({ email });
  if(isEmailExist) {
    return res.status(400).json({
      msg: 'Email already exsits',
      isSuccess: false
    })
  };

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  // create a new user
  const user = new User({
    firstName,
    lastName,
    email,
    password: hashPassword,
    avatar,
    role
  })
  try {
    await user.save();
    res.status(200).json({
      msg: 'Register Successfully!',
      isSuccess: true
    })
  } catch(err) {  
    res.status(500).json({
      msg: err,
      isSuccess: false
    })
  }
})

// @route   POST api/user/login
// @desc    Login user
// @access  Public
router.post('/login', [
  check('email', `Email is't correct format`).isEmail(),
  check('password', `Password is required`).not().isEmpty(),
],async (req, res) => {
  // check errors
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    })
  }

  const email = req.body.email || '';
  const password = req.body.password || '';
  // check email exist
  const user = await User.findOne({ email });
  if(!user) {
    return res.status(400).json({
      msg: 'Email or password is wrong',
      isSuccess: false
    })
  };

  // valid password
  const validPassword = await bcrypt.compare(password, user.password);
  if(!validPassword) {
    return res.status(400).json({
      msg: 'Email or password is wrong',
      isSuccess: false
    })
  }

  // create access token
  const payload = {
    user: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.emal,
      avatar: user.avatar,
      role: user.role
    }
  }
  jwt.sign(
    payload,
    process.env.TOKEN_SECRET,
    { expiresIn: 36000 },
    (err, token) => {
      if(err) throw err;
      res.header('x-auth-token', token).json({
        accessToken: token,
        msg: 'Login Successfully!',
        isSuccess: true
      })
    }
  )
})

// @route  PUT api/user  // xx/api/user/1234
// @desc   Update user
// @access Public
router.put('/:id', async (req, res) => {
  // get params
  const id = req.params.id;
  const firstName = req.body.firstName || '';
  const lastName = req.body.lastName || '';
  const password = req.body.password || '';
  const avatar = req.body.avatar || '';
  const role = req.body.role || '';

  // update user
  const user = {};
  if(firstName) user.firstName = firstName;
  if(lastName) user.lastName = lastName;
  if(password) user.password = password;
  if(avatar) user.avatar = avatar;
  if(role) user.role = role;

  // save data
  try {
    const data = await User.findOneAndUpdate(
      { _id: id },
      { $set: user},
      { new: true }
    );
    if(!data) {
      return res.status(400).json({
        msg: 'User not found',
        isSuccess: true
      })
    }
    return res.status(200).json({
      msg: 'Update user successfully!',
      isSuccess: true
    })
  } catch (err) {
    res.status(500).json({
      msg: `Can't update user`,
      isSuccess: false
    })
  }
})

// @route  DELETE api/user/:id  // xx/api/user/1234
// @desc   Delete user
// @access Public
router.delete('/:id', async (req, res) => {
  // get params
  const id = req.params.id;

  // delete user
  try {
    const data = await User.findOneAndRemove({ _id: id });
    if(!data) {
      return res.status(400).json({
        msg: 'user not found',
        isSuccess: false
      })
    }
    return res.status(200).json({
      msg: 'Delete user successfully!',
      isSuccess: true
    })
  } catch(err) {
    res.status(500).json({
      msg: `Can't delete user`,
      isSuccess: false
    })
  }
})

// @route  post api/user/auth
// @desc   Authenticate user & token
// @access Private
router.post('/auth', [auth], async (req, res) => {
  const token = req.header('x-auth-token');

  if(!token) {
    return res.status(401).json({
      msg: 'Invalid token',
      isSuccess: false
    })
  }

  // verify token
  try {
    const user = jwt.verify(token, process.env.TOKEN_SECRET);
    res.status(200).json({
      data: user,
      isSuccess: true
    })
  } catch(err) {
    res.status(500).json({
      msg: `Invalid token`,
      isSuccess: false
    })
  }
})


module.exports = router;