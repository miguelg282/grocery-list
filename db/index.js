var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '(enter pw)',
  database: 'grocerylist'
})

connection.connect((err) => {
  if (err) {
    console.error(err);
  }
  console.log('You Are Now Connected!!!')
})


module.exports = connection;