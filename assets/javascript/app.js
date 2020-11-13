var config = {
    apiKey: "AIzaSyDEmxMDDijs5LUlrmYMNv36_Nlx5ipH-Ls",
    authDomain: "gmt-fitness.firebaseapp.com",
    databaseURL: "https://gmt-fitness.firebaseio.com",
    projectId: "gmt-fitness",
    storageBucket: "",
    messagingSenderId: "273381506828"
  };
  firebase.initializeApp(config);

var database = firebase.database();

// Initial Values
var subscribe = "";
// Capture Button Click
$("#subscibe").on("click", function(event) {
  event.preventDefault();


  // Grabbed values from text boxes
  subscribe = $("#subscribe").val().trim();
  database.ref().push({
    subscribe: subscribe,
  });
});


