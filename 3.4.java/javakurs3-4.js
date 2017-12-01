/*
3.4. Cene različitih proizvoda su zadate u vidu niza. 
Za proizvode čija je cena manja od 50 dodati porez od 18% u suprotnom porez od 8%. 
Izračunati krajnji trošak (sabrati cene i njihov porez). 
cene = [5, 145, 69, 56, 13, 456, 78, 4, 30].
*/

var cene = [5, 145, 69, 56, 13, 456, 78, 4, 30];
var cenePorez = [];

for (var i = 0; i < cene.length; i++) {
	if (cene[i] < 50){
		cenePorez.push(Math.round(cene[i] * 1.18));
	}
	else{
		cenePorez.push(Math.round(cene[i] *1.08));
	}
}

console.log(cenePorez);