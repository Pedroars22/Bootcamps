let lines = gets().split('\n');

var N = parseInt(lines.shift());

for (let i = 1; i <= N; i++) {
	if (i  % 2 ==  0) print (i + '^2 = ' +  (i * i)); 
}