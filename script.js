function stringFunctions(){

let text=document.getElementById("text").value;
let word=document.getElementById("word").value;

if(text==""){
    alert("Please enter a string.");
    return;
}

let output="";

output+="<h3>Results</h3>";

output+="Length : "+text.length+"<br>";

output+="First Occurrence : "+text.indexOf(word)+"<br>";

output+="Last Occurrence : "+text.lastIndexOf(word)+"<br>";

output+="Search Position : "+text.search(word)+"<br>";

output+="Slice (0,8) : "+text.slice(0,8)+"<br>";

output+="Substring (0,8) : "+text.substring(0,8)+"<br>";

output+="Substr (0,8) : "+text.substr(0,8)+"<br>";

output+="Replace : "+text.replace(word,"JavaScript")+"<br>";

output+="Uppercase : "+text.toUpperCase()+"<br>";

output+="Lowercase : "+text.toLowerCase();

document.getElementById("stringOutput").innerHTML=output;

}



function mathFunctions(){

let number=parseFloat(document.getElementById("number").value);
let power=parseFloat(document.getElementById("power").value);

if(isNaN(number)){
    alert("Please enter a valid number.");
    return;
}

let output="";

output+="<h3>Results</h3>";

output+="Power : "+Math.pow(number,power)+"<br>";

output+="Square Root : "+Math.sqrt(number)+"<br>";

output+="Round : "+Math.round(number)+"<br>";

output+="Ceiling : "+Math.ceil(number)+"<br>";

output+="Floor : "+Math.floor(number)+"<br>";

output+="Absolute Value : "+Math.abs(number)+"<br>";

output+="Sine : "+Math.sin(number).toFixed(4)+"<br>";

output+="Cosine : "+Math.cos(number).toFixed(4)+"<br>";

output+="Minimum (10,20,Number) : "+Math.min(10,20,number)+"<br>";

output+="Maximum (10,20,Number) : "+Math.max(10,20,number)+"<br>";

output+="Random Number : "+Math.floor(Math.random()*100+1);

document.getElementById("mathOutput").innerHTML=output;

}