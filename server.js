const express = require("express")
const dotenv = require("dotenv")
const morgan = require("morgan")
const staffRoute = require("./routes/staffRoute")
const connectDb = require("./config/connectDB")

dotenv.config()

const app = express()

connectDb();

app.use(morgan("dev"))
app.use(express.json())

app.use("/api/v4/staff", staffRoute)

app.get("/", (req,res) => {
    res.send("we welcome you to our staff api")
})

const PORT = process.env.PORT || 7000;

app.listen(PORT, ()=> console.log(`server operating succeeded ${PORT}`));