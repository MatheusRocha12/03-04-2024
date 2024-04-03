/**
 * O algoritimo ifelse serve para validação de dados, por exemplo:
 * if (variavel1 == variavel2) { algo irá acontecer se a variavel1 foi
 * igual a varivavel2 } else { algo irá acontecer se a variavel for diferente 
 * da variavel2 }
 * 
 * if: nome do algoritmo
 * parenteses (): local onde se declaram os parametros ou expressao a ser 
 * validada
 * chave {}: bloco de codigos a serem executados, ou seja, tudo que 
 * estiver dentro do bloco de codigos sera executado 
 * else: "senao" e onde serao executados os codigos, que estiverem dentro
 * do bloco {}, caso a validaçao do algoritimo "if" retorne falsa
 * 
 * operadores logicos
 * 
 * == serve para comparar se uma variavel/valor é igual a outra
 * != serve para comparar se uma variavel/valor é diferente a outra
 * > serve para comparar se uma variavel/valor é maior a outra
 * < serve para comparar se uma variavel/valor é menor a outra
 * >= serve para comparar se uma variavel/valor maior ou igual a outra
 * <= serve para comparar se uma variavel/valor é menor ou igual a outra
 * 
 * se "falso": adicionar o ponto de exclamação no inicio da declaraçao de parametros/expressao, por exemplo:
 * if(!variavel1 == variavel2) {bloco de codigos} aqui significa que: se a compraração da 
 * variavel1 com a variavel2 retornar falso, os codigos que estiverem 
 * dentro do bloco de codigos serao executados, nao havendo a 
 * necessidade do uso da clausula "else"  
 * 
 * criar um validador onde voce ira declarar duas variaves, cada uma com um valor DIFERENTE da outra,
 * entao havera um resposta diferente para cada situacao
 * 
 * vamos criar dois inputs, onde cada input ira para cada uma das duas variaveis ou seja:
 * <input type="text" id="txtVar1" />
 * <input type="text" id="txtVar2" />
 * 
* var txtVar1 = document.getElementById("txtVar1");
  var txtVar2 = document.getElementById("txtVar2");

  txtVar1.value que tem que ser comparado com o txtVar2.value

  envia os dados via console.log()
 */
    function verificar() {
  const P = document.getElementById("txtLogin");
  const P2 = document.getElementById("txtSenha");
  

   if (P.value == P2.value  )  {
    console.log("São iguais :)")
   } else {
    console.log("são diferentes :(")
   }
    }
   
