const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://krishnaupadhyay207:Ram%40161003@krishnacluster.u1jly.mongodb.net/";
const client = new MongoClient(url);

const dbname = "HelloWorld";

async function main() {
  await client.connect();
  console.log("Connected successfully to the server");
  const db = client.db(dbname);
  const collection = db.collection("user");

  return ".done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
