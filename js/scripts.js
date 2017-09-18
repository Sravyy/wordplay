$(function() {
$("#formone").submit(function(event) {
event.preventDefault();

var input = $("input#sent").val();
$("#output").text(input);
var newArray= input.split(" ",3);

$("#output").show(newArray);

});



});
