require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express(); // create express app

app.use(cors()); // for cross-origin
app.use(express.json()); // for parsing application/json

// ✅ Only listen if not running in Vercel (i.e. not a serverless environment)
if (require.main === module) {
  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

app.get("/", (req, res) => {
  res.send("Hello world from  server ..");
});

module.exports = app; // ✅ Export the app, do not listen here

const uri = `mongodb+srv://${process.env.DB_USER_GROUP}:${process.env.DB_PASS_GROUP}@cluster0.vqav3xl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    //await client.connect();

    const groupsCollection = client.db("hobbyHub").collection("groups");

    app.get("/groups", async (req, res) => {
      const result = await groupsCollection.find().toArray();
      res.send(result);
    });

    app.get("/groups/:id", async (req, res) => {
      const id = req.params.id;

      if (!ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid Group ID format" });
      }

      const query = { _id: new ObjectId(id) };
      const result = await groupsCollection.findOne(query);
      res.send(result);
    });

    app.post("/groups", async (req, res) => {
      const newGroup = req.body;
      const result = await groupsCollection.insertOne(newGroup);
      res.send(result);
    });

    app.put("/groups/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upset: true };
      const updatedGroup = req.body;
      const updatedDoc = {
        $set: updatedGroup,
      };
      const result = await groupsCollection.updateOne(
        filter,
        updatedDoc,
        options
      );
      res.send(result);
    });

    app.delete("/groups/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await groupsCollection.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);
