module.exports = app => {
  const posts = require("../controllers/post.controller");

  var router = require("express").Router();

  router.get("/", posts.findAll);
  router.get("/:id", posts.findOne);
  router.post("/", posts.add);
  router.put("/:id", posts.edit);
  router.delete("/:id", posts.delete);


  app.use('/api/notes', router);
};
