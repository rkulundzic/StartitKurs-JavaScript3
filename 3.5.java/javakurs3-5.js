/*
3.5. Napisati program koji će za unetu reč proveriti da li je palindrom.
Palindromi su reči koje se mogu čitati i sa leva na desno i sa desna na 
levo sa istim značenjem. 
Npr:
- ana
- anna
- anana
- anavolimilovana
*/

var unos = prompt('Unesi rec i saznaj da li je palindrom:');
var rec = unos.toLowerCase();

for (var i = 0; i < rec.length; i++) {
	if (rec[i] == rec[rec.length - 1 - i]){
		console.log('Uneta reč je palindrom.');
	}
	else {
		console.log('Uneta reč nije palindrom.');
	}
}

