const express = require("express");
const dotenv = require("dotenv").config();
const auth = require("./middleware/auth");
const port = process.env.PORT || 3000;
const connectDB = require("./config/db");
const cors = require("cors");
const messageRoutes = require("./routes/messageRoutes");
const customersRoutes = require("./routes/customersRoutes");
const userRoutes = require("./routes/userRoutes");
const ticketsRoutes = require("./routes/ticketsRoutes");
const AdminMessageRoutes = require("./routes/AdminMessageRoutes");
const reportsRoutes = require("./routes/reportRoutes");
const { errorHandler } = require("./middleware/errorMiddleware");


connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/api/message", messageRoutes);
app.use("/api/users", userRoutes);
app.use("/api/customers", customersRoutes);
app.use("/api/tickets", ticketsRoutes);
app.use("/api/reports", reportsRoutes);
app.use("/api/AdminMessage", AdminMessageRoutes);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server started on port ${port}`);
});
