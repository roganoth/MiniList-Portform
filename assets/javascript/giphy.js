$(document).ready(function () {
    var gifs = ["cats", "dogs", "koalas", "bears", "birds", "barbarians"];
    var gifSearch;
    var gifImage;
    var i;

    function createButtons() {
        $("#buttonSpace").empty();
        for (i = 0; i < gifs.length; i++) {
            var a = $("<button>");
            a.addClass("gifChoice");
            a.attr("data-name", gifs[i]);
            a.text(gifs[i]);
            $("#buttonSpace").append(a);
        }
    }

    $("#addGif").on("click", function (event) {
        event.preventDefault();
        gifSearch = $("#searchInput").val().trim();
        gifs.push(gifSearch);
        createButtons();
    })

    $(document).on("click",".gifChoice", function () {
        var searchTerm = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?limit=10&offset=0&rating=G&lang=en&q=" + searchTerm + "&api_key=1vvJ8zUB4rh6oQdjqvrFH1yefGrtirh7";
        $("#gifSpace").empty();
        
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            var results = response.data;
            console.log(response);
            console.log(results);
            for (i=0; i<results.length; i++) {
                gifImage = $("<img>");
                gifImage.attr("src",results[i].images.fixed_height_still.url);
                gifImage.attr("still",results[i].images.fixed_height_still.url);
                gifImage.attr("animate",results[i].images.fixed_height.url);
                gifImage.attr("data-state","still");
                gifImage.addClass("gif");
                $("#gifSpace").append(gifImage);
            }
        })
    })
    $(document).on("click",".gif", function() {
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src",$(this).attr("animate"));
            $(this).attr("data-state","animate");
        }
        else {
            $(this).attr("src",$(this).attr("still"));
            $(this).attr("data-state","still");
        }
    })
    createButtons();
})