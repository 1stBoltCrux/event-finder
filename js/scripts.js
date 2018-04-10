
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

var asapRocky = new Event(["A$AP Rocky"], [2018, 4, 1] "7:00 PM", dantes, "21", "Hiphop", 45);
var chanceTheRapper = new Event(["Chance the Rapper"], [2018, 4, 3], "9:00 PM", analogCafe, "21", "Hiphop", 14);
var deLaSoul = new Event(["De La Soul"], [2018, 4, 7], "6:00 PM", dougFir, "aa", "Hiphop", 33);
var joeyBadass = new Event(["Joey Bada$$"], [2018, 4, 9], "8:00 PM", mississippiStudios, "aa", "Hiphop", 22);
var kanyeWest = var Event(["Kanye West"], [2018, 4, 11], "7:00 PM", theKnow, "aa", "Hiphop", 90);
var kendrickLamar = new Event(["Kendrick Lamar"], [2018, 4, 13], "9:00 PM", wonderBallroom, "21", "Hiphop", 80);
var pitBull = new Event(["Pitbull"], [2018, 4, 15], "7:00 PM", bunkBar, "aa", "Hiphop", 44);
var talibKweli = new Event(["Talib Kweli"], [2018, 4, 17], "8:00 PM", dougFir, "21", "Hiphop", 35);
var tylerTheCreator = var Event(["Tyler the Creator"], [2018, 4, 19], "7:00 PM", starTheater, "21", "Hiphop", 22);
var vinceStaples = new Event(["Vince Staples"], [2018, 4, 21], "9:00 PM", roselandTheater, "aa", "Hiphop", 22);

var arcadeFire = new Event(["Arcade Fire"], [2018, 4, 14] "8:00 PM", wonderBallroom, "21", "Rock", 45);
var brokenSocialScene = new Event(["Broken Social Scene"], [2018, 4, 16], "9:00 PM", dougFir, "aa", "Rock", 20);
var broncho = new Event(["Broncho"], [2018, 4, 18], "8:00 PM", theKnow, "21", "Rock", 12);
var builtToSpill = new Event(["Built to Spill"], [2018, 4, 20], "8:00 PM", mississippiStudios, "21", "Rock", 25);
var courtneyBarnett = var Event(["Courtney Barnett"], [2018, 4, 22], "7:00 PM", starTheater, "aa", "Rock", 30);
var kingTuff = new Event(["King Tuff"], [2018, 4, 24], "9:00 PM", bunkBar, "21", "Rock", 10);
var panicAtTheDisco = new Event(["Panic at the Disco"], [2018, 4, 26], "7:00 PM", analogCafe, "21", "Rock", 45);
var shakeyGraves = new Event(["Shakey Graves"], [2018, 4, 28], "8:00 PM", dantes, "21", "Rock", 15);
var theeOhSees = var Event(["Thee Oh Sees"], [2018, 4, 30], "9:00 PM", roselandTheater, "21", "Rock", 20);
var theSword = new Event(["The Sword"], [2018, 4, 1], "9:00 PM", theKnow, "21", "Rock", 12);
var violentFemmes = var Event(["Violent Femmes"], [2018, 4, 3], "7:00 PM", schnitzer, "21", "Rock", 70);
var ziggyMarley = new Event(["Ziggy Marley"], [2018, 4, 5], "7:00 PM", mississippiStudios, "21", "Rock", 35);

var bassNectar = new Event(["Bassnectar"], [2018, 4, 23], "7:00 PM", analogCafe, "aa", "Electronic", 45);
var davidGuetta = new Event(["David Guetta"], [2018, 4, 25], "8:00 PM", crystalBallroom, "aa", "Electronic", 30);
var deadMaus = var Event(["Deadmaus"], [2018, 4, 27], "7:00 PM", roselandTheater, "aa", "Electronic", 50);
var infectedMushroom = new Event(["Infected Mushroom"], [2018, 4, 29], "9:00 PM", wonderBallroom, "21", "Electronic", 14);
var prettyLights = var Event(["Pretty Lights"], [2018, 4, 1], "7:00 PM", dantes, "21", "Electronic", 13);
var skrillex = new Event(["Skrillex"], [2018, 4, 3], "8:00 PM", theKnow, "21", "Electronic", 42);

var adele = new Event(["Adele"], [2018, 4, 7], "9:00 PM", schnitzer, "aa", "Pop", 110);
var beyonce = new Event(["Beyonce"], [2018, 4, 9], "8:00 PM", crystalBallroom, "aa", "Pop", 120);
var brunoMars = var Event(["Bruno Mars"], [2018, 4, 11], "6:00 PM", crystalBallroom, "aa", "Pop", 100);
var justinTimberlake = new Event(["Justin Timberlake"], [2018, 4, 13], "7:00 PM", schnitzer, "aa", "Pop", 80);
var katyPerry = var Event(["Katy Perry"], [2018, 4, 15], "10:00 PM", dantes, "21", "Pop", 90);
var pink = new Event(["Pink"], [2018, 4, 17], "8:00 PM", dougFir, "21", "Pop", 66);
var samSmith = new Event(["Sam Smith"]), [2018, 4, 19], "7:00 PM", dougFir, "aa", 45);

//Back-end Logic
var concertArray = [];

//rewrite as prototype?
function concertSearch(array){
  for (var i = 0; i < concertArray.length; i++) {
    console.log(concertArray[0].date[2]);
    console.log(array[2]);
    if (concertArray[i].date[2] === array[2]){
      return concertArray[i].name;
    }
  }
}

var inputDateToNumber = [];

function dateToNumber(array){
  array.forEach(function(element){
    inputDateToNumber.push(parseInt(element))
  });
}

//UI Logic
$(document).ready(function(){
  $("#properties-search").submit(function(event){
  event.preventDefault();
    var inputDate = $("#date").val().split("-");
    dateToNumber(inputDate);
    var inputArea = $("#area").val();
    var inputGenre = $("#genre").val();
    var inputAge = $("#allage").val();
    concertSearch(inputDateToNumber);
    $("#concert-list").append(concertSearch(inputDateToNumber));
    $("#concert-list").show();
    console.log(inputDateToNumber);
  })
});
