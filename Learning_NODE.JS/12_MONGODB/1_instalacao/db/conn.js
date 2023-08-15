const { MongoClient } = require('mongodb');

const uri = "mongodb://port:27017/learningMongoNode";

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Conectando ao MongoDB!");
    } catch(err) {
        console.log(err);
    }
}

run();

module.exports = client;