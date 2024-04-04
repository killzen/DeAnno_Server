
import mysql from "mysql"


const pool = mysql.createPool({
  connectionLimit: 10, // 最大连接数
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'apiserver'
});


pool.on('error', (err) => {
  console.error('Database connection error:', err);
});

// Define the encapsulated query function
const querySQL = (sql, params, callback) => {
  // Get a connection from the connection pool and perform the query operation
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting database connection:', err);
      callback(err, null,sql);
      return;
    }
    
    // Perform the query operation
    
    connection.query(sql, params, (err, results) => {
     // Release the connection
      connection.release();
      if (err) {
        console.error('Error executing query:', err);
        callback(err, null,sql);
        return;
      }
      console.log('Executing SQL:', sql);
      callback(null, results,sql);
    });
  });
};



export default querySQL;