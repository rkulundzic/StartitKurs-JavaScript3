/*
3.2.Dupliranjem elemenata niza napraviti drugi niz.
Npr:
var prviNiz = [7, 15, 45, 78, 20, 9]; 
drugi niz bi trebalo da sadrži vrednosti 14, 30, 90, 156, 40, 18
*/

var prviNiz = [7, 15, 45, 78, 20, 9];
var dupliranNiz = [];

for (var i = 0; i < prviNiz.length; i++) {
	dupliranNiz.push(prviNiz[i] * 2);
}

console.log(dupliranNiz);