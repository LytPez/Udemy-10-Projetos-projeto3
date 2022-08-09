/*
função que calcula o IMC de uma pessoa, e avalia sua condição atual.
*/
/*
 esta função pega o peso, e a altura do individuo, faz o calculo do imc: peso/(altura^2), e conforme o resultado, informa a condição do idividuo; Abaixo do peso, Peso normal, Excesso de peso, Obesidade
*/



function calcular(){
  let peso = document.getElementById('peso').value
  let altura = document.getElementById('altura').value
  let texto= document.getElementById('resultado')
  let resultado= peso/(altura*altura)
  const resultadoFinal=resultado.toFixed(1)


  if(resultadoFinal<=18.5){
    texto.innerHTML='Abaixo do peso normal: ' + resultadoFinal
  } else if(resultadoFinal>=18.5 && resultadoFinal<=24.9){
    texto.innerHTML='Peso ideal: ' + resultadoFinal
  } else if(resultadoFinal>=25 && resultadoFinal<=29.9){
    texto.innerHTML='Excesso de peso: ' + resultadoFinal
  } else{
    texto.innerHTML='Obesidade: procure um médico' }
}