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

console.log(lienzo);

var draw = document.getElementById("formita");
		if (draw && draw.getContext) {
		var lienzo = draw.getContext("2d");
			if (lienzo) {

                    var X = draw.width/2;
                    var Y = draw.height/2;
                   
                    var r = 50;
                    lienzo.arc(X,Y,r,0,2*Math.PI);
            
                
                   	lienzo.strokeStyle = "#000";
					lienzo.fillStyle = "#000";
					lienzo.lineWidth = 2;
					lienzo.fill();
                    lienzo.stroke();
                    var xi, yi, yf, xf;
                    
                    var lineas = 30;
                    var contador_l = 0;

                    while(contador_l < lineas)
                    {
                        yi = 10 * contador_l;
                        xf = 10 * (contador_l + 1);
                        yf = 10 * contador_l;
                        xi = 10 * (contador_l + 1);

                        nxf = 300 - xf;
                        nyf = 300 - yf;

                        dibujaLinea("#ea2d00", xi, 300, 300, nyf);
                        dibujaLinea("#ea2d00", 0, yi, xf, 300);
                        // dibujaLinea("blue", 300, yi, xf, 0);
                        // dibujaLinea("pink", 0 , xf, nxf, 0);
             
                        console.log("Linea", contador_l);
                        contador_l ++;
                    }
                    for(contador_l=0; contador_l < lineas; contador_l ++ )
                    {
                        yi = 10 * contador_l;
                        xf = 10 * (contador_l + 1);
                        yf = 10 * contador_l;
                        xi = 10 * (contador_l + 1);

                        nxf = 300 - xf;
                        nyf = 300 - yf;

                        // dibujaLinea("red", xi, 300, 300, nyf);
                        // dibujaLinea("cyan", 0, yi, xf, 300);
                        dibujaLinea("#ea2d00", 300, yi, xf, 0);
                        dibujaLinea("#ea2d00", 0 , xf, nxf, 0);
                        console.log("Linea", contador_l);
                        
                    }
			}
	}

dibujaLinea("yellow", 0, 0, 0, 300);
dibujaLinea("yellow", 300, 0, 0, 0);
dibujaLinea("yellow", 0, 300, 300, 300);
dibujaLinea("yellow", 300, 300, 300, 0);
// dibujaLinea("blue", 0, 10, 20, 300);
// dibujaLinea("blue", 250, 250, 250, 15);
// dibujaLinea("blue", 360, 250, 140, 250);