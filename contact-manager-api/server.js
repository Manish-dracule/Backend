



require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const contactsRoute = require("./routes/contactsRoutes");
const usersRoute = require('./routes/usersRoutes');
const connectDB = require('./db/connect');
const app = express();

const Port = process.env.PORT || 5000;
connectDB();
app.use(express.json());
app.use("/api/contacts", contactsRoute);
app.use("/api/users",usersRoute);

app.listen(Port, () => {
  console.log(`listening on port ${Port}`);
});
