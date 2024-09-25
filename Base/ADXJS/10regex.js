let texto1 = "Me encanta la musica";
let texto2 = "me encanta Me la musica";
let texto3 = "encanta la musica";
let texto4 = "la musica";

//* Para que no le importe las mayuscula*/
// let regex = /Me/i;

let regex = /Me/i;

console.log(regex.test(texto1));
console.log(regex.test(texto2));
console.log(regex.test(texto3));
console.log(regex.test(texto4));