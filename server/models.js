const db = require('../db/index.js')

module.exports = {

  models: {
    get: (callback) => {
      db.query('SELECT * FROM items', (err, results) => {
        if (err) {
          callback(err);
        }
        callback(null, results)
      })
    },
    // 'INSERT INTO comments (user_id, text, date) VALUES(?, ?, ?)', values, function(err, result)
    post: ({itemName, quantity}, callback) => {
      db.query(`INSERT INTO items (itemName, quantity) VALUES('${itemName}', ${quantity})`), (err) => {
        if (err) {
          callback(err);
        }
        callback('Added To List');
       }
    },

    put: (id, {itemName, quantity}, callback) => {
      var queryStr = `UPDATE items SET itemName='${itemName}', quantity=${quantity} WHERE id=${id}`;
      db.query(queryStr, (err) => {
        if (err) {
          callback(err);
        }
        callback('Update Success!')
      })

    },

    delete: (id, callback) => {
      db.query(`DELETE FROM items WHERE id=${id}`, (err) => {
        if (err) {
          callback(err);
        }
        callback('Delete Success!');
      })
    }
  }
}

//use these functions in the controller.
//sequelize models