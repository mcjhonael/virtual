// arreglo.forEach(()=>{})
/*
 * El callback se ejecuta tantas veces como elementos
 * tenga el arreglo, el callback recibe hasta 3 elementos
 * (elemento_actual, iteracion?, copia_del_arreglo?)=>{}
 */

let arreglo = ["Jorge", "Luis", "Karla", "Jane"];

arreglo.forEach((nombre) => {
  console.log(nombre);
  //! en cada vuelta pueden dibujar un producto
  //! en forma de card en el DOM para un E-COMMERCE
});

// ------ recorriendo peliculas
peliculas.forEach((objPelicula, i) => {
  console.log(`${i} : ${objPelicula.title}`);
  // Desventaja: No se pueden retornars elementoses
  // de la función forEach
});
//^ filter
/*
 * Funcion de los arreglos que recibe un callback en el cual
 * se pueden RETORNAR un arreglo de elementos de acuerdo a ciertas condiciones
 * Sirve como un filtro de elementos
 * Ejecuta el callback tantas veces como elementos tenga
 * (elemento_actual, iteracion?, copia_del_arreglo?)=>{}
 */
let numeros = [20, 1, 7, 82, 6, 9, 32, 10, 0, 45];

let mayoresIgualesQueDiez = numeros.filter((elemento, i, arreglo) => {
  if (elemento >= 10) {
    return elemento;
  }
});
console.log(mayoresIgualesQueDiez);

let peliculasExtranjeras = peliculas.filter((objPelicula) => {
  if (objPelicula.original_language !== "en") {
    return objPelicula;
  }
});
console.log(peliculasExtranjeras);