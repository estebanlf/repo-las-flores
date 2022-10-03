var readlineSync = require('readline-sync');
var nroDeseado = readlineSync.question('Escriba el numero que desea verificar si es mayor o no a 18: ');
if (nroDeseado > 20) {
    console.log('El número es mayor a 18: ' + nroDeseado);
}
else {
    console.log('El número es menor o igual a 18: ' + nroDeseado);
}
