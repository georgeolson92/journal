var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function(){
  $('#journal-form').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    console.log(title);
    var entry = $('#entry').val();
    console.log(entry);
    var dailyEntry = new Entry("George");
    var output = [];
    output.push("Number of words in Entry:" + dailyEntry.words(entry));
    console.log(output);
    output.push("Number of vowels in Entry:" + dailyEntry.vowels(entry));
    console.log(output);
    // output.push("Number of consonants in Entry:" + dailyEntry.consonants(entry));
    // output.push("Entry Teaser:" + dailyEntry.firstSentence(entry));
    output.forEach(function(element) {
      $('#solution').append('<li>' + element + '</li>');
      console.log(element);
    });
  });
});
