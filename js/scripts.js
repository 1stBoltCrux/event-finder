//Back-end Logic
var concertArray = [];





//rewrite as prototype?
function concertSearch(number){
  for (var i = 0; i < concertArray.length; i++) {
    if (concertArray[i].date === inputDateToNumber){
      return [i];
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

    console.log(inputDateToNumber);






  })
});
