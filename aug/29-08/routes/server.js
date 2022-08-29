import express from "express";
import "dotenv/config"; // require("dotenv").config();
import { Low, JSONFile } from "lowdb";

const app = express();

app.listen(process.env.PORT, () =>
  console.log(`server is running on port (from .env) ${process.env.PORT}`)
);

//!Important to be able to read the body of the request req.body
app.use(express.json());

// lowdb configuration=========================
const adapter = new JSONFile("./db.json");
const db = new Low(adapter);

// Read data from JSON file, this will set db.data content
await db.read();

// console.log(db.data);
//===============================================
//CRUD
// endpoint 1: sends all users
app.get("/users", (req, res) => {
  // Read
  res.send(db.data.users);
});

// endpoint 2: sends all products
app.get("/products", (req, res) => {
  // Read
  res.send(db.data.products);
});

const uid = () => {
  return Date.now().toString(18);
};

console.log(uid())
// endpoint 3: expects a POST request to the path localhost:8080/users/signup with a body that contains the data of the new user, adds it to the database (db.json) and then sends a response "user added successfully" to the client.
app.post("/users/signup", async (req, res) => {
  //Create
  console.log(req.body);

  let newUser = req.body;

  const checkEmail = db.data.users.some(
    (item) => item.email === req.body.email
  );

  if (checkEmail) {
    return res.send("user with this email already exists");
  }
  newUser.id = uid(); // to create an id
  db.data.users.push(newUser); // to add the 'newUser' to the db

  await db.write();

  res.send("user added successfully");
});

// endpoint 4: expects a POST request to the path localhost:8080/products/add-product with a body that contains the data of the new product, adds it to the database (db.json) and then sends a response "product added successfully" to the client.
app.post("/products/add-product", async (req, res) => {
  //Create
  console.log(req.body);

  let newProduct = req.body;

  newProduct.id = uid(); // to create an id
  db.data.products.push(newProduct); // to add the 'newProduct' to the db

  await db.write();

  res.send("product added successfully");
});



app.put("/users/edit-user/:id", async (req, res)=>{
//Update

console.log(req.body);

  let updatedUsersArr = db.data.users.filter(user=>user.id !== req.params.id);

  let updatedUser = req.body;
      updatedUser.id = req.params.id;

      updatedUsersArr.push(updatedUser);

      db.data.users = updatedUsersArr;

      await db.write();

      res.send(db.data.users);
})