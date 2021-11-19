const db = require("../models");
const Post = db.post;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Post.findAll({
    // limit: 20,
    where: condition
  }).then(data => {
    let toSend = {
      success: true,
      data: data
    }
    res.send(toSend);
  }).catch(err => {
    res.status(500).send({
      message:
      err.message || "Some error occurred while retrieving movies."
    });
  });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Post.findByPk(id).then(data => {
    if (data) {
      let toSend = {
        success: true,
        data: data
      }
      res.send(toSend);
    } else {
      res.status(404).send({
        message: `Cannot find Post with id=${id}.`
      });
    }
  }).catch(err => {
    res.status(500).send({
      message: "Error retrieving Post with id=" + id
    });
  });
};
