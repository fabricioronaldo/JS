
let inputAdulto = document.getElementById("adulto");
let inputCrianca = document.getElementById("crianca");
let inputHora = document.getElementById("hora");
let resultado = document.getElementById("resultado");

function calcular(){

    let adulto = inputAdulto.value;
    let crianca = inputCrianca.value;
    let hora = inputHora.value;

    let totalCarne = (adulto * carnePP(hora) + (crianca * (carnePP(hora) / 2)));
    let totalCarne = (adulto * carnePP(hora) + (crianca * (carnePP(hora) / 2)));
    console.log(totalCarne);

}

function carnePP(hora){
    if(hora >= 6){
        return 650;
    }else {
        return 400;
    }
}

function cervejaPP(hora){
    if(hora >= 6){
        return 650;
    }else {
        return 400;
    }
}
