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
