var a ,
	h,
	wynik;
 
 function getTriangleArea(a, h) {
	if(a > 0 && h >0) {
		wynik = a*h/2
	}else {
		alert('Nieprawidłowe dane')
	}
	return(wynik)
}

console.log(getTriangleArea(10, 6))

var triangle2Area = getTriangleArea(10, 65);
var triangle3Area = getTriangleArea(14, 15);
var triangle1Area = getTriangleArea(10, 1);

console.log(triangle2Area +'|'+ triangle3Area+'|'+ triangle1Area);