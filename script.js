/* globals firebase */

// Get a reference to the database service
var shareddatabase = firebase.database();


// sets my name using the reference "ourname".
function setOurname(thisname) {
  
  // from the database, find the reference(key/lookup code) of "ourname",
  // and set the 'name' of it to 'thisname', which was a parameter received to this function.
  shareddatabase.ref("ourname").set({
    name: thisname
  });
}


// get the current age and adds a number to it.
function addAge(number) {
  
  // get the current Age as displayed on the website, and try to convert it to a number!
  var currentAge = parseInt($("#currentAge").text());
  
  // after trying to convert it, if currentAge is not a number... then let's just set it to zero
  // (isNaN is a special function that checks if an object is a number or not)
  if(isNaN(currentAge)) { currentAge = 0; }
  

  // set our age in the shared database!
  shareddatabase.ref("ourage").set({
    age: currentAge + number
  });
  
}




$(document).ready(function() {

  
  
  $("#setName").click(function() {
    //alert("what");
    setOurname($("#nameInput").val());
  });

  
  shareddatabase.ref("ourname").on("value", function(snapshot) {
    $("#currentName").text(snapshot.val().name);
  });
  
  
  
  
  $("#addAge").click(function() {
    addAge(2);
  })

  $("#subtractAge").click(function() {
    addAge(-2);
  })

  
  shareddatabase.ref("ourage").on("value", function(snapshot) {
    $("#currentAge").text(snapshot.val().age);
  });
  
  
  
});
