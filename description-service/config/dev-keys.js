module.exports = {
  mongoURI:
    "mongodb+srv://<user>:<password>@finz-0pho2.mongodb.net/Disciption?retryWrites=true&w=majority",

  monoCFG: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: true,
    replicaSet: "FINZ- shard - 0",
    authSource: "admin",
    retryWrites: true,
    dbName: "Products"
  }
};
