function enviar() {
    let valorValue = document.querySelector('.js-input-valor').value;
    let vezesValue = document.querySelector('.js-input-vezes').value;
    

    if (vezesValue == 1) {
      jurosValue = 0.7;
    } else if (vezesValue >= 2 && vezesValue <= 6) {
      jurosValue = 1.1;
    } else if (vezesValue >= 7 && vezesValue <= 10) {
      jurosValue = 1.4;
    } else if (vezesValue >= 11 && vezesValue <= 12) {
      jurosValue = 1.6;
    } else {
      jurosValue =  2.5;
    }

    let mult = valorValue * jurosValue;
    let total = mult / vezesValue;
    let texto = total;

    if (valorValue == 0 || valorValue == '') {
        document.getElementById(
            'paragrafo'
        ).innerHTML = `Digite o valor para fazer a simulção`;
    } else if (vezesValue == 0|| valorValue == '') {
        document.getElementById(
            'paragrafo'
        ).innerHTML = `Digite a quantidade de vezes`;
    } else {
        document.getElementById(
            'paragrafo'
        ).innerHTML = `Valor das parcelas: R$ ${texto.toFixed(2)} reais`;
    }
}
