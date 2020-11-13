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

// Initial values, these are the values we want to capture and then push to the database
var email = "";
var helpForm = "";
var goalsText = "";

// Capture the button click and assing a value to the variables

$("#contact-submit").on("click", function(event){
  event.preventDefault();

    email = $("#email").val().trim();
    helpForm = $("#help-form").val();
    goalsText = $("#goals-text").val();

// Push values from the input form to Firebase so they can be stored in the database

    database.ref().push({
        email: email,
        helpForm: helpForm,
        goalsText: goalsText,
    });

// After we push the values to the database, we empty the input lines for a better user experience

    $("#email").val("");
    $("#help-form").val("");
    $("#goals-text").val("");
});



