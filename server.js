const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
//const dotenv = require("dotenv").config();
const {MONGODB_URI} = require('./const')
const {prod }= require('./const')
const {PORT} = require('./const')

const authRoutes = require("./routes/auth");
const itemRoutes = require("./routes/item");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/order");

console.log(MONGODB_URI,prod,PORT)
const app = express();
app.use(express.json());

app.use("/api", authRoutes);
app.use("/items", itemRoutes);
app.use("/cart", cartRoutes);
app.use("/order", orderRoutes);

//production to serve client files
/*if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}else {
  app.get('/', (req, res) => {
    res.send("api running");
  })
}*/
if ( prod) {
app.use(express.static(path.resolve(__dirname, './client/build')));
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
  });
}else{
  app.get('/', (req, res) => {
    res.send("api running");
  })
}




mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((err) => console.log(err));
