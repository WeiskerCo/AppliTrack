const { Pool } = require('pg');

// default date = new Date(now)
// company name: string
// company location: string
// status: string
// salary range: 
  // salary minimum: Integer
  // salary maximum: Integer
// url: String

// CREATE TABLE users (
//   ID SERIAL PRIMARY KEY, 
//   Email VARCHAR, 
//   Password VARCHAR, 
//   Picture VARCHAR, 
//   FirstName VARCHAR, 
//   LastName VARCHAR)

// CREATE TABLE jobs (
//   id SERIAL PRIMARY KEY, 
//   time_stamp date NOT NULL DEFAULT CURRENT_DATE, 
//   company_name VARCHAR,
//   company_location VARCHAR, 
//   status VARCHAR, 
//   salary_range VARCHAR,
//   url VARCHAR,
//   user_id INT, 
//   FOREIGN KEY (user_id) REFERENCES users (ID)
//   )

const PG_URI = 'pguri';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

// data from elephanSQL on expenses

module.exports = {
  query: (text: any, params: any, callback: any) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};