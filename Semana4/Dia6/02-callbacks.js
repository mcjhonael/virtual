// conecto a la BD
// hago la consulta del dni
// RETORNO LA INFORMACION DE LA PERSONA
//TODO: QUE ESTA PASANDO AQUI CREAOS UNA FUNCTION QUE RECIBA EL DNI Y LE MANDAMOS UN CALLBACK DENTRO DE LA FUNCTION LE COLOCAMOS UN NOMBRE FIJO LUEGO LLAMAS AL CALLBACK Y LE PASAS ESE NOMBRE PARA PODER SER MOSTRADO
const buscarPorDni = (dni, callback) => {
  let nombreEncontrado = "-----";
  setTimeout(function () {
    console.log("Buscando en la base de datos");
    nombreEncontrado = "Jorge Garnica";
    callback(nombreEncontrado);
  }, 2000);
};
//! AQUI ESTAMOS LLAMANDO A LA FUNCTION ENTONCES LE PASAMOS LOS PARAMETROS 1RO EL DN 2DO COMO ES UN CALLBACK LE MADAMOS UN FUNCTION FECHA Y YA 
buscarPorDni("45875212", (nombre) => {
  console.log(nombre);
});






// MyModel.find(
// 	"jorge", 
// 	function (err, docs) {
// 		if(err){
// 			console.log("error, no se encontró el nombre");
// 		}else{
// 			console.log(docs);
// 		}
// 	}
// );
