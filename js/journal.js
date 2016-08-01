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
