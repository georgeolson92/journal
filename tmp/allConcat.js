var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function(){
  $('#journal').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var entry = $('#entry').val();
    var dailyEntry = new Entry("George");
    var output = [];
    output.push("Number of words in Entry:" + dailyEntry.words(entry));
    output.push("Number of vowels in Entry:" + dailyEntry.vowels(entry));
    // output.push("Number of consonants in Entry:" + dailyEntry.consonants(entry));
    // output.push("Entry Teaser:" + dailyEntry.firstSentence(entry));
    output.forEach(function(element) {
      $('#solution').append('<li>' + element + '</li>');
    });
  });
});
