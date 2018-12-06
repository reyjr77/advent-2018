var array = [];
var lines = $("pre").innerHTML.split('\n');
var threeTimes = 0;
var twoTimes = 0;

for(var line = 0; line <= lines.length - 1; line++){
	  var string = lines[line];
	  array.push(string.split(''));
}

for (var i = 0; i <= array.length - 1; i++) {
	var threeCounted = false;
	var twoCounted = false;
	var sorted_arr = array[i].sort();
	
	for (var j = 0; j <= array[i].length - 1; j++) {
		var a = sorted_arr[j];
		var b = sorted_arr[j+1];
		var c = sorted_arr[j+2];

		if (a == b && b == c) {
			if (!threeCounted) {
				threeTimes++;
				threeCounted = true;
            		}
			j += 2;
        	}else if (a == b) {
			if (!twoCounted) {
				twoTimes++;
				twoCounted = true;
            		}
			j += 1;
        	}
	}
	
}

var check = twoTimes * threeTimes;
console.log(check);
