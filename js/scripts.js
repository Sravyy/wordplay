$(function() {
$("#formone").submit(function(event) {
event.preventDefault();

var input = $("input#sent").val();

console.log(input);
var newArray= input.split(" ",3);
$("#output").text(newArray);

$("#output").show();

});

});
