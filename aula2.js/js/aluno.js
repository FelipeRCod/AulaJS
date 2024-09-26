const titulo = document.getElementById('exibir'); 

let nota = 8
let faltas = 15
let resultado;


if (nota <=7 && faltas >=20){
    resultado = "reprovado";
}
else if (nota >=7 && faltas <=20){
    resultado = "aprovado";
       
} 
titulo.innerHTML = resultado;