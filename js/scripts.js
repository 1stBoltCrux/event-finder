//BUSINESS LOGIC //
function  Event(bands, date, time, venue, age, genre, price, image) {
  this.bands = bands;
  this.date = date;
  this.time = time;
  this.venue = venue;
  this.age = age;
  this.genre = genre;
  this.price = price;
  this.image = image;
}

function Venue(name, location) {
  this.name = name;
  this.location = location;
}

var concertArray = [];
var dateArray = [];
var areaArray = [];
var genreArray = [];
var ageArray = [];

// VENUES //
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

// COUNTRY //
var bradPaisley = new Event(["Brad Paisley"], [2018, 4, 2], "7:00 PM", crystalBallroom, "aa", "Country", 45, "img/country/bradpaisley.jpg");
concertArray.push(bradPaisley);
var dariusRucker = new Event(["Darius Rucker"], [2018, 4, 4], "7:00 PM", schnitzer, "21", "Country", 70);
concertArray.push(dariusRucker);
var dierksBently = new Event(["Dierks Bently"], [2018, 4, 6], "7:00 PM", roselandTheater, "aa", "Country", 35);
concertArray.push(dierksBently);
var keithUrban = new Event(["Keith Urban"], [2018, 4, 8], "8:00 PM", wonderBallroom, "21", "Country", 50);
concertArray.push(keithUrban);
var mirandaLambert = new Event(["Miranda Lambert"], [2018, 4, 10], "6:00 PM", starTheater, "aa", "Country", 35);
concertArray.push(mirandaLambert);
var rascalFlats = new Event(["Rascal Flats"], [2018, 4, 12], "7:00 PM", wonderBallroom, "aa", "Country", 25);
concertArray.push(rascalFlats);

//HIPHOP//
var asapRocky = new Event(["A$AP Rocky"], [2018, 4, 1], "7:00 PM", dantes, "21", "Hiphop", 45);
concertArray.push(asapRocky);
var chanceTheRapper = new Event(["Chance the Rapper"], [2018, 4, 3], "9:00 PM", analogCafe, "21", "Hiphop", 14);
concertArray.push(chanceTheRapper);
var deLaSoul = new Event(["De La Soul"], [2018, 4, 7], "6:00 PM", dougFir, "aa", "Hiphop", 33);
concertArray.push(deLaSoul);
var joeyBadass = new Event(["Joey Bada$$"], [2018, 4, 9], "8:00 PM", mississippiStudios, "aa", "Hiphop", 22);
concertArray.push(joeyBadass);
var kanyeWest = new Event(["Kanye West"], [2018, 4, 11], "7:00 PM", theKnow, "aa", "Hiphop", 90);
concertArray.push(kanyeWest);
var kendrickLamar = new Event(["Kendrick Lamar"], [2018, 4, 13], "9:00 PM", wonderBallroom, "21", "Hiphop", 80);
concertArray.push(kendrickLamar);
var pitBull = new Event(["Pitbull"], [2018, 4, 15], "7:00 PM", bunkBar, "aa", "Hiphop", 44);
concertArray.push(pitBull);
var talibKweli = new Event(["Talib Kweli"], [2018, 4, 17], "8:00 PM", dougFir, "21", "Hiphop", 35);
concertArray.push(talibKweli);
var tylerTheCreator = new Event(["Tyler the Creator"], [2018, 4, 19], "7:00 PM", starTheater, "21", "Hiphop", 22);
concertArray.push(tylerTheCreator);
var vinceStaples = new Event(["Vince Staples"], [2018, 4, 21], "9:00 PM", roselandTheater, "aa", "Hiphop", 22);
concertArray.push(vinceStaples);

// ROCK //
var arcadeFire = new Event(["Arcade Fire"], [2018, 4, 14], "8:00 PM", wonderBallroom, "21", "Rock", 45);
concertArray.push(arcadeFire);
var brokenSocialScene = new Event(["Broken Social Scene"], [2018, 4, 16], "9:00 PM", dougFir, "aa", "Rock", 20);
concertArray.push(brokenSocialScene);
var broncho = new Event(["Broncho"], [2018, 4, 18], "8:00 PM", theKnow, "21", "Rock", 12);
concertArray.push(broncho);
var builtToSpill = new Event(["Built to Spill"], [2018, 4, 20], "8:00 PM", mississippiStudios, "21", "Rock", 25);
concertArray.push(builtToSpill);
var courtneyBarnett = new Event(["Courtney Barnett"], [2018, 4, 22], "7:00 PM", starTheater, "aa", "Rock", 30);
concertArray.push(courtneyBarnett);
var kingTuff = new Event(["King Tuff"], [2018, 4, 24], "9:00 PM", bunkBar, "21", "Rock", 10);
concertArray.push(kingTuff);
var panicAtTheDisco = new Event(["Panic at the Disco"], [2018, 4, 26], "7:00 PM", analogCafe, "21", "Rock", 45);
concertArray.push(panicAtTheDisco);
var shakeyGraves = new Event(["Shakey Graves"], [2018, 4, 28], "8:00 PM", dantes, "21", "Rock", 15);
concertArray.push(shakeyGraves);
var theeOhSees = new Event(["Thee Oh Sees"], [2018, 4, 30], "9:00 PM", roselandTheater, "21", "Rock", 20);
concertArray.push(theeOhSees);
var theSword = new Event(["The Sword"], [2018, 4, 1], "9:00 PM", theKnow, "21", "Rock", 12);
concertArray.push(theSword);
var violentFemmes = new Event(["Violent Femmes"], [2018, 4, 3], "7:00 PM", schnitzer, "21", "Rock", 70);
concertArray.push(violentFemmes);
var ziggyMarley = new Event(["Ziggy Marley"], [2018, 4, 5], "7:00 PM", mississippiStudios, "21", "Rock", 35);
concertArray.push(ziggyMarley);

