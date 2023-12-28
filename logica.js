console.log('hello world!');

/**
Escreva um programa que peça ao usuário para digitar um número e, em seguida, informe se esse número é positivo, negativo ou zero.
 */

//function informePositivoNegativoOuZero (entradaDados){
   // console.log('entradaDados: '+entradaDados);
 //  if (entradaDados < 0 ){
   // console.log('entradaDados: '+ "negativo");  
  // }
  // if (entradaDados > 0){
  //  console.log('entraDados: positivo') 
  // }
  // if (entradaDados == 0){
   // console.log('entrada: zero')
   //}


//}

//informePositivoNegativoOuZero (0);
//informePositivoNegativoOuZero (-1);
//informePositivoNegativoOuZero (2);

// Escreva um programa que peça ao usuário para digitar uma palavra e,
// em seguida, informe se a palavra é um palíndromo (ou seja,
// se pode ser lida da mesma forma de trás para frente).

// function testePalindromo (palavra){
//   console.log(palavra);
//   var palavra = palavra.trim();
//   var invertida = "";
    
//     for( var i = palavra.length-1;i >= 0; i--){
      
//       invertida += palavra[i];
    
//     }
//       if (palavra.toLowerCase() == invertida.toLowerCase()){
//         console.log (palavra + ' é um palindromo');
//     } else {
//         console.log (palavra + ' não é um palindromo');
//       }
//     }
    


// testePalindromo ('Ovo');



//**Escreva um programa que peça ao usuário para digitar sua idade e, em seguida, informe se o usuário é menor de idade (menos de 18 anos), 
//**adulto jovem (entre 18 e 25 anos), adulto (entre 26 e 60 anos) ou idoso (mais de 60 anos). */

// function menorJovemAdultoIdoso (informeIdade){
//     console.log('informe o Status: '+informeIdade);
//     if (informeIdade < 18){
//         console.log(informeIdade+' = menor de idade')
//     }
//     if (informeIdade >=18 && informeIdade <=25){
//         console.log(informeIdade+' = jovem adulto')
//     }
//     if (informeIdade >=26 && informeIdade <=60){
//         console.log(informeIdade+ ' = adulto')
//     }
//     if (informeIdade >60){
//         console.log(informeIdade+ ' = idoso')
//     }


// }

// menorJovemAdultoIdoso(17)
// menorJovemAdultoIdoso(25)
// menorJovemAdultoIdoso(30)
// menorJovemAdultoIdoso(62)


// Escreva um programa que peça ao usuário para digitar um número e,
// em seguida, informe se esse número é par ou ímpar.

// function parOuImpar (informeNumero){
//     console.log('O valor a ser conferido é = '+informeNumero);
//     if (informeNumero % 2 === 0){
//         console.log(informeNumero + ' -> É Par!')
//     }else {
//         console.log(informeNumero + ' -> É Impar')
//     }
// }

// parOuImpar(12)

// Escreva um programa que peça ao usuário para digitar um número e, em seguida, informe se esse número é primo ou não.

// function numPrimo (informeNumero){
//   console.log('Verificar se o valor de '+informeNumero +' é primo.' );
//   //variavel que faz a contagem dos numeros que sao divisiveis.
//   //sabe-se que para o numero ser primo ele tem que ser divvisivel por 1 e por ele mesmo!
// let quantidadeDeNumerosDivisiveis = 0;
// //vamos correr um contador de 1 até informeNumero
//   for (let numero = 1; numero <= informeNumero; numero++){
//     //verificação do resto da divisao entre informe Numero e numero é 0 significa que o numero é divisivel por numero. 
//     if (informeNumero % numero == 0 ) {
//       //se o numero for divisivel sera adicionado mais 1 ao contador de numeros divisiveis. 
//       quantidadeDeNumerosDivisiveis++  

  
//     }
    
//   }
//   //verificação se o numero é divisivel por 1 e por ele mesmo no caso de informenumero.
//  if (quantidadeDeNumerosDivisiveis <= 2) {
//   console.log (informeNumero + ' é primo');
//  } else {
//   console.log (informeNumero + ' não é primo');
//  }
// }

// let numerosParaSerTestado = [1,2,3,5,7,11,13,17,4,6,8,9,12,20,24,28];
// for (const numero of numerosParaSerTestado) {
//   numPrimo (numero)
  
// }

//Escreva um programa que peça ao usuário para digitar uma letra e, em seguida, informe se essa letra é uma vogal ou uma consoante.

// function vogaisConsoantes(letra) {
  
//   //let = letra = letra.indexOf("a","e","i","o","u")
// // definição da case sensitive da função
//   letra = letra.toLowerCase()
//   //tratamento das condições no if com o uso de condição OU.
//   if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u' ) {
//     console.log ('A letra ' + letra, ' é uma vogal');
    
//   }else{
//     console.log ('A letra ' +letra, ' é uma consoante');
//   }
  
// }
// vogaisConsoantes('A');


//Escreva um programa que peça ao usuário para digitar uma data (dia e mês) e, em seguida, 
//informe qual é o signo do zodíaco correspondente a essa data.

// Áries: 21 de março a 20 de abril
// Touro: 21 de abril a 20 de maio
// Gêmeos: 21 de maio a 20 de junho
// Câncer: 21 de junho a 22 de julho
// Leão: 23 de julho a 22 de agosto
// Virgem: 23 de agosto a 22 de setembro
// Libra: 23 de setembro a 22 de outubro
// Escorpião: 23 de outubro a 21 de novembro
// Sagitário: 22 de novembro a 21 de dezembro
// Capricórnio: 22 de dezembro a 20 de janeiro
// Aquário: 21 de janeiro a 19 de fevereiro
// Peixes: 19 de fevereiro a 20 de março

//Tentar algo como um array de meses, e um de signos. Ou talvez um objeto.
// usar swith case para o mes

function diaMes(numero,mes) {

  if () {
    
  }

 


}