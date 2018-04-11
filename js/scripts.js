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

function Venue(name, location, address) {
  this.name = name;
  this.location = location;
  this.address = address;
}


var concertArray = [];
var dateArray = [];
var areaArray = [];
var genreArray = [];
var ageArray = [];
var ageArrayBandCamel = [];

// VENUES //
var wonderBallroom = new Venue("Wonder Ballroom", "Northeast", "128 NE Russell St, Portland, OR 97212");
var theKnow = new Venue("The Know", "Northeast", "3728 NE Sandy Blvd, Portland, OR 97232");
var mississippiStudios = new Venue("Mississippi Studios", "Northeast", "3939 N Mississippi Ave, Portland, OR 97227");
var roselandTheater = new Venue("Roseland Theater", "Northwest", "8 NW 6th Ave, Portland, OR 97209");
var starTheater = new Venue("Star Theater", "Northwest", "13 NW 6th Ave, Portland, OR 97209");
var dougFir = new Venue("The Doug Fir Lounge", "Southeast", "830 E Burnside St, Portland, OR 97214");
var bunkBar = new Venue("Bunk Bar", "Southeast", "1028 SE Water Ave, Portland, OR 97214");
var analogCafe = new Venue("The Analaog Cafe", "Southeast", "720 SE Hawthorne Blvd, Portland, OR 97214");
var crystalBallroom = new Venue("The Crystal Ballroom", "Southwest", "1332 W Burnside St, Portland, OR 97209");
var dantes = new Venue("Dante's", "Southwest", "350 W Burnside St, Portland, OR 97209");
var schnitzer = new Venue("The Arlene Schnitzer Concert Hall", "Southwest", "1037 SW Broadway, Portland, OR 97205");

// COUNTRY //
var bradPaisley = new Event(["Brad Paisley"], [2018, 4, 2], "7:00 PM", crystalBallroom, "All Ages", "Country", 45, "imgs/country/bradpaisley.jpg");
concertArray.push(bradPaisley);
var dariusRucker = new Event(["Darius Rucker"], [2018, 4, 4], "7:00 PM", schnitzer, "21+", "Country", 70, "imgs/country/dariusrucker.jpg");
concertArray.push(dariusRucker);
var dierksBently = new Event(["Dierks Bently"], [2018, 4, 6], "7:00 PM", roselandTheater, "All Ages", "Country", 35, "imgs/country/dierksbently.jpg");
concertArray.push(dierksBently);
var keithUrban = new Event(["Keith Urban"], [2018, 4, 8], "8:00 PM", wonderBallroom, "21+", "Country", 50, "imgs/country/keithurban.jpg");
concertArray.push(keithUrban);
var mirandaLambert = new Event(["Miranda Lambert"], [2018, 4, 10], "6:00 PM", starTheater, "All Ages", "Country", 35, "imgs/country/mirandalambert.jpg");
concertArray.push(mirandaLambert);
var rascalFlats = new Event(["Rascal Flats"], [2018, 4, 12], "7:00 PM", wonderBallroom, "All Ages", "Country", 25, "imgs/country/rascalflats.jpg");
concertArray.push(rascalFlats);

//HIPHOP//
var asapRocky = new Event(["A$AP Rocky"], [2018, 4, 1], "7:00 PM", dantes, "21+", "Hip-Hop", 45, "imgs/hiphop/asaprocky.jpg");
concertArray.push(asapRocky);
var chanceTheRapper = new Event(["Chance the Rapper"], [2018, 4, 3], "9:00 PM", analogCafe, "21+", "Hip-Hop", 14, "imgs/hiphop/chancetherapper.jpg");
concertArray.push(chanceTheRapper);
var deLaSoul = new Event(["De La Soul"], [2018, 4, 7], "6:00 PM", dougFir, "All Ages", "Hip-Hop", 33, "imgs/hiphop/delasoul.jpg");
concertArray.push(deLaSoul);
var joeyBadass = new Event(["Joey Bada$$"], [2018, 4, 9], "8:00 PM", mississippiStudios, "All Ages", "Hip-Hop", 22, "imgs/hiphop/joeybadass.jpg");
concertArray.push(joeyBadass);
var kanyeWest = new Event(["Kanye West"], [2018, 4, 11], "7:00 PM", theKnow, "All Ages", "Hip-Hop", 90, "imgs/hiphop/kanyewest.jpg");
concertArray.push(kanyeWest);
var kendrickLamar = new Event(["Kendrick Lamar"], [2018, 4, 13], "9:00 PM", wonderBallroom, "21+", "Hip-Hop", 80, "imgs/hiphop/kendricklamar.jpg");
concertArray.push(kendrickLamar);
var pitBull = new Event(["Pitbull"], [2018, 4, 15], "7:00 PM", bunkBar, "All Ages", "Hip-Hop", 44, "imgs/hiphop/pitbull.jpg");
concertArray.push(pitBull);
var talibKweli = new Event(["Talib Kweli"], [2018, 4, 17], "8:00 PM", dougFir, "21+", "Hip-Hop", 35, "imgs/hiphop/talibkweli.jpg");
concertArray.push(talibKweli);
var tylerTheCreator = new Event(["Tyler the Creator"], [2018, 4, 19], "7:00 PM", starTheater, "21+", "Hip-Hop", 22, "imgs/hiphop/tylerthecreator.jpg");
concertArray.push(tylerTheCreator);
var vinceStaples = new Event(["Vince Staples"], [2018, 4, 21], "9:00 PM", roselandTheater, "All Ages", "Hip-Hop", 22, "imgs/hiphop/vincestaples.jpg");
concertArray.push(vinceStaples);

