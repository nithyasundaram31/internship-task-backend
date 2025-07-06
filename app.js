const express=require("express");
const userRouter = require("./routes/userRoutes");


const app=express()
app.use(express.json());
// app.use(cors({
//       origin: 'https://resilient-brioche-1cb6d6.netlify.app', 
//     credentials: true, // Allow credentials to be sent
// }))

app.use('/api/users',userRouter)

app.get("/",(req,res)=>{
 res.send("server is running")
})


module.exports=app