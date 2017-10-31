

$(document).ready(function() {
  $("#blanks form").submit(function(event) {
 var array = [$("input#color").val(), $("input#animal").val(),$("input#food").val(), $("input#music").val()];// var colorInput =
  // console.log(array);
  // var colorInput = $("input#color").val();
  // var animalInput = $("input#animal").val();
  // var foodInput = $("input#food").val();
  // var musicInput = $("input#music").val();
var one = array[0];
var two = array[1];
var three = array[2];
var four = array[3];

$(".unstyled").append("<li>" + one);
$(".unstyled").append("<li>" + two);
$(".unstyled").append("<li>" + three);
$(".unstyled").append("<li>" + four);

  // $(".color").text(person1Input);
  //  $(".animal").text(person2Input);
  //  $(".food").text(animalInput);
  //  $(".music").text(musicInput);

     $(".results").show();

  //  var results = (colorInput && animalInput && foodInput && musicInput);
  event.preventDefault();
  });
  // console.log(array);
});
