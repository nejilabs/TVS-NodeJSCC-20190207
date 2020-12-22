const http = require('http');

//Create Server Object
http.createServer(
  (req,res)=>{
    //When you get request, we want to Write Response
    res.write('Hello World');
    res.end(); //dont forget to end
  }
).listen(
  5000,
  ()=>console.log('Server Running...')
  );