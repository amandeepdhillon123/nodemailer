
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config()
const PORT = process.env.PORT || 8004
const path =require("path")


const routes = require("./routes/routes")
app.use(cors())
app.use(express.json())
 
app.use(express.static(path.join(__dirname, "./client/dist")));

app.get("*", (req, resp) => {
  return  resp.sendFile(path.join(__dirname, "./client/dist/index.html"));
});


app.use(routes)

app.listen(PORT,()=>{
    console.log(`server starts at ${PORT}`)
})