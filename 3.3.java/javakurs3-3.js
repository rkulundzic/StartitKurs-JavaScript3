/*
Razvrstati elemente niza prema parnosti i smestiti ih u posebne nizove
Primer:
    var niz = [16, 23, 3, 78, 9, 14, 17];
Na kraju nam treba:
    var parni = [16, 78, 14];
    var neparni = [23, 3, 9, 17];
*/

var niz = [16, 23, 3, 78, 9, 14, 17];
var parni = [];
var neparni = [];

for (var i = 0; i < niz.length; i++) {
	if (niz[i]%2 == 0){
		parni.push(niz[i]);
	}
	else{
		neparni.push(niz[i]);
	}
}

console.log(parni);
console.log(neparni);