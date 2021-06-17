var titulo = document.querySelector(".titulo");
titulo.textContent  = "Aparecida Nutricionista";


var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

var paciente = pacientes[i];
var tdPeso = paciente.querySelector(".info-peso");
var tdAltura = paciente.querySelector(".info-altura");
var tdImc = paciente.querySelector(".info-imc");

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

var alturaValida = validaAltura(altura);
var pesoValido = validaPeso(peso);


if(!pesoValido){
  pesoValido = false;
  tdImc.textContent = "Peso Inválido!";
  paciente.classList.add("error-alert");
}

if(!alturaValida){
  alturaValida = false;
  tdImc.textContent = "Altura Inválida!";
  paciente.classList.add("error-alert");
}

if(pesoValido && alturaValida ){
  var imc = calculaImc(peso,altura);
  tdImc.textContent = imc;
}

}

function validaPeso(paciente){
  
  if(peso <=0 || peso > 1000){
    return false;
  }else{
    return true;
  }
}

function validaAltura(paciente){
  
  if(altura <= 0 || altura >= 3){
    return false;
  }else{
    return true;
  }
}


function calculaImc(peso,altura){
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}







