function enviar() {
    let valorValue = document.querySelector('.js-input-valor').value;
    let vezesValue = document.querySelector('.js-input-vezes').value;

    if (vezesValue == 1) {
        jurosValue = 1.07;
    } else if (vezesValue >= 2 && vezesValue <= 6) {
        jurosValue = 1.11;
    } else if (vezesValue >= 7 && vezesValue <= 10) {
        jurosValue = 1.14;
    } else if (vezesValue >= 11 && vezesValue <= 12) {
        jurosValue = 1.16;
    } else {
        jurosValue = 1.25;
    }

    let mult = valorValue * jurosValue;
    let total = mult / vezesValue;

    if (valorValue == 0 || valorValue == '') {
        document.getElementById(
            'valueParcela'
        ).innerHTML = `Digite o valor para fazer a simulção`;
    } else if (vezesValue == 0 || valorValue == '') {
        document.getElementById(
            'valueParcela'
        ).innerHTML = `Digite a quantidade de vezes`;
    } else {
      document.getElementById(
          'valueTotal'
      ).innerHTML = `Valor total: R$ ${mult.toFixed(2)} reais`;
        document.getElementById(
            'valueParcela'
        ).innerHTML = `Valor das parcelas: R$ ${total.toFixed(2)} reais`;
    }
}
