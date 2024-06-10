
function calcularTriangulo() {
     lado1 = parseFloat(document.getElementById("lado1").value);
     lado2 = parseFloat(document.getElementById("lado2").value);
     lado3 = parseFloat(document.getElementById("lado3").value);
     altura = parseFloat(document.getElementById("altura").value);
  
      // Verificar si se han ingresado todos los datos
  if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || isNaN(altura)) {
    document.getElementById("resultado").innerHTML = "Por favor ingresa todos los datos.";
    return;
  }
     perimetro = lado1 + lado2 + lado3;
     area = (lado1 * altura) / 2;
  
    document.getElementById("resultado").innerHTML = "El Perímetro es: " 
    + perimetro + "<br />El Área es: " + area;
    // Aplicar estilo rojo a los resultados
  document.getElementById("resultado").style.color = "red";
  document.getElementById("resultado").style.fontWeight = "bold";
  }
  function calcularRectangulo() {
    baserec= parseFloat(document.getElementById("baserec").value);
    Altrec = parseFloat(document.getElementById("Altrec").value);
   
     // Verificar si se han ingresado todos los datos
 if (isNaN(baserec) || isNaN(Altrec)) {
   document.getElementById("resultado").innerHTML = "Por favor ingresa todos los datos.";
  return;
 }
    perimetro = 2 * (baserec + Altrec);
    area = (baserec * Altrec);
 
   document.getElementById("resultado").innerHTML = "El Perímetro es: " 
   + perimetro + "<br />El Área es: " + area;
   // Aplicar estilo rojo a los resultados
  document.getElementById("resultado").style.color = "blue";
  document.getElementById("resultado").style.fontWeight = "bold";
 }
 function calcularCuadrado() {
  basecua= parseFloat(document.getElementById("basecua").value);
  
   // Verificar si se han ingresado todos los datos
if (isNaN(basecua)) {
 document.getElementById("resultado").innerHTML = "Por favor ingresa todos los datos.";
return;
}
  perimetro = 4 * basecua ;
  area = basecua * basecua;

 document.getElementById("resultado").innerHTML = "El Perímetro es: " 
 + perimetro + "<br />El Área es: " + area;
 // Aplicar estilo rojo a los resultados
 document.getElementById("resultado").style.color = "yellow";
 document.getElementById("resultado").style.fontWeight = "bold";
}
function calcularCirculo() {
  radio= parseFloat(document.getElementById("radio").value);
  
 
   // Verificar si se han ingresado todos los datos
if (isNaN(radio)) {
 document.getElementById("resultado").innerHTML = "Por favor ingresa todos los datos.";
return;
}
  perimetro = 2 * 3.14159 * radio;
  area = 3.14159 * radio*radio ;

 document.getElementById("resultado").innerHTML = "La Circuferencia es: " 
 + perimetro + "<br />El Área es: " + area;
 // Aplicar estilo rojo a los resultados
 document.getElementById("resultado").style.color = "green";
 document.getElementById("resultado").style.fontWeight = "bold";
}
function limpiar() {
  document.getElementById("lado1").value="";
  document.getElementById("lado2").value="";
  document.getElementById("lado3").value="";
  document.getElementById("altura").value="";
  document.getElementById("baserec").value="";
  document.getElementById("Altrec").value="";
  document.getElementById("basecua").value="";
  document.getElementById("radio").value ="";  
  document.getElementById("resultado").innerHTML = "";  
  document.getElementById("resultado").style.color = "initial";
  document.getElementById("resultado").style.fontWeight = "normal";
}