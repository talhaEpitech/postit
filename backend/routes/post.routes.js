module.exports = app => {
  const post = require("../controllers/post.controller");

  var router = require("express").Router();

  router.get("/", post.findAll);
  router.get("/:id", post.findOne);
  router.post("/", post.add);
  router.put("/:id", post.edit);
  router.delete("/:id", post.delete);


  app.use('/api/notes', router);
};
