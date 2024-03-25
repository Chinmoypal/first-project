const express = require('express'); 
const app = express();
const port = 5000;
app.set('view engine','ejs')
app.get('/',(req,res)=> {
    res.send("HELLO BONGUT")
})
app.listen(port, ()=>{
    console.log("server is live on port number",port);
})