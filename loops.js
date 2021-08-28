const person = {fName:"Joe",lName:"Levy", age: 25};
var text = "";
var x;
for (x in person){
    text += person[x]+ " " ;
}
console.log(text)

var students = ["Barak", "Mira", "Omer"];
var x; 
for (x of students){
    console.log(x + " ");
}