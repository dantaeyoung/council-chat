/* globals firebase */

// Get a reference to the database service
var shareddatabase = firebase.database();


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

  
  // when we click on it, change teh database
  $("#setName").click(function() {
    //alert("what");
    
    // from the database, find the reference(key/lookup code) of "ourname" (this is created arbitrarily)
    // and set the 'name' of it to $("#nameInput").val(), which the contents of the input.
 
    shareddatabase.ref("ourname").set({
      name: $("#nameInput").val()
    });
    
  });
  
  

  // when the database changes, change the website  
  shareddatabase.ref("ourname").on("value", function(snapshot) {
    $("#currentName").text(snapshot.val().name);
    
    console.log( snapshot.val() );
    
  });
  
  

  
  
  
  
  $("#addAge").click(function() {
    addAge(100);
  })

  $("#subtractAge").click(function() {
    addAge(-100);
  })

  
  shareddatabase.ref("ourage").on("value", function(snapshot) {
    $("#currentAge").text(snapshot.val().age);
  });
  
  
  
});
