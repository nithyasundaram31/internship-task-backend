const express=require("express");
const userRouter = require("./routes/userRoutes");
const cors=require('cors')



const app=express()
app.use(express.json());
app.use(cors({
      origin: 'https://idyllic-cupcake-873b38.netlify.app', 
    credentials: true, // Allow credentials to be sent
}))

app.use('/api/users',userRouter)

app.get("/",(req,res)=>{
 res.send("server is running")
})


module.exports=app