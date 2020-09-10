// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
var url_string = 'https://restcountries.eu/rest/v2/all';

// Open a new connection, using the GET request on the URL endpoint
request.open('GET',url_string , true) 
request.send();

request.onload = function() {
  // Begin accessing JSON data here
//console.log(this.response);
var data = JSON.parse(this.response)
var counAsia= data.filter((item)=>(item.region==='Asia'));
    console.log(counAsia);
//2)Get the countries with population less than 2L - fliter
var popAsia= data.filter((item)=>(item.population<200000));
    console.log(popAsia);
//3)Bumpup the current population  of all the counteirs by 1L - Map
var bumpPop=data.map((item)=>item.population+100000);
    console.log(bumpPop);
//4)convert all the names to capital - map
var nameCap=data.map((item)=>item.name.toUpperCase());
    console.log(nameCap);
//5)print follwoig details  name , capital , flag  - foreach,filter
var b=[];
var nameCapFlag= data.forEach((item)=>{
    b.push({name: item.name,capital: item.capital,flag: item.flag});
    });
    console.log(b);
//6)Print the total population of the countries  - reduce
var totalPop=data.reduce((currenttotal,item)=>item.population+currenttotal,0);
    console.log(totalPop);
}