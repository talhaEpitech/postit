module.exports = {
  HOST: "mycadb.cxqkz2raacif.us-east-1.rds.amazonaws.com",
  USER: "admin",
  PASSWORD: "Q8VKXMLfTz24MCzBrcua",
  DB: "postit",
  dialect: "mysql",
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
