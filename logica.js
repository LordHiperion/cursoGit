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

function testePalindromo (palavra){
  console.log(palavra);
  var palavra = palavra.trim();
  var invertida = "";
    
    for( var i = palavra.length-1;i >= 0; i--){
      
      invertida += palavra[i];
    
    }
      if (palavra.toLowerCase() == invertida.toLowerCase()){
        console.log (palavra + ' é um palindromo');
    } else {
        console.log (palavra + ' não é um palindromo');
      }
    }
    


testePalindromo ('Ovo');



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
