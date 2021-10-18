//alert("hola arnulfo sabias que estas promagando y eres el mejor");
var c = document.getElementById("cuadrito");
var lienzo = c.getContext("2d");

dibujarLinea("green", 0, 0, 300, 300);
dibujarLinea("red", 0, 0, 0, 300);
dibujarLinea("green", 0, 0, 300, 300);
dibujarLinea("green", 0, 0, 300, 300);
dibujarLinea("green", 0, 0, 300, 300);

function dibujarLinea(color, xin, yin, xfin, yfin)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xin, yin);
    lienzo.lineTo(xfin, yfin);
    lienzo.stroke();
    lienzo.closePath();
}