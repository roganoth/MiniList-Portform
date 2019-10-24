$(document).ready(function () {
    var gifs = ["cats","dogs","koalas","bears","birds","barbarians"];
    var searchTerm;
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=1vvJ8zUB4rh6oQdjqvrFH1yefGrtirh7&q=&limit=25&offset=0&rating=G&lang=en&q=" + searchTerm;


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
        var gifName = $("#searchInput").val().trim();

        gifs.push(gifName);
        createButtons();
    })


    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function (response) {

    })
    createButtons();
})