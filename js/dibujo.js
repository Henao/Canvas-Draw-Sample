// alert("Dibujemos!!!");
function dibujaLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}


// var draw = document.getElementById('dibujito');
// var lienzo = draw.getContext('2d');
console.log(lienzo);

var draw = document.getElementById("dibujito");
		if (draw && draw.getContext) {
		var lienzo = draw.getContext("2d");
			if (lienzo) {
					var X = draw.width/2;
					var Y = draw.height/1.7;
					var r = 69.5;
					lienzo.strokeStyle = "#000";
					lienzo.fillStyle = "#fff";
					lienzo.lineWidth = 8;
					lienzo.arc(X,Y,r,0,2*Math.PI);
					lienzo.fill();
					lienzo.stroke();
			}
		}

dibujaLinea("#000", 140, 250, 250, 15);
dibujaLinea("#000", 360, 250, 250, 15);
dibujaLinea("#000", 250, 250, 250, 15);
dibujaLinea("#000", 360, 250, 140, 250);