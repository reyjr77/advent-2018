var array = [];
var lines = $("pre").innerHTML.split('\n');
var baseChar = lines[0].charAt(0);
var firstLetters = [baseChar];
var sortedArray = [];
var matchArray = [];
var answer;

function return_answer(){
	matchArray = answer.split(',');
	answer = "";
	for (var i = 0; i < matchArray.length; i++) {
		answer += matchArray[i];
	}
}

function solved_words(base, guess) {
	matchArray = base.split('');

	for (var i in base) {
		if (base[i] != guess[i]) {
			matchArray.splice([i], 1);
			answer = matchArray.toString();
			return_answer();
		}
	}
}

function find_likeness(base, guess) {
	count = 0;
	    
	for (var i in base) {
		if (base[i] == guess[i]) {
			count++;
		}
	}

	if (count == base.length - 1) {
		if ( !matchArray.includes(base) ) { 
			matchArray.push(base, guess);
			solved_words(base, guess);
		}
	} else { return count;}
}

for (var i = 0; i < lines.length - 1; i++) {
	if (baseChar != lines[i].charAt(0)){
		if ( !firstLetters.includes(lines[i].charAt(0)) ) { firstLetters.push(lines[i].charAt(0)); }
    }
	array.push(lines[i]);
}

for (var i = 0; i < firstLetters.length; i++) {
	var tempArray = [];

	for (var j = 0; j < array.length; j++) {
		if ( firstLetters[i] == array[j].charAt(0) ) { tempArray.push(array[j]); }
    }

	sortedArray[firstLetters[i]] = tempArray;
}

for (var letter in sortedArray) {
	for (var i = 0; i < sortedArray[letter].length; i++) {
		for (var j = 0; j < sortedArray[letter].length; j++) {
			find_likeness( sortedArray[letter][i], sortedArray[letter][j] );
        }
	}
}


console.log(answer);
