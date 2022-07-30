const express = require("express");
const dotenv = require('dotenv').config()
const auth = require("./middleware/auth");
const port = process.env.PORT || 3000
const connectDB = require("./config/db");
const cors = require("cors");
const messageRoutes = require("./routes/messageRoutes");
const customersRoutes = require("./routes/customersRoutes");
const userRoutes = require("./routes/userRoutes");
const ticketsRoutes = require("./routes/ticketsRoutes");
const multer = require("multer");


const ImageModel = require("./models/image.model");
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//test upload

const Storage = multer.diskStorage({
  destination: "upload",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: Storage }).single("image");

app.post("/upload/:id", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const newImage = new ImageModel({
        name: req.body.name,
        image: {
          data: req.file.filename,
          contentType: "image/jpeg",
        },
      });
      newImage.save().then(() => res.send("image uploaded")).catch(err)
    }
  });
});

////

//app.use("/messages", require("./routes/messageRoutes"));

app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);
app.use("/api/customers", customersRoutes);
app.use("/api/tickets", ticketsRoutes);



app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
