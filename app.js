//Test for joke
var joke = "JavaScript walked into a bar.....";
var toldJoke = "false";
var $punchline =
    "Better watch out for those semi-colons";
var percentage = 20;
var result;

if (toldJoke == true) {
    alert($punchline);
    }   else
{
    alert(joke);
}

//movie Night
var zipCode = 98104;
var joesFavoriteMovie = "Forbidden Planet";
var movieTicket$ = 9;

if (movieTicket$ >= 9) {
    alert("Too mcuh!");
} else {
    alert("We're going to see " + joesFavoriteMovie);
}

var scoops = 5;
while (scoops > 0) {
    document.write("Another scoop!<br>");
    scoops = scoops - 1;
}
document.write("Life without ice cream isn't the same");

var name = "Joe";
var i = 0;

while (i < 2) {
    console.log("Happy Birthday to you.<br>");
    i = i + 1;
}
console.log("Happy Birthday dear " + name + ",<br>");
console.log("Happy Birthday to you.<br>");

var word = "bottles";
var count = 99;
while (count > 0) {
    console.log(count + " " + word + " of beer on the wall");
    console.log(count + " " + word + " of beer");
    console.log("Take on down, pass it around,");
    count = count - 1;
    if (count > 0) {
        console.log(count + " " + word + "of beer on the wall");
    } else {
        console.log("No more " + word + " of beer on the wall.");
    }
    }

