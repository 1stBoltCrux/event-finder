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
