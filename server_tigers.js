/* Scraper: Server #3  (18.2.1)
 * ========================= */

// Dependencies:

// Snatches HTML from URLs
var request = require("request");
// Scrapes our HTML
var cheerio = require("cheerio");


// First, tell the console what server3.js is doing
console.log("\n******************************************\n" +
    "Look at the image of every award winner in \n" +
    "one of the pages of awwwards.com. Then,\n" +
    "grab the image's source URL." +
    "\n******************************************\n");


// Run request to grab the HTML from awwards's clean website section
request("https://www.mlb.com/tigers", function(error, response, html) {

    // Load the HTML into cheerio
    var $ = cheerio.load(html);

    // Make an empty array for saving our scraped info
    var result = [];

    // With cheerio, look at each award-winning site, enclosed in "figure" tags with the class name "site"
    $("a.p-headline-stack__link").each(function(i, element) {

        var title = $(element).text();
        var link = $(element).attr("href")
            // var gameDate = $(this).text();

        // Push the image's URL (saved to the imgLink var) into the result array
        result.push({
            title: title,
            link: link
        });
    });

    // $("a.team-name").each(function(i, element) {


    //   var teamName = $(element).find("abbr").attr("title")

    //   // Push the image's URL (saved to the imgLink var) into the result array
    //   result.push({ TeamName: teamName });
    // });

    // With each link scraped, log the result to the console
    console.log(result);
});
