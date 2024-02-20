var ranNum = Math.floor(Math.random()*100);

if(ranNum % 2 == true){
    console.log('is divisable');
}
else
console.log('noooooo');

var ans = ranNum%2 == 0? 'yay': 'nay'; 
console.log(ranNum);
var grade = ranNum>50? ranNum<70 && ranNum>50? "D": ranNum>70 && ranNum<80?'C': ranNum>80&& ranNum<90?'B':'A':'F';
console.log(grade);

function addition(x, y){
var z = x+y
console.log(z);
}
