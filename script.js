var ano_atual = new Date().getFullYear();
var data_aniversario = "11/04/2004";
var ano_informado = data_aniversario.split('/')[2];
var idade = ano_atual - ano_informado;

console.log(idade);

// Atualize o conteúdo do elemento com id "idade"
let idadenova = document.getElementById("Texts");
console.log(idadenova);
idadenova.innerHTML = idade;