// ELECTRONIC //
var bassNectar = new Event(["Bassnectar"], [2018, 4, 23], "7:00 PM", analogCafe, "aa", "Electronic", 45);
concertArray.push(bassNectar);
var davidGuetta = new Event(["David Guetta"], [2018, 4, 25], "8:00 PM", crystalBallroom, "aa", "Electronic", 30);
concertArray.push(davidGuetta);
var deadMaus = new Event(["Deadmaus"], [2018, 4, 27], "7:00 PM", roselandTheater, "aa", "Electronic", 50);
concertArray.push(deadMaus);
var infectedMushroom = new Event(["Infected Mushroom"], [2018, 4, 29], "9:00 PM", wonderBallroom, "21", "Electronic", 14);
concertArray.push(infectedMushroom);
var prettyLights = new Event(["Pretty Lights"], [2018, 4, 1], "7:00 PM", dantes, "21", "Electronic", 13);
concertArray.push(prettyLights);
var skrillex = new Event(["Skrillex"], [2018, 4, 3], "8:00 PM", theKnow, "21", "Electronic", 42);
concertArray.push(skrillex);

// POP //
var adele = new Event(["Adele"], [2018, 4, 7], "9:00 PM", schnitzer, "aa", "Pop", 110);
concertArray.push(adele);
var beyonce = new Event(["Beyonce"], [2018, 4, 9], "8:00 PM", crystalBallroom, "aa", "Pop", 120);
concertArray.push(beyonce);
var brunoMars = new Event(["Bruno Mars"], [2018, 4, 11], "6:00 PM", crystalBallroom, "aa", "Pop", 100);
concertArray.push(brunoMars);
var justinTimberlake = new Event(["Justin Timberlake"], [2018, 4, 13], "7:00 PM", schnitzer, "aa", "Pop", 80);
concertArray.push(justinTimberlake);
var katyPerry = new Event(["Katy Perry"], [2018, 4, 15], "10:00 PM", dantes, "21", "Pop", 90);
concertArray.push(katyPerry);
var pink = new Event(["Pink"], [2018, 4, 17], "8:00 PM", dougFir, "21", "Pop", 66);
concertArray.push(pink);
var samSmith = new Event(["Sam Smith"], [2018, 4, 19], "7:00 PM", dougFir, "aa", "Pop", 45);
concertArray.push(samSmith);

// SEARCH FILTER FUNCTIONS //
function dateMatchLoop(array, array2) {
  for (var i = 0; i < concertArray.length; i++) {
    if (concertArray[i].date[2]>= array[2] && concertArray[i].date[2] <= array2[2]) {
      dateArray.push(concertArray[i]);
    }
  }
}

function areaMatchLoop(string) {
  for (var i = 0; i < dateArray.length; i++) {
    if (string === "All Areas") {
      areaArray = dateArray;
    } else if (dateArray[i].venue.location === string) {
    areaArray.push(dateArray[i]);
    }
  }
}

function genreMatchLoop(string) {
  for (var i = 0; i < areaArray.length; i++) {
    if (string === "All Genres") {
      genreArray = areaArray;
    } else if (areaArray[i].genre === string) {
    genreArray.push(areaArray[i]);
    }
  }
}

function ageMatchLoop(string) {
  for (var i = 0; i < genreArray.length; i++) {
    if (string === "allShows") {
      ageArray = genreArray;
    } else if (genreArray[i].age === string) {
    ageArray.push(genreArray[i]);
    }
  }
}

// DATE STRING ARRAY TO NUMBER ARRAY //
var inputDateBeginToNumber = [];
var inputDateEndToNumber = [];
function dateToNumber(array, array2){
  array.forEach(function(element){
    array2.push(parseInt(element))
  });
}

//UI LOGIC //
$(document).ready(function(){
  $("#properties-search").submit(function(event){
  event.preventDefault();
    var inputDateBegin = $("#dateBegin").val().split("-");
    var inputDateEnd = $("#dateEnd").val().split("-");
    dateToNumber(inputDateBegin, inputDateBeginToNumber);
    dateToNumber(inputDateEnd, inputDateEndToNumber);
    var inputArea = $("#area").val();
    var inputGenre = $("#genre").val();
    var inputAge = $("#ages").val();

    dateMatchLoop(inputDateBeginToNumber, inputDateEndToNumber);
    areaMatchLoop(inputArea);
    genreMatchLoop(inputGenre);
    ageMatchLoop(inputAge);
    console.log(dateArray);
    console.log(areaArray);
    console.log(genreArray);
    console.log(ageArray);
    if (ageArray.length === 0){
      $("#concert-list").text('No shows currently match your search criteria.  ¯|_(ツ)_/¯');
    }
    for (var i = 0; i < ageArray.length; i++) {
      $("#concert-list").append('<div class="resultList">' +
                                  '<h3><span class="event-band-name">' + ageArray[i].bands + ' </span></h3>' +
                                  '<span class="event-date">' + ageArray[i].date + ' </span>' +
                                  '<span class="event-time">' + ageArray[i].time + ' </span>' +
                                  '<span class="event-age">' + ageArray[i].age + ' </span>' +
                                  '<span class="event-genre">' + ageArray[i].genre + ' </span>' +
                                  '<span class="event-price">' + ageArray[i].price + ' </span>' +
                                  '<span class="event-venue">' + ageArray[i].venue.name + ' </span>' +
                                  '<span class="event-location">' + ageArray[i].venue.location + ' </span>' +
                                  '<span class="event-image"><img src="' + ageArray[i].image + '" alt="a band"></span>' +
                                '</div>');
    }
    $("#concert-list").show();
  });
});
