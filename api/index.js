import express from "express" 
import cors from "cors"
import userRoutes from "./routes/user.js"
const app = express()

app.use(express.json())
app.use(cors())

app.use("/",userRoutes) //aqui ele puxa o arquivo inteiro, nao somente uma funcao de routes/user
 
app.listen(8800)