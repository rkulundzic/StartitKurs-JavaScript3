/*
3.1. Naći najveći element niza i ispisati u konzoli: "Najveći element niza je: ".
Npr. [23, 43, -8, 77, 0, 23, 15] > Najveći element niza je: 77
*/

var niz = [23, 43, -8, 77, 0, 23, 15];
var najveciElement = 0;

for (var i=0; i<niz.length; i++){
	if (niz[i]>najveciElement){
		najveciElement=niz[i]
	}
}
console.log(najveciElement);