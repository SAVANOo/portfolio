function calcIdade(data_aniversario) {
    var ano_atual = new Date().getFullYear();
    var ano_informado = data_aniversario.split('/')[2];
    var idade = ano_atual - ano_informado;

    document.getElementById("idade").innerHTML = idade;

}

calcIdade("04/01/2004");