// ROCK //
var arcadeFire = new Event(["Arcade Fire"], [2018, 4, 14], "8:00 PM", wonderBallroom, "21+", "Rock", 45, "imgs/rock/arcadefire.jpg");
concertArray.push(arcadeFire);
var brokenSocialScene = new Event(["Broken Social Scene"], [2018, 4, 16], "9:00 PM", dougFir, "All Ages", "Rock", 20, "imgs/rock/brokensocialscene.jpg");
concertArray.push(brokenSocialScene);
var broncho = new Event(["Broncho"], [2018, 4, 18], "8:00 PM", theKnow, "21+", "Rock", 12, "imgs/rock/broncho.jpg");
concertArray.push(broncho);
var builtToSpill = new Event(["Built to Spill"], [2018, 4, 20], "8:00 PM", mississippiStudios, "21+", "Rock", 25, "imgs/rock/builttospill.jpg");
concertArray.push(builtToSpill);
var courtneyBarnett = new Event(["Courtney Barnett"], [2018, 4, 22], "7:00 PM", starTheater, "All Ages", "Rock", 30, "imgs/rock/courtneybarnett.jpg");
concertArray.push(courtneyBarnett);
var kingTuff = new Event(["King Tuff"], [2018, 4, 24], "9:00 PM", bunkBar, "21+", "Rock", 10, "imgs/rock/kingtuff.jpg");
concertArray.push(kingTuff);
var panicAtTheDisco = new Event(["Panic at the Disco"], [2018, 4, 26], "7:00 PM", analogCafe, "21+", "Rock", 45, "imgs/rock/panicatthedisco.jpg");
concertArray.push(panicAtTheDisco);
var shakeyGraves = new Event(["Shakey Graves"], [2018, 4, 28], "8:00 PM", dantes, "21+", "Rock", 15, "imgs/rock/shakeygraves.jpg");
concertArray.push(shakeyGraves);
var theeOhSees = new Event(["Thee Oh Sees"], [2018, 4, 30], "9:00 PM", roselandTheater, "21+", "Rock", 20, "imgs/rock/theeohsees.jpg");
concertArray.push(theeOhSees);
var theSword = new Event(["The Sword"], [2018, 4, 1], "9:00 PM", theKnow, "21+", "Rock", 12, "imgs/rock/thesword.jpg");
concertArray.push(theSword);
var violentFemmes = new Event(["Violent Femmes"], [2018, 4, 3], "7:00 PM", schnitzer, "21+", "Rock", 70, "imgs/rock/violentfemmes.jpg");
concertArray.push(violentFemmes);
var ziggyMarley = new Event(["Ziggy Marley"], [2018, 4, 5], "7:00 PM", mississippiStudios, "21+", "Rock", 35, "imgs/rock/ziggmarley.jpg");
concertArray.push(ziggyMarley);

// ELECTRONIC //
var bassNectar = new Event(["Bassnectar"], [2018, 4, 23], "7:00 PM", analogCafe, "All Ages", "Electronic", 45, "imgs/electronic/bassnectar.jpg");
concertArray.push(bassNectar);
var davidGuetta = new Event(["David Guetta"], [2018, 4, 25], "8:00 PM", crystalBallroom, "All Ages", "Electronic", 30, "imgs/electronic/davidguetta.jpg");
concertArray.push(davidGuetta);
var deadMaus = new Event(["Deadmaus"], [2018, 4, 27], "7:00 PM", roselandTheater, "All Ages", "Electronic", 50, "imgs/electronic/deadmaus.jpg");
concertArray.push(deadMaus);
var infectedMushroom = new Event(["Infected Mushroom"], [2018, 4, 29], "9:00 PM", wonderBallroom, "21+", "Electronic", 14, "imgs/electronic/infectedmushroom.jpg");
concertArray.push(infectedMushroom);
var prettyLights = new Event(["Pretty Lights"], [2018, 4, 1], "7:00 PM", dantes, "21+", "Electronic", 13, "imgs/electronic/prettylights.jpg");
concertArray.push(prettyLights);
var skrillex = new Event(["Skrillex"], [2018, 4, 3], "8:00 PM", theKnow, "21+", "Electronic", 42, "imgs/electronic/skrillex.jpg");
concertArray.push(skrillex);

// POP //
var adele = new Event(["Adele"], [2018, 4, 7], "9:00 PM", schnitzer, "All Ages", "Pop", 110, "imgs/pop/adele.jpg");
concertArray.push(adele);
var beyonce = new Event(["Beyonce"], [2018, 4, 9], "8:00 PM", crystalBallroom, "All Ages", "Pop", 120, "imgs/pop/beyonce.jpg");
concertArray.push(beyonce);
var brunoMars = new Event(["Bruno Mars"], [2018, 4, 11], "6:00 PM", crystalBallroom, "All Ages", "Pop", 100, "imgs/pop/brunomars.jpg");
concertArray.push(brunoMars);
var justinTimberlake = new Event(["Justin Timberlake"], [2018, 4, 13], "7:00 PM", schnitzer, "All Ages", "Pop", 80, "imgs/pop/justintimberlake.jpg");
concertArray.push(justinTimberlake);
var katyPerry = new Event(["Katy Perry"], [2018, 4, 15], "10:00 PM", dantes, "21+", "Pop", 90, "imgs/pop/katyperry.jpg");
concertArray.push(katyPerry);
var pink = new Event(["Pink"], [2018, 4, 17], "8:00 PM", dougFir, "21+", "Pop", 66, "imgs/pop/pink.jpg");
concertArray.push(pink);
var samSmith = new Event(["Sam Smith"], [2018, 4, 19], "7:00 PM", dougFir, "All Ages", "Pop", 45, "imgs/pop/samsmith.jpg");
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

//AGEARRAY TO CAMEL CASE
function ageArrayBandToCamel() {
  for (var i = 0; i < ageArray.length; i++) {
    ageArrayBandCamel.push(ageArray[i].bands[0].split(" ").join(""));
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
    ageArrayBandToCamel();
    console.log(dateArray);
    console.log(areaArray);
    console.log(genreArray);
    console.log(ageArray);
    console.log(ageArrayBandCamel);
    if (ageArray.length === 0){
      $("#concert-list").text('No shows currently match your search criteria.  ¯|_(ツ)_/¯');
    }
    for (var i = 0; i < ageArray.length; i++) {
      $("#concert-list").append('<div class="resultList">' +
                                  '<a href="#" data-toggle="modal" data-target=".' + ageArrayBandCamel[i] + '"><h3><span class="event-band-name' + ageArray[i].bands + '">' + ageArray[i].bands + '</span></h3></a>' +
                                  '<a href="#" data-toggle="modal" data-target=".' + ageArray[i].bands + '"><span class="event-image' + ageArray[i].bands +'"><img src="' + ageArray[i].image + '" alt="a band"></span></a>' +
                                  '<span class="event-date">' + ageArray[i].date + ' </span>' +
                                  '<span class="event-time">' + ageArray[i].time + ' </span>' +
                                  // '<span class="event-age">' + ageArray[i].age + ' </span>' +
                                  // '<span class="event-genre">' + ageArray[i].genre + ' </span>' +
                                  // '<span class="event-price">' + ageArray[i].price + ' </span>' +
                                  '<span class="event-venue">' + ageArray[i].venue.name + ' </span>' +
                                  // '<span class="event-location">' + ageArray[i].venue.location + ' </span>' +
                                '</div>' +
                                '<div class="modal fade ' + ageArrayBandCamel[i] + '">' +
                                  '<div class="modal-dialog">' +
                                    '<div class="modal-content">' +
                                      // <!-- Modal Header -->
                                      '<div class="modal-header">' +
                                        '<h4 class="modal-title">' + ageArray[i].bands + '</h4>' +
                                        '<button type="button" class="close" data-dismiss="modal">&times;</button>' +
                                      '</div>' +
                                      // <!-- Modal body -->
                                      '<div class="modal-body">' +
                                        '<img class="modalImage" src="' + ageArray[i].image + '" alt="">' +
                                        '<div>' +
                                          '<span class="event-date">' + ageArray[i].date + '</span>' +
                                          '<span class="event-time">' +ageArray[i].time + '</span>' +
                                          '<span class="event-age">' + ageArray[i].age + '</span>' +
                                          '<span class="event-genre">' + ageArray[i].genre + '</span>' +
                                          '<span class="event-price">' + ageArray[i].price + '</span>' +
                                          '<span class="event-venue">' + ageArray[i].venue.name + '</span>' +
                                          '<span class="event-location">' + ageArray[i].venue.location + '</span>' +
                                          // '<span class="event-image"><img src="' + ageArray[i].image + '" alt="a band"></span>' +
                                        '</div>' +
                                      '</div>' +

                                      // <!-- Modal footer -->
                                      '<div class="modal-footer">' +
                                        '<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>' +
                                      '</div>' +
                                    '</div>' +
                                  '</div>' +
                                '</div>');
    }
    $("#concert-list").show();
  });
});
