// const number =9;
// const names = require('./names');
// // console.log(names)
// const func = require('./utils');
// // console.log(func);
// // if(number>10){
// //     console.log('Greater')

// // }
// // else{
// //     console.log('Lesser')
// // }
// //setInterval(()=>{console.log('Hello world')},1000);
// func.sayHi(names.john);
// func.sayHi(names.smilga);
// // sayHi(names.smilga);

// 
const http = require('http')
const server = http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.write("Welcome to HomePage");
    }
    else if(req.url=='/about')
    {
        res.write("About page")
    }
    else
    {
        res.write(`
        <h1>Oops!!!</h1>
        <h2>We don't have any information you are requesting for!!!.Click on below link to navigate to home!!!</h2>
        <a href="/">Back to Home</a>
        `)
    }
    res.end()
})
server.listen(5000);