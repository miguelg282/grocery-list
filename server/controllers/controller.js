//database sprint, has controller & routes separated.
const model = require('../models');

module.exports = {
  controller: {
    get: (req, res) => {
      model.models.get((err, result) => {
        if (err) {
         res.status(400).send(err)
        } else {
          res.status(200).json(result);
        }
      })
    },

    post: (req, res) => {
      var grocery = req.body
      // console.log(req.body, '=====reqBody========')
      model.models.post(grocery, (err, result) => {
        if (err) {
          res.status(400).send(err)
        } else {
          res.status(201).send('Posted!');
        }
      })
    },

    put: (req, res) => {
      var grocery = req.body
      var id = req.params.index
      // console.log(grocery, '======id====');
      model.models.put(id, grocery, (err, result) => {
        if (err) {
          res.status(400).send(err)
        } else {
          res.status(200).send('Updated!');
        }
      })
    },

    delete: (req, res) => {
      // console.log(req.params.index, '=========')
       var params = req.params.index
      model.models.delete(params, (err) => {
        if (err) {
          res.status(400).send(err)
        } else {
          res.status(200);
        }
      })
    }
  }
}
