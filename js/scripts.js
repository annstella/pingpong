// Business Logic
function mypinfunction(yourNumber){
  var pingposh=[];
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
  return pingposh;
};

//User Interface
$(document).ready(function(){
  $("form#pingky").submit(function(event){
    event.preventDefault();
    $("#theresult").empty();
    var yourNumber=parseInt($("input#fast").val());
    var pingposh=mypinfunction(yourNumber);
    pingposh.forEach(function(out){
      $("#theresult").append('<li>' + out + '</li>');
    });
  });
 });
