let dream =["커리어점프","성공","할수있다"];
let developer=["a","b","c"];

developer = developer.concat(dream);
console.log(developer.length);

let email = "lhwlina1130@gmail.com";
var pivot = email.indexOf("@");

var masking = [];
for (let index = 0; index < email.length; index++) {
    if(index < pivot-4 || index>= pivot) masking.push(email[index]);
    else masking.push("*");    
}

masking.join();
console.log(masking.join(""));

let user = {};
user.key = 1;
user.name="player";

console.log(user.name);

let players = [];
players.push({name:"영희",age : 5});
console.log(players[0].name);