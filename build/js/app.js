(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(authorName) {
  this.author = authorName;
}

Entry.prototype.words = function(entry) {
  var result = 0;
  var splitEntry = entry.split(" ");
  result = splitEntry.length;
  return result;
};

Entry.prototype.vowels = function(entry) {
  var results = [];
  var vowelResult = 0;
  var consonantResult = 0;
  var vowels = ["a","e","i","o","u"];
  var splitEntry = entry.split("");
  for (var i = 0; i < splitEntry.length; i++) {
    if (splitEntry[i] === " " || splitEntry[i] === "." || splitEntry[i] === ",") {
      splitEntry.splice(i, 1);
    }
  }
  vowels.forEach(function(vowel) {
    for (var i = 0; i < splitEntry.length; i++) {
      if (splitEntry[i] === vowel){
        vowelResult += 1;
      }
    }
  });
  results.push(vowelResult, (splitEntry.length - vowelResult))
  return results;
};

Entry.prototype.firstSentence = function(entry) {
  var results = [];
  var splitEntry = entry.split(" ");
  for (var i = 0; i < 8; i++) {
    results.push(splitEntry[i]);
  }
  var results1 = results.join(" ");
  return results1;
};

exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
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

},{"./../js/journal.js":1}]},{},[2]);
