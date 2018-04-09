function  Event(bands, date, time, venue, age, genre, price) {
  this.bands = bands;
  this.date = date;
  this.time = time;
  this.venue = venue;
  this.age = age;
  this.genre = genre;
  this.price = price;
}

function Venue(name, location) {
  this.name = name;
  this.location = location;
}

var wonderBallroom = new Venue("Wonder Ballroom", "Northeast");
var theKnow = new Venue("The Know", "Northeast");
var mississippiStudios = new Venue("Mississippi Studios", "Northeast");
var roselandTheater = new Venue("Roseland Theater", "Northwest");
var starTheater = new Venue("Star Theater", "Northwest");
var dougFir = new Venue("The Doug Fir Lounge", "Southeast");
var bunkBar = new Venue("Bunk Bar", "Southeast");
var analogCafe = new Venue("The Analaog Cafe", "Southeast");
var crystalBallroom = new Venue("The Crystal Ballroom", "Southwest");
var dantes = new Venue("Dante's", "Southwest");
var schnitzer = new Venue("The Arlene Schnitzer Concert Hall", "Southwest");

var bradPaisley = new Event(["Brad Paisley"], [2018, 4, 2] "7:00 PM", crystalBallroom, "aa", "Country", 45);
var dariusRucker = new Event(["Darius Rucker"], [2018, 4, 4], "7:00 PM", schnitzer, "21", "Country", 70);
var dierksBently = new Event(["Dierks Bently"], [2018, 4, 6], "7:00 PM", roselandTheater, "aa", "Country", 35);
var keithUrban = new Event(["Keith Urban"], [2018, 4, 8], "8:00 PM", wonderBallroom, "21", "Country", 50);
var mirandaLambert = var Event(["Miranda Lambert"], [2018, 4, 10], "6:00 PM", starTheater, "aa", "Country", 35);
var rascalFlats = new Event(["Rascal Flats"], [2018, 4, 12], "7:00 PM", wonderBallroom, "aa", "Country", 25);
