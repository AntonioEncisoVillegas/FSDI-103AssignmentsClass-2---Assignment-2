/*Fundamentos de programación JavaScript
Cree un programa donde:

- El usuario puede ingresar información como el nombre del
producto,
 la cantidad, el precio y el programa debe mostrar la 
 información en la consola.
  Utilice la indicación para obtener la información requerida.

-El sistema debe calcular el precio final agregando 
impuestos (como en México 
    el 16% de los impuestos ).

*** usa el Número ()*/ 

var codeName=prompt(" Product code "); 
var product=prompt("insert product name ");
var productprice=prompt(" insert price of the product ");
var totalplus=Number(productprice)*.16;
var total=Number(productprice+totalplus)

document.getElementById('msg').innerHTML = `<h2> User information </h2>
<p> <b> Name:   </b> ${codeName}</p>
<p> <b> Producut name:  </b> ${product}</p>
<p> <b> product price: </b> ${productprice}</p>
<p> <b>  iva = 16%: </b> ${totalplus}</p>
<p> <b>  Total: </b> ${total}</p>
`;


