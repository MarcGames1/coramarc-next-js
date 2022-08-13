
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import expressValidator from "express-validator";
require("dotenv").config();
// import morgan from "morgan";




//Import routes
import authRoutes from "./routes/auth";
import userRoutes from "./routes/user"
import categoryRoutes from "./routes/category"
import productRoutes from "./routes/product"
import blogRoutes from "./routes/blog-category";
import postRoutes from './routes/posts'
const app = express();

// db connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB CONNECTION ERROR: ", err));

// middlewares
app.use(cors());
// app.use(morgan("dev"));
app.use(express.json({ limit: "4mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressValidator());
app.use(bodyParser.json());

// route middlewares
app.use("/api", authRoutes);
app.use('/api/', userRoutes)
app.use('/api/', categoryRoutes)
app.use('/api/', productRoutes)
app.use('/api/', blogRoutes);
app.use('/api/', postRoutes)

const port = process.env.port || 8000
app.listen(port,
   () => {console.log(`Server is running at ${port}`)
})