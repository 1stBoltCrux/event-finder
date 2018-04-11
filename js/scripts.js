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
  this.showInfo = "Lorem ipsum dolor sit amet, consectetur GREAT BAND adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute CLEAN BATHROOMS irure dolor in reprehenderit in voluptate velit CHEAP DRINKS esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt GUARANTEED TO GET SOME mollit anim id est laborum."
}

function Venue(name, location, address1, address2, website) {
  this.name = name;
  this.location = location;
  this.address1 = address1;
  this.address2 = address2;
  this.website = website;
}


var concertArray = [];


// VENUES //
var wonderBallroom = new Venue("Wonder Ballroom", "Northeast", "128 NE Russell St.", "Portland, OR 97212", "https://www.wonderballroom.com/");
var theKnow = new Venue("The Know", "Northeast", "3728 NE Sandy Blvd.", "Portland, OR 97232", "http://www.theknowpdx.com/");
var mississippiStudios = new Venue("Mississippi Studios", "Northeast", "3939 N Mississippi Ave.", "Portland, OR 97227", "https://www.mississippistudios.com/");
var roselandTheater = new Venue("Roseland Theater", "Northwest", "8 NW 6th Ave.", "Portland, OR 97209", "http://roselandpdx.com/");
var starTheater = new Venue("Star Theater", "Northwest", "13 NW 6th Ave.", "Portland, OR 97209", "http://startheaterportland.com/");
var dougFir = new Venue("The Doug Fir Lounge", "Southeast", "830 E Burnside St.", "Portland, OR 97214", "https://www.dougfirlounge.com/");
var bunkBar = new Venue("Bunk Bar", "Southeast", "1028 SE Water Ave.", "Portland, OR 97214", "http://www.bunksandwiches.com/shows/");
var analogCafe = new Venue("The Analog Cafe", "Southeast", "720 SE Hawthorne Blvd.", "Portland, OR 97214", "http://www.analogpdx.com/");
var crystalBallroom = new Venue("The Crystal Ballroom", "Southwest", "1332 W Burnside St.", "Portland, OR 97209", "https://www.crystalballroompdx.com/");
var dantes = new Venue("Dante's", "Southwest", "350 W Burnside St.", "Portland, OR 97209", "https://danteslive.com/");
var schnitzer = new Venue("The Arlene Schnitzer", "Southwest", "1037 SW Broadway", "Portland, OR 97205", "https://www.portland5.com/arlene-schnitzer-concert-hall");

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
var asapRocky = new Event(["ASAP Rocky"], [2018, 4, 1], "7:00 PM", dantes, "21+", "Hip-Hop", 45, "imgs/hiphop/asaprocky.jpg");
concertArray.push(asapRocky);
var chanceTheRapper = new Event(["Chance the Rapper"], [2018, 4, 3], "9:00 PM", analogCafe, "21+", "Hip-Hop", 14, "imgs/hiphop/chancetherapper.jpg");
concertArray.push(chanceTheRapper);
var deLaSoul = new Event(["De La Soul"], [2018, 4, 7], "6:00 PM", dougFir, "All Ages", "Hip-Hop", 33, "imgs/hiphop/delasoul.jpg");
concertArray.push(deLaSoul);
var joeyBadass = new Event(["Joey Badass"], [2018, 4, 9], "8:00 PM", mississippiStudios, "All Ages", "Hip-Hop", 22, "imgs/hiphop/joeybadass.jpg");
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
var ziggyMarley = new Event(["Ziggy Marley"], [2018, 4, 5], "7:00 PM", mississippiStudios, "21+", "Rock", 35, "imgs/rock/ziggymarley.jpg");
concertArray.push(ziggyMarley);

// ELECTRONIC //
var bassNectar = new Event(["Bassnectar"], [2018, 4, 23], "7:00 PM", analogCafe, "All Ages", "Electronic", 45, "imgs/electronic/bassnectar.jpg");
concertArray.push(bassNectar);
var davidGuetta = new Event(["David Guetta"], [2018, 4, 25], "8:00 PM", crystalBallroom, "All Ages", "Electronic", 30, "imgs/electronic/davidguetta.jpg");
concertArray.push(davidGuetta);
var deadMaus = new Event(["Deadmaus"], [2018, 4, 27], "7:00 PM", roselandTheater, "All Ages", "Electronic", 50, "imgs/electronic/deadmaus.jpg");
concertArray.push(deadMaus);
var infectedMushroom = new Event(["Infected Mushroom"], [2018, 4, 29], "9:00 PM", wonderBallroom, "21+", "Electronic", 14, "imgs/electronic/infectedmushrooms.jpg");
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
  var dateArray = [];
  for (var i = 0; i < concertArray.length; i++) {
    if (concertArray[i].date[2]>= array[2] && concertArray[i].date[2] <= array2[2]) {
      dateArray.push(concertArray[i]);
    }
  }
  return dateArray;
}

function areaMatchLoop(string, array) {
  var areaArray = [];
  for (var i = 0; i < array.length; i++) {
    if (string === "All Areas") {
      areaArray = array;
    } else if (array[i].venue.location === string) {
    areaArray.push(array[i]);
    }
  }
  return areaArray;
}

function genreMatchLoop(string, array) {
  var genreArray = [];
  for (var i = 0; i < array.length; i++) {
    if (string === "All Genres") {
      genreArray = array;
    } else if (array[i].genre === string) {
    genreArray.push(array[i]);
    }
  }
  return genreArray;
}

function ageMatchLoop(string, array) {
  var ageArray = [];
  for (var i = 0; i < array.length; i++) {
    if (string === "allShows") {
      ageArray = array;
    } else if (array[i].age === string) {
    ageArray.push(array[i]);
    }
  }
  return ageArray;
}

//AGEARRAY ORDERED CHRONOLOGICALLY
function ageArrayOrder(array) {
  array.sort(function(a,b) {
    return a.date[2] - b.date[2];
  });
}


//AGEARRAY TO CAMEL CASE
function ageArrayBandToCamel(array) {
  ageArrayBandCamel = [];
  for (var i = 0; i < array.length; i++) {
    ageArrayBandCamel.push(array[i].bands[0].split(" ").join(""));
  }
  return ageArrayBandCamel;
}

//DATE MONTH NUMBER TO STRING
function monthNumberToString(array) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].date[1] === 4) {
      array[i].date[1] = "April";
    }
  }
}

//CLEAR ARRAYS
function clearFields() {
  dateArray = [];
  areaArray = [];
  genreArray = [];
  ageArray = [];
  ageArrayBandCamel = [];
}

// DATE STRING ARRAY TO NUMBER ARRAY //
function dateToNumber(array, array2){
  array.forEach(function(element){
    array2.push(parseInt(element))
  });
  return array2;
}

//UI LOGIC //
$(document).ready(function(){
  $("#properties-search").submit(function(event){
  event.preventDefault();
    $(".list-div").remove();
    var inputDateBeginToNumber = [];
    var inputDateEndToNumber = [];
    var inputDateBegin = $("#dateBegin").val().split("-");
    var inputDateEnd = $("#dateEnd").val().split("-");
    dateToNumber(inputDateBegin, inputDateBeginToNumber);
    dateToNumber(inputDateEnd, inputDateEndToNumber);
    var inputArea = $("#area").val();
    var inputGenre = $("#genre").val();
    var inputAge = $("#ages").val();
    var dateArray = dateMatchLoop(inputDateBeginToNumber, inputDateEndToNumber);
    var areaArray = areaMatchLoop(inputArea, dateArray);
    var genreArray = genreMatchLoop(inputGenre, areaArray);
    var ageArray = ageMatchLoop(inputAge, genreArray);
    ageArrayOrder(ageArray);
    var ageArrayBandCamel = ageArrayBandToCamel(ageArray);
    monthNumberToString(ageArray);
    console.log(dateArray);
    console.log(areaArray);
    console.log(genreArray);
    console.log(ageArray);
    console.log(ageArrayBandCamel);
    if (ageArray.length === 0){
      $("#concert-list").text('No shows currently match your search criteria.  ¯|_(ツ)_/¯');
    }
    for (var i = 0; i < ageArray.length; i++) {

      $("#concert-list").append('<div class="card list-div" id="resultCard" style="width: 18rem;">' +
                                  '<a href="#" data-toggle="modal" data-target=".' + ageArrayBandCamel[i] + '"><span class="event-image' + ageArray[i].bands +'"><img class="card-img-top" id="resultImg" src="' + ageArray[i].image + '" alt="a band"></span></a>' +
                                  '<div class="card-body" id="resultText">' +
                                    '<a href="#" data-toggle="modal" data-target=".' + ageArrayBandCamel[i] + '"><h3><span class="event-band-name' + ageArray[i].bands + '">' + ageArray[i].bands + '</span></h3></a><br>' +
                                    '<span class="event-venue lead"><a href="' + ageArray[i].venue.website + '">' + ageArray[i].venue.name + '</a></span><br>' +
                                    '<span class="event-date">' + ageArray[i].date[1] + ' ' + ageArray[i].date[2] + ', ' + ageArray[i].date[0] + ' </span><br>' +
                                    '<span class="event-time">' + ageArray[i].time + ' </span>' +
                                  '</div>' +
                                  '<div class="modal fade ' + ageArrayBandCamel[i] + '">' +
                                    '<div class="modal-dialog">' +
                                      '<div class="modal-content">' +
                                        // <!-- Modal Header -->
                                        '<div class="modal-header return-modal-header">' +
                                          '<h4 class="modal-title">' + ageArray[i].bands + '<span class="title-venue"> @ ' + ageArray[i].venue.name +  '</span></h4>' +
                                          '<button type="button" class="close return-close" data-dismiss="modal">&times;</button>' +
                                        '</div>' +
                                        // <!-- Modal body -->
                                        '<div class="modal-body listModal">' +
                                          '<div class="listModalImageContainer">' +
                                            '<img class="modalImage" src="' + ageArray[i].image + '" alt="">' +
                                          '</div>' +
                                          '<div class="row show-info">' +
                                            '<div class="col left">' +
                                              '<span class="event-date">' + ageArray[i].date[1] + ' ' + ageArray[i].date[2] + ', ' + ageArray[i].date[0] + '</span><br>' +
                                              '<span class="event-time">' + ageArray[i].time + '</span><br>' +
                                              '<span class="event-price float-left"> $' + ageArray[i].price + '</span>' +
                                              '<span class="event-age float-right">' + ageArray[i].age + '</span><br>' +
                                            '</div>' +
                                            '<div class="col right">' +
                                              '<span class="event-venue"><a href="' + ageArray[i].venue.website + '">' + ageArray[i].venue.name + '</a></span><br>' +
                                              '<span class="event-venue-address1">' + ageArray[i].venue.address1 + ' </span><br>' +
                                              '<span class="event-venue-address2">' + ageArray[i].venue.address2 + ' </span><br>' +
                                            '</div>' +
                                          '</div>' +
                                          '<div class="row show-info">' +
                                            '<h5 class="bold"> Show Info:</h5><br>' +
                                            '<span>' + ageArray[i].showInfo + '</span>' +
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
