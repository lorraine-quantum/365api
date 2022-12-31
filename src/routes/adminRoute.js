const route = require("express").Router();
const { getUsers, adminGetSingleUser, adminEditSingleUser } = require('../controllers/admin')
const {
  addTransaction, adminDeleteSingleUser, adminGetTransactions, adminDeleteSingleTransaction, adminGetSingleTransaction, getSingleTransaction, adminEditSingleTransaction
} = require("../controllers/transaction");

//admin can manipulate users and transactions details
route.post("/add", addTransaction);
route.get("/single/:id", getSingleTransaction);
route.get("/transactions", adminGetTransactions);
route.get("/transactions/:id", adminGetSingleTransaction);
route.put("/transactions/:id", adminEditSingleTransaction);
route.delete("/users/:id", adminDeleteSingleUser);
route.delete("/transactions/:id", adminDeleteSingleTransaction);


route.get('/users', getUsers)
route.get('/users/:id', adminGetSingleUser)
route.put('/users/:id', adminEditSingleUser)

module.exports = route