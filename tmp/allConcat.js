var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var entry = $('#entry').val();
    console.log(entry);
    var dailyEntry = new Entry("George");
    var output = [];
    output.push("Number of words in Entry:" + dailyEntry.words(entry));
    output.push("Number of vowels in Entry:" + dailyEntry.vowels(entry)[0]);
    output.push("Number of consonants in Entry:" + dailyEntry.vowels(entry)[1]);
    output.push("Entry Teaser:" + dailyEntry.firstSentence(entry));
    output.forEach(function(element) {
      $('#solution').append('<li>' + element + '</li>');
      console.log(element);
    });
  });
});
