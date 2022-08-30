const { MongoClient } = require('mongodb');

// get environment variables for database uri and database name
let uri = process.env.MONGODB_URI;
let dbName = process.env.MONGODB_DB;

// create cache variables, we can cache our connection
let cachedClient = null;
let cachedDb = null;

// database connection function
export async function connectToDatabase() {
  // Create a new MongoClient
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  {
    // check for database connection string and db name
    if (!uri || !dbName) {
      throw new Error('No URI available for MongoDB connection');
    }

    // if have cached use it
    if (cachedClient && cachedDb) {
      return { cachedClient, cachedDb };
    }
  }

  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    const db = await client.db(dbName);
    console.log('Connected successfully to server');

    cachedClient = client;
    cachedDb = db;

    return { client, db };
  } catch (err) {
    throw new Error(err?.message ?? err.toString());
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
