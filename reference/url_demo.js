const url = require('url');
const myUrl = new URL('http://localhost:8080/home?id=100&status=active')

//Serialised URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Get Host (root Domain)
console.log(myUrl.host);
//Get Host Name (w/o port)
console.log(myUrl.hostname);
//Get Path name of Url
console.log(myUrl.pathname);
//Get Search Query name of Url
console.log(myUrl.search);
//Get Search Query's parameters on url
console.log(myUrl.searchParams);
//Append to Search Params
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);
//Loop Through Search Params
myUrl.searchParams.forEach((value,name)=>{
  console.log(`${name}: ${value}`);
})