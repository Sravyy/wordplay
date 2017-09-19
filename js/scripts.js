$(function() {
  $("#formone").submit(function(event) {

    var sentence = $("input#sent").val();
    var sentenceArray= sentence.split(" ");
    var newSentenceArray = [];

    sentenceArray.forEach(function(word){
      if (word.length >= 3){
        newSentenceArray.push(word);
      }

    });

    newSentenceArray.reverse();
    var outputString = newSentenceArray.join(" ");
    $(".output").prepend(outputString);
    event.preventDefault();
  });

});
