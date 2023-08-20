require('dotenv').config()
const express=require("express")
const cookieParser = require("cookie-parser");
const errorMiddleware=require("./middleware/error.js")
const productRouter = require("./routes/productRoute")
const userRouter = require("./routes/userRoute")
const orderRouter = require("./routes/orderRoute")
const paymentRouter = require("./routes/paymentRoute")
const app=express()
const cors=require("cors")
const path = require("path");




// app.set("trust proxy", 1);
// app.use(cors({
//     origin:'http://localhost:3000', 
//     credentials:true,           
//     optionSuccessStatus:200
// }))

app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
//   });





app.use("/api/v1/",productRouter)
app.use("/api/v1/",userRouter)
app.use("/api/v1/",orderRouter)
app.use("/api/v1/",paymentRouter)
app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./frontend/build/index.html"));
  });


app.use(errorMiddleware)


module.exports=app