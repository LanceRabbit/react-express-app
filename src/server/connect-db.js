import { MongoClient } from 'mongodb';
const url = `mongodb://localhost:27017/todolist`
let db = null;

export async function connectDB() {
  if(db) return db;
  let client = await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  db = client.db();
  console.info('connect db', db);
  return db;
}