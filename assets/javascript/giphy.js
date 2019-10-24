$(document).ready(function() {
    var searchTerm;
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=1vvJ8zUB4rh6oQdjqvrFH1yefGrtirh7&q=&limit=25&offset=0&rating=G&lang=en&q=" + searchTerm;

    $.ajax({
        url: queryURL,
        method: "GET",
    }).then(function(response){
        
    })
})