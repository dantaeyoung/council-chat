/* globals firebase */


// Get a reference to the database service
var database = firebase.database();


function setMyname(name) {
  database.ref("myname").set({
    name: name,
  });
  console.log("ok")
}




$(document).ready(function() {
  

  
  
  $("#setName").click(function() {
  
      //alert("what");
      setMyname($("#nameInput").val());
    console.log("settingmyanme")
  })

  
  
  database
    .ref('myname')
    .on('value', function(snapshot) {
      $("#currentName").text(snapshot.val().name);
    });

  
})



