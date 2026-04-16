const express = require('express')// ap hamare paas express constant main sxpress ki sari powers hai we can do lot of things now
const app = express()// hamne express() function call kiya hai and hamne express ki sari powers app constant ko dedi hai ab ham is app constant se kuch bhi kar sakte hai , is aap constant se ham bahut sari app craete kar sakte hai kuch bhi kar sakte hai
const {firstMiddleware} = require("./middleWares/firstMiddleware");
const {secondMiddleware} = require("./middleWares/secondMiddleware");
//to sabse pehla kaam route create karte hai , this is one of the dabse pehla kaam it can do baby

app.get('/',firstMiddleware, secondMiddleware,(req, res) => {
  res.send('Hello World!');
  console.log("hui hui maja agya bhai");
})

app.use((err, req, res, next)=>{
    console.error(err.stack);
    res.status(500).send('something broke!');
})

app.listen(3000, () => {
  console.log('App listening on port 3000')
})