const router = require('express').Router()
const { MongoClient } = require('mongodb');


async function connectToMongoDB() {
    try {
      const uri = "mongodb://root:root@mongo-user:27017/userdb"
      const client = new MongoClient(uri);
      await client.connect();
      return client;
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
}

router.get('', async (req, res) => {
  //example connection
    try {
        const client = await connectToMongoDB();
        const collection = client.db().collection("users");
        const cursor = await collection.find()
        const result = await cursor.toArray();

        await client.close();

        return res.json(result);
    } catch (err) {
        console.error('Error connecting to MongoDB or inserting data:', err);
    }

  res.send("TODO User GET")
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
