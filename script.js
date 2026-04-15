const fs = require("fs");
const http = require("http");

fs.writeFile("hey.txt", "kya haal hai bhai sab theek thak hai na?", (err)=>{
    if(err){
        console.error(err);
    }else{
        console.log("done");
    }
});

fs.appendFile("hey.txt","mai to theek hun bhai , aap batao?",(err)=>{
    if(err){
        console.error(err)
    }else{
        console.log("append done");
    }
    

})

/fs.readFile("hey.txt", (err)=>{
    if(err) console.log(err.message);
    else console.log("done");
})


const server = http.createServer((req, res)=>{
    res.end("hello");
})

server.listen(3000, (err)=>{
    if(!err){
    console.log("server is listening on port 3000")
    }else{
        console.log(err.message);
    }
});