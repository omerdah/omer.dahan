var i =0 ;
var text = "Is it working?";
var speed=50;
function Typing(){
   if (i<text.length){
        document.getElementById("DEMO").innerHTML+=text.charAt(i);
        i++;
        setTimeout(Typing, speed);
    }
}