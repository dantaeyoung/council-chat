      const { createApp } = Vue;

      createApp({
        data() {
          return {
            message: "Hello Vue!",
          };
        },
      }).mount("#app");


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


function sendMessage() {
  
    
    const timestamp = Date.now();

    shareddatabase.ref("messages/" + timestamp).set({
      username: $("#nameInput").val(),
      message: $("#messageInput").val()
    });
  
  $("#messageInput").val('');
   
}


$(document).ready(function() {

  
  $("#messageInput").keypress(function() {
      if ( event.which == 13 ) {
       sendMessage();
      }
  });
  
  // when we click on it, change teh database
  $("#sendMessage").click(sendMessage);
  
  

  // when the database changes, change the website  
  shareddatabase.ref("messages/").on("child_added", function(snapshot) {
    const messages = snapshot.val();
    
    const msghtml = `<li><span class="username">${messages.username}</span>${messages.message}</li>`;
    
    document.getElementById("messages").innerHTML += msghtml;

    console.log( snapshot.val() );
    
  });
  
  

  
  
});
