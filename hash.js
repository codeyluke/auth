//no connection to the other project. This is just for tutorials
const bcrypt = require("bcrypt");
const { MD5 } = require("crypto-js");
const jwt = require("jsonwebtoken");

// bcrypt.genSalt(10, (err, salt) => {
//   if (err) return next(err);
//   bcrypt.hash("password123", salt, (err, hash) => {
//     if (err) return next(err);
//     console.log(hash);
//   });
// });
// const secret = "mysecretpassword";
// const secretSalt = "dhgoieurghosireu";

// const user = {
//   id: 1,
//   token: MD5("SDSFEIUEHIU").toString() + secretSalt
// };

// const receivedToken = "8da4c14a3b7e44f795b8945cbc2dbd77dhgoieurghosireu";
// if (receivedToken === user.token) {
//   console.log("move forward");
// }

// console.log(user);
const id = "1000";
const secret = "supersecret";

const receivedToken =
  "eyJhbGciOiJIUzI1NiJ9.MTAwMA.L9PmEqLlZjettygguzj25agunJu6NkvVtG9RFRBnK2Y";
const token = jwt.sign(id, secret);
const decodeToken = jwt.verify(receivedToken, secret);

console.log(decodeToken);
