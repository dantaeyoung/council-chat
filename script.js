/* globals firebase */

// Get a reference to the database service
var database = firebase.database();

function setMyname(name) {
  database.ref("ourname").set({
    name: name
  });
}

function addAge(number) {
  var currentAge = parseInt($("#currentAge").text());
  
  if(currentAge == "") { currentAge = 0; }
  
  database.ref("ourage").set({
    age: currentAge + number
  });

  
}


$(document).ready(function() {

  database.ref("ourname").on("value", function(snapshot) {
    $("#currentName").text(snapshot.val().name);
  });
  
  database.ref("ourage").on("value", function(snapshot) {
    $("#currentAge").text(snapshot.val().age);
  });
  
  
  $("#setName").click(function() {
    //alert("what");
    setMyname($("#nameInput").val());
    console.log("settingmyanme");
  });

  $("#addAge").click(function() {
    addAge(2);
  })

  $("#subtractAge").click(function() {
    addAge(-2);
  })

});
