const db = require("../models");
const Post = db.post;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
  const label = req.query.label;
  var condition = label ? { label: { [Op.like]: `%${label}%` } } : null;

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

exports.add = (req, res) => {

  return Post.create({
    label: req.body.label,
    done: req.body.done
  }).then(function (post) {
    if (post) {
      let toSend = {
        success: true,
        data: post
      }
      res.send(toSend);
    } else {
      response.status(400).send('Error in insert new record');
    }
  });

}

exports.edit = (req, res) => {

  const id = req.params.id;

  Post.findByPk(id).then(data => {
    var updated = data.update({
      label: req.body.label,
      done: req.body.done
    });
    let toSend = {
      success: true
    }
    res.send(toSend);
  }).catch(err => {
    res.status(500).send({
      message: "Error retrieving Post with id=" + id
    });
  });

}

exports.delete = (req, res) => {

  const id = req.params.id;

  Post.destroy({
    where: {
      id: id
    }
  }).then(function (deleted) {
    if (deleted) {
      let toSend = {
        success: true
      }
      res.send(toSend);
    } else {
      response.status(400).send('Error deleting record');
    }
  });

}
