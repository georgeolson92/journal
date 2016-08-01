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
  var result = 0;
  var vowels = ["a","e","i","o","u"];
  var splitEntry = entry.split("");
  for (var i = 0; i < splitEntry.length; i++) {
    if (vowels.indexOf(splitEntry[i] > -1)) {
      result += 1;
    }
  }
  return result;
};
//
// Entry.prototype.consonants = function(entry) {
//   var result = 0;
//
// }
//
// Entry.prototype.firstSentence = function(entry) {
//   var result = '';
//
// }

exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
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

},{"./../js/journal.js":1}]},{},[2]);
