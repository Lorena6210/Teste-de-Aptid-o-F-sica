/* Conforme explicado no enunciado adicione as palavras reservadas let ou const nas variaveis */

let distance = 25000;
let time = 710;
let gender = "male";
let pushUps = 40;
let abs = 35;

/* 

    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar: 

    if(gender === 'male)
    ...

*/

function testTAF(distance, time, gender, pushUps, abs) {
  passed = false;

  //Sua logica deve ser inserida aqui:
  //se foer masculino pode fazer ser não, não ira participar .
  if(gender == 'male'){
    console.log('pode participar ');
  }else if(gender == 'female') {
    console.log('partivipar');
  }
  //tem que correr e 25000 metro se não atimgir e desclassificado. 
  if(distance == '1000'){
    console.log('clasificado');
  }else{
    console.log('classificado para o proximo desafio');
  } 
  // tem que compluir em menos de 720 segundo se não atimgir e desclassificado.
  if(time == '710'){
    console.log('classificado');
  }else{
    console.log('clasificado');
  }
  //tem que fazer 40 Flexões, se não atimgir e desclassificado.
  if (pushUps == '40'){
    console.log('clasificado');
  }else{
    console.log('clasificado');
  }
  //tem que fazer 35 Abdominais se não atimgir e desclassificado.
  if (abs == '35'){
    console.log('clasificado');
  }else{
    console.log('clasificado');
  }
  // Retorno da variavel passed onde para o candidato passar ele deve ter o valor de: true
  return passed;
}

//para executar o script no terminal digite: node ./script.js
//para executar os testes no terminal digite: node --test ./test_cases.js

console.log(
  "Candidato passou no teste?: \nresposta: ",

  testTAF(distance, time, gender, pushUps, abs)
);

module.exports = testTAF;
