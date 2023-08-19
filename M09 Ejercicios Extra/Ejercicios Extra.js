/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var claves = Object.entries(objeto);
   var arrayPadre = [];
   for (i = 0 ; i < claves.length; i++) {
       arrayPadre.push(claves[i]);
   }
   return arrayPadre;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var resultado={};

   for(var i = 0; i < string.length; i++){
       if (resultado[string[i]]) {          
           resultado[string[i]] = resultado[string[i]] + 1;          
       }
       else{
           resultado[string[i]] = 1; 
       }
   }
   return resultado;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayuscula = [];
   var minuscula = [];
   for (i=0; i<string.length;i++){
       if (string[i] == string[i].toUpperCase()){
           mayuscula.push(string[i]);
       } else {
           minuscula.push(string[i]);
       }
   }
   var resultado = mayuscula.concat(minuscula);
   return resultado.join('');
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var cambiada = frase.split('').reverse().join('');
   return cambiada.split(' ').reverse().join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var string = numero.toString();
   var numeroString = string.split('');
   if (numeroString.reverse().join('') == numero){
       return 'Es capicua';
   } else {
       return 'No es capicua';
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var array = string.split('')
   var cambiado = [];
 for (i=0; i < array.length; i++){
   if (array[i] !== 'a' && array[i] !== 'b' && array[i] !== 'c') {
      cambiado.push(array[i]);
   }
 }
 var cambiado2 = cambiado.join('');
 return (cambiado2);
 }

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort((a, b)=> {
      if(a.length === b.length){
        return 0;
      } 
       if(a.length < b.length){
         return -1;
       }
      return 1
    });
   
   return(arrayOfStrings);
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var coincidencia = [];
   var concatenados = array1.concat(array2);
   for (i=0; i<concatenados.length; i++){
      if (array2.includes(array1[i])){
         coincidencia.push(array1[i]);
      }
   }
   return coincidencia;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
