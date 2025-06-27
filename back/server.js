const express =  require('express');
const mysql = require('mysql2');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());


const pool = mysql.createPool({
  host     : 'localhost',
  user     : 'root',      
  password : '',
  database : 'signup'
});

const db = pool

app.get('/', (req, res) => {
  res.json("Hello from the server");
})

app.post('/signup', (req, res) => {
  const sql = "INSERT INTO login (name, email, password) VALUES (?, ?, ?)";
  
  const values = [
    req.body.name,
    req.body.email,
    req.body.password
  ];
  db.query(sql, values, (err, data) => {
    if (err) {
      return res.json("Error: "+ err);
    }
    return res.json(data);
  })
})



app.post('/login', (req, res) => {
  const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
  
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json('error: ' + err);
    }
    if (data.length > 0) {
      return res.json('Login Successful');
    } else {
      return res.json('Fail');
    }
  });
});

app.listen(5000,()=> {
  console.log("listening on port 5000");
})