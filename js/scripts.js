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

function Bands()

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
