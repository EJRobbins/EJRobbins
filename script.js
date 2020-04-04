
function test() {
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&fq=The New York Times&api-key=2rQDhbsaAEJfCts0ivPNxTMXyPLIOxqg"


    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        console.log(response);
    })
} 







// var searchInput = document.getElementById('#searchInput');

// var nyURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchInput + "&api-key=2rQDhbsaAEJfCts0ivPNxTMXyPLIOxqg"


// $.ajax({
//     url: nYURL,
//     method: "GET"
// }).then(function(response) {
//     console.log(response);
//     var document = response.response.docs;
//     for (var i = 0; i < document.length; i++) {
//         //     //Create all the newspaper el
//         var articleDiv = $("<div>");
//         articleDiv.addClass('card m-3');
//         //Create el for snippit(header)
//         let snippet = $("<h2>");
//         snippet.addClass("card-header")
//         snippet.text(document[i].snippet);
//         articleDiv.append(snippet);
//         //Create for lead(p)
//         let lead = $("<p>");
//         lead.addClass("card-text")
//         lead.text(document[i].lead_paragraph);
//         articleDiv.append(lead);
//         $("#article-container").append(articleDiv);
//     }});