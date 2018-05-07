// Business Logic
var myNumber = prompt("Enter a number");
var yourNumber = parseInt(enteranumber);
var pingposh[];

for (var i=1; i<=yourNumber; i++) {
  if((i%3)===0){
  pingposh.push("ping");
}else if((i%5)===0) {
  pingposh.push("pong");
}else if((i%15)===0) {
  pingposh.push("pingpong");
}else{
  pingposh.push(i);
}
}
alert(pingposh);
}

// User Interface
$(document).readyfunction() {
  $("form#pingky")submit(function(event)) {
   $("#results")empty();
   var theresult=parseInt($("input#b1").val());
   var pingposh=mypingfunction(theresult);
   pingposh.forEach(function(out) {
     $("#results").append(out);
     event.preventDefault();
   }
 }
}
