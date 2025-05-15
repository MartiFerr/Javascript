Arrays: Operaciones

//1 Creación de un arreglo
let colores = ["Blanco", "Negro", "Azul", "Rosa", "Rojo"]
//2 Acceso a elementos
let primero = colores[0];
console.log ("Primer Elemento" + colores[0])
console.log("Ultimo Elemeto" + colores[colores.length - 1])
//3 Tamaño del arreglo
console.log ("El tamaño del arreglo es" + [colores.length - 1])
//4 Agregar al final
colores.push("Celeste")
console.log (colores [colores.length - 1])
//5 Agregar al inicio
colores.unshift("Gris")
console.log (colores[0])
//6 Eliminar del final
colores.pop()
console.log (colores)
//7 Eliminar del principio
colores.shift()
console.log (colores)
//8 Reemplazo de un valor
colores[1] = "Amarillo"
console.log (colores)
//9 Recorrido del arreglo
array1.forEach((colores) => console.log(colores));
let nuevosColores = [];
//10 Desafío creativo
{
  let color = prompt(`Ingresa el color`);
  nuevosColores.push(color);
}

console.log("Colores ingresados:", nuevosColores);







