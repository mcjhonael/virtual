/*
 * Los nombres de las clases deben iniciar con una Mayúscula
 */
class Restaurant {
  aforo;
  nroMesas;
  direccion;
  categoria;
  telefonos;
  nombre;
  delivery;
  tipificacion;
  //? Funcion que se ejecuta automaticamente al momento de crear un objeto puedo decir que el constructor es como un modeo que va tener al incio nuestro objeto osea valores por defecto cuano instanciamos un nuevo objeto
  //?la convencio indica creal con _
  //? si nos damos cuenta el constructor recibe cmo parametros estas atributos y valores por defecto entonces para poder asignar los valores tenermos que hacerlo dentro del constructor y como hemos dicho el metodo this ayudara a obtener las propiedades y poder asignarle el valor que se le fue enviado por el constructor
  constructor(
    _aforo = 0,
    _nroMesas = 0,
    _direccion = "Sin Dirección",
    _categoria = "Sin Categoria",
    _telefonos = [],
    _nombre = "Sin Nombre",
    _delivery = false
  ) {
    //^ this : acceder al scope interno de la clase solo dentro de la clase podemos usar el metodo this
    //^ this: se usa para acceder a los atributos y métodos de la clase.
    //^ mira aqui estamos asignando a los atributos que hemos colocado en la clase el valor del constructor para que sea por defecto
    this.aforo = _aforo;
    this.nroMesas = _nroMesas;
    this.direccion = _direccion;
    this.categoria = _categoria;
    this.telefonos = _telefonos;
    this.nombre = _nombre;
    this.delivery = _delivery;

    if (this.aforo > 500) {
      this.tipificacion = "A";
    } else if (this.aforo > 300) {
      this.tipificacion = "B";
    } else {
      this.tipificacion = "C";
    }
  }
  //^ creacion de un metodo que se encarga de mostrar los telefonos
  imprimirTelefonos() {
    console.log(`Teléfonosombr del restaurant: ${this.ne}`);
    for (let i = 0; i < this.telefonos.length; i++) {
      console.log(`📞 ${this.telefonos[i]}`);
    }
  }

  imprimirTelefonos2() {
    for (const tel of this.telefonos) {
      console.log(`Telefono: ${tel}`);
    }
  }

  toString() {
    return this.nombre;
  }
}
//! fin de la clase

//& ya vimos en la clase sus atributos, constructor y sus metodos entonces
//? Instanciando una clase : Creando un objeto a partir de una clase
//?creamo un nuevo objeto pero con estos valores por defecto
let objTanta = new Restaurant(
  800,
  200,
  "Vallecito",
  "Comida Criolla",
  ["974204853", "974854512"],
  "Tanta",
  true
);

//?si no mandamos ningun valor por el parametro entonces tomara los valores del constructor por defecto
let objAstrid = new Restaurant();

//* Modificando los atributos de un objeto
//* objAstrid.aforo = 1000;

console.log(objTanta);
console.log(objAstrid);

objTanta.imprimirTelefonos();
objTanta.imprimirTelefonos2();
