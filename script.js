/* globals firebase */


// Get a reference to the database service
var database = firebase.database();


function setMyname(name) {
  database.ref("myname").set({
    name: name,
  });
}



$(document).ready(function() {
  
  
  $("#setName").click(function() {
  
      //alert("what");
      setMyname("dan");
  })

  
  
  var starCountRef = firebase.database().ref('myname');
  starCountRef.on('value', function(snapshot) {
    $("#currentName").text("whoo");
  });


  
})



