const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const {MONGODB_URI} = require('./const')
const {prod }= require('./const')
const {PORT} = require('./const')

const authRoutes = require("./routes/auth");
const itemRoutes = require("./routes/item");
const cartRoutes = require("./routes/cart");
const orderRoutes = require("./routes/order");

const app = express();
app.use(express.json());

app.use("/api", authRoutes);
app.use("/items", itemRoutes);
app.use("/cart", cartRoutes);
app.use("/order", orderRoutes);

//production to serve client files

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
  .connect(MONGODB_URI,  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB connected"))
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch((err) => console.log(err));
