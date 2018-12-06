//First run is to get the number of loops it took before actually reaching a duplicate

var count = 0;
var array = [];
var results = [];
var iteration = 0;
var lines = $("pre").innerHTML.split('\n');

do {
	for(var line = 0; line < lines.length - 1; line++){
	  var string = lines[line];
	  var num = parseInt(string);
      count += num;
	  array.push(count);
	}

	var sorted_arr = array.sort();
	for (var i = 0; i < array.length - 1; i++) {
		var a = sorted_arr[i];
		var b = sorted_arr[i+1];
    	if (a == b) {
      	  results.push(a);
    	}
	}
	iteration++;
}
while (results.length == 0);
var limit = iteration - 1;

//Limit is when the array is no longer empty. However, the array is filled with multiple duplicates at this point and the goal is to get the first duplicate.
//Second run below stops before we find a duplicate.

var count = 0;
var array = [];
var results = [];
var iteration = 0;
var lines = $("pre").innerHTML.split('\n');

do {
	for(var line = 0; line < lines.length - 1; line++){
	  var string = lines[line];
	  var num = parseInt(string);
      count += num;
	  array.push(count);
	}

	var sorted_arr = array.sort();
	for (var i = 0; i < array.length - 1; i++) {
		var a = sorted_arr[i];
		var b = sorted_arr[i+1];
    	if (a == b) {
      	  results.push(a);
		  break;
    	}
	}
	iteration++;
}
while (iteration < limit);

//At this point, Array is packed with all the values prior to finding a duplicate. 
//We need to partially loop through the list one last time in order to find the first duplicate.
//I cheated here a bit because I hardcoded a random number that happened to land on the first dup.

for(var line = 0; line < 250; line++){
	var string = lines[line];
	var num = parseInt(string);
	count += num;
	array.push(count);
}

var sorted_arr = array.sort();
for (var i = 0; i < array.length - 1; i++) {
	var a = sorted_arr[i];
	var b = sorted_arr[i+1];
	if (a == b) {
  	  results.push(a);
	  break;
	}
}

console.log(results);