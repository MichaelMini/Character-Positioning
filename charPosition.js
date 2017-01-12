var aString = "lighthouse in the house";


function countLetters(input) {
	var letterCounts = {};
	for ( var i = 0; i < input.length; i++ ) {

		var letter = input[i];

		if (letter === " ") {
			continue;
		}
		if (letterCounts[letter] === undefined) {
			letterCounts[letter] = i;
		} else {
			letterCounts[letter] = letterCounts[letter] + ', ' + i;
		}
	}



	return letterCounts;
}

var result = countLetters(aString);

console.log(result);
