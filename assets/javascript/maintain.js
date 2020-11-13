//// FRANCISCO RECIPE API
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDEmxMDDijs5LUlrmYMNv36_Nlx5ipH-Ls",
    authDomain: "gmt-fitness.firebaseapp.com",
    databaseURL: "https://gmt-fitness.firebaseio.com",
    projectId: "gmt-fitness",
    storageBucket: "",
    messagingSenderId: "273381506828"
  };
  firebase.initializeApp(config);



$(document).ready(function () {
    var recipesearch;
    /// GAIN PAGE

    $("#add-recipe").on("click", function (event) {
        $("#recipes").empty();
        event.preventDefault();

        recipesearch = $("#recipeinput").val().trim();


        console.log("hello")

        console.log(recipesearch)
        var newqueryURL = "https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=" + recipesearch + "&app_id=a8657a0b&app_key=acd4055d85d009d439ef0099280377ef&from=0&to=4&calories=1800-2000"

        $.ajax({
            url: newqueryURL,
            method: "GET"
        }).then(function (response) {

            var results = response.hits
            console.log(results)


            for (var i = 0; i < results.length; i++) {
                var firstDiv = $('<div id="recipecards" class="card p-2 recipeCard" style="width: 18rem;">')
                var dataImage = $('<img id="recipeimages" src="' + results[i].recipe.image + '" class="card-img-top"></img>');

                var newItemdiv = $('<div class="card-body">');
                var link = $("<a href='" + results[i].recipe.url + "' target='_blank'>");
                var recipetext = ("<p class='card-text'>" + results[i].recipe.label + "</p>")
                var closeDiv = $('<a href="'+results[i].recipe.url+'" target="_blank" style="margin:20px" class="btn btn-danger">Go to recipe</a>')

                
                $("#recipes").append(firstDiv)
                firstDiv.append(dataImage, newItemdiv, closeDiv)
                newItemdiv.append(recipetext)

                // recipetext.append(closeDiv)


                $("#recipecards").append(link)
                $('#recipeinput').val("");
            }
        });

    });

});

/// FRANCISCO END RECIPE API


// Abraham's work, YouTube's API

var search;

$(document).ready(function () {

// When the user clicks on the button to search for the videos, we make the API call and also empty the .videos div each time the user searchs for something
    $("#add-exercise").on("click", function (event) {
        event.preventDefault();
        $(".videos").empty();
        // We are storing the user's input into the variable "search" which will later be used for the ajax call
        search = $("#exercise-input").val().trim();
        // This is our API call, we used the user's input (var search) plus different parameters using YouTube's search list
        var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=relevance&q=" + search + "&relevanceLanguage=en&safeSearch=moderate&topicId=%2Fm%2F027x7n&type=video&videoCaption=none&videoCategoryId=17&videoDefinition=any&videoDimension=any&videoDuration=medium&videoEmbeddable=true&key=AIzaSyB-DpMfCWMG2x1j2BpAIGxFMhATO4zE5jg";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var results = response.items;
            console.log(results);
            // Here we log the results to the console so we can see the objects

            for (let i = 0; i < results.length; i++) {

                // Using the for loop, we run through the results and append them to the website
                var card = $("<div class='card' style='width: 400'>");
                var cardBody = $("<div class='card-body'>");
                var video = $("<div class='card-video'>");
                var dataVideo = $("<iframe class='embed-responsive-item' iframe width='425' height='335' src='https://www.youtube.com/embed/" + results[i].id.videoId + "' frameborder='0' allow='accelerometer; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");

                card.append(cardBody, video, dataVideo);
                $(".videos").append(card);
            }

        });
        // Here we clear the search bar each time the user clicks on the submit button
        $("#exercise-input").val("");
    })
})
