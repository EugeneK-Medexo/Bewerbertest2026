const router = require('express').Router()
const User =require("../entity/UserModel");

router.get('/', async (req, res) => {
  try {
    const users = await User.find().limit(50).lean();
    res.status(200).json({items: users});
  }catch(err) {
    console.error("GET /users failed:",err);
  }
})

router.get('/:id', async (req, res) => {
  res.send("TODO User GET ID")

})

router.post('', async (req, res) => {
  res.send("TODO User POST")

})

router.patch('/:id', async (req, res) => {
  res.send("TODO User PATCH id")

})

router.patch('/:id/block', async (req, res) => {
  res.send("TODO User Block")

})

router.patch('/:id/unblock', async (req, res) => {
  res.send("TODO User unblock")
})

module.exports = router
