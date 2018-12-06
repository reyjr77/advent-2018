var count = 0;
var lines = $("pre").innerHTML.split('\n');

for(var line = 0; line < lines.length - 1; line++){
	var string = lines[line];
	var num = parseInt(string);
	count += num;
}

console.log(count);