import  express  from "express";
import postRoute from './routes/posts.js'
import usersRoute from './routes/users.js'
import authRoute from './routes/auth.js'
import cookieParser from "cookie-parser";

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use('/api/posts',postRoute)
app.use('/api/users',usersRoute)
app.use('/api/auth',authRoute)

app.get('/test',(req,res) => {
  res.json("It works")
})

app.listen(8800, () => {
  console.log('Connected!')
})