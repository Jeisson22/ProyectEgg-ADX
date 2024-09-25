
const formato = require('./formato.json');

const serializacionejemplo = JSON.stringify(formato["squadName"]);
console.log(serializacionejemplo);


console.log("Deserializacion");

const jsonString = '{"squadName":"Super hero squad","homeTown":"Metro City","formed":2016,"secretBase":"Super tower","active":true,"members":[{"name":"Molecule Man","age":29,"secretIdentity":"Dan Jukes","powers":["Radiation resistance","Turning tiny","Radiation blast"]},{"name":"Madame Uppercut","age":39,"secretIdentity":"Jane Wilson","powers":["Million tonne punch","Damage resistance","Superhuman reflexes"]},{"name":"Eternal Flame","age":1000000,"secretIdentity":"Unknown","powers":["Immortality","Heat Immunity","Inferno","Teleportation","Interdimensional travel"]}]}';

const formaTO2 = JSON.parse(jsonString);

console.log(formaTO2);

console.log("\n");
console.log("TOMANDO A UNA MATRIZ PARA OBTENER SU VALOR");

console.log(formato.matrizEjemplo[0].powers[0]);



// let objeto = {
//     'uno': 1, 
//     'dos dos': {},
//     'lista':  [1, 2, 3],
//     'objeto': {},
//     'funcion':  function() {}


// };

// delete objeto['uno'];
// console.log(objeto);
// console.log(objeto.lista);

let usuario = {
    nombre: 'Jeisson',
    apellido: 'Gonzales',
    alias : 'Programador x',
}


// let numero1 =1;
// let numero2 = numero1;
// numero2 = 3;

/** JSON esta libreria donde creamos un texto a objeto y creo uno nuevo desde cero sin cambiar al padre **/
let usuario2 = JSON.parse(JSON.stringify(usuario));
usuario2.alias = 'Programador  z';
console.log(usuario);
console.log(usuario2);


