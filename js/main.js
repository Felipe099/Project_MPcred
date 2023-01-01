import { Modal } from './modal.js';
import {
    valorTotalDoEmprestimo,
    valorDaParcelaEmprestimo,
    notANumber,
} from './utils.js';
import { AlertError, AlertErrorNumberParcel } from './alert.js';

const form = document.querySelector('form');
const inputValor = document.querySelector('#valor');
const inputParcelas = document.querySelector('#parcelas');
const visa = document.querySelector('.visa');
const hipercard = document.querySelector('.hipercard');
const elo = document.querySelector('.elo');
const masterCard = document.querySelector('.masterCard');

inputValor.oninput = () => AlertError.close();
inputParcelas.oninput = () => AlertError.close();

visa.addEventListener('click', () => {
    visa.classList.toggle('active');
    hipercard.classList.remove('active');
    elo.classList.remove('active');
    masterCard.classList.remove('active');
    form.onsubmit = (event) => {
        event.preventDefault();

        const valor = inputValor.value;
        const parcelas = inputParcelas.value;
        let juros;

        const weightOrheightIsANotNumber =
            notANumber(valor) || notANumber(parcelas);

        if (weightOrheightIsANotNumber) {
            AlertError.open();
            return;
        }

        AlertError.close();

        if (parcelas == 1) {
            juros = 1.07;
        } else if (parcelas >= 2 && parcelas <= 6) {
            juros = 1.11;
        } else if (parcelas >= 7 && parcelas <= 10) {
            juros = 1.14;
        } else if (parcelas >= 11 && parcelas <= 12) {
            juros = 1.16;
        } else if (parcelas > 13 && parcelas <= 18) {
            juros = 1.25;
        } else {
            AlertError.open();
        }

        const parcelaDoEmprestimo = valorDaParcelaEmprestimo(
            valor,
            parcelas,
            juros
        );
        const valorDoEmprestimo = valorTotalDoEmprestimo(valor, juros);
        displayResultMessage(parcelaDoEmprestimo, valorDoEmprestimo);
    };
});
hipercard.addEventListener('click', () => {
    hipercard.classList.toggle('active');
    visa.classList.remove('active');
    elo.classList.remove('active');
    masterCard.classList.remove('active');
    form.onsubmit = (event) => {
        event.preventDefault();

        const valor = inputValor.value;
        const parcelas = inputParcelas.value;
        let juros;

        const weightOrheightIsANotNumber =
            notANumber(valor) || notANumber(parcelas);

        if (weightOrheightIsANotNumber) {
            AlertError.open();
            return;
        }

        if (parcelas >= 13) {
            AlertErrorNumberParcel.open();
            return;
        }

        AlertErrorNumberParcel.close();
        AlertError.close();

        if (parcelas == 1) {
            juros = 1.08;
        } else if (parcelas >= 2 && parcelas <= 5) {
            juros = 1.12;
        } else if (parcelas >= 6 && parcelas <= 10) {
            juros = 1.15;
        } else if (parcelas >= 11 && parcelas <= 12) {
            juros = 1.17;
        } else {
            AlertError.open();
        }

        const parcelaDoEmprestimo = valorDaParcelaEmprestimo(
            valor,
            parcelas,
            juros
        );
        const valorDoEmprestimo = valorTotalDoEmprestimo(valor, juros);
        displayResultMessage(parcelaDoEmprestimo, valorDoEmprestimo);
    };
});
elo.addEventListener('click', () => {
    elo.classList.toggle('active');
    visa.classList.remove('active');
    hipercard.classList.remove('active');
    masterCard.classList.remove('active');
    form.onsubmit = (event) => {
        event.preventDefault();

        const valor = inputValor.value;
        const parcelas = inputParcelas.value;
        let juros;

        const isNumberInvalid = notANumber(valor) || notANumber(parcelas);

        if (isNumberInvalid) {
            AlertError.open();
            return;
        }

        if (parcelas >= 13) {
            AlertErrorNumberParcel.open();
            return;
        }

        AlertErrorNumberParcel.close();
        AlertError.close();

        if (parcelas == 1) {
            juros = 1.09;
        } else if (parcelas >= 2 && parcelas <= 5) {
            juros = 1.13;
        } else if (parcelas >= 6 && parcelas <= 10) {
            juros = 1.16;
        } else if (parcelas >= 11 && parcelas <= 12) {
            juros = 1.18;
        } else {
            AlertError.open();
        }

        const parcelaDoEmprestimo = valorDaParcelaEmprestimo(
            valor,
            parcelas,
            juros
        );
        const valorDoEmprestimo = valorTotalDoEmprestimo(valor, juros);
        displayResultMessage(parcelaDoEmprestimo, valorDoEmprestimo);
    };
});
masterCard.addEventListener('click', () => {
    masterCard.classList.toggle('active');
    visa.classList.remove('active');
    hipercard.classList.remove('active');
    elo.classList.remove('active');
    form.onsubmit = (event) => {
        event.preventDefault();

        const valor = inputValor.value;
        const parcelas = inputParcelas.value;
        let juros;

        const weightOrheightIsANotNumber =
            notANumber(valor) || notANumber(parcelas);

        if (weightOrheightIsANotNumber) {
            AlertError.open();
            return;
        }

        AlertError.close();

        if (parcelas == 1) {
            juros = 1.07;
        } else if (parcelas >= 2 && parcelas <= 6) {
            juros = 1.11;
        } else if (parcelas >= 7 && parcelas <= 10) {
            juros = 1.14;
        } else if (parcelas >= 11 && parcelas <= 12) {
            juros = 1.16;
        } else if (parcelas > 13 && parcelas <= 18) {
            juros = 1.25;
        } else {
            AlertError.open();
        }

        const parcelaDoEmprestimo = valorDaParcelaEmprestimo(
            valor,
            parcelas,
            juros
        );
        const valorDoEmprestimo = valorTotalDoEmprestimo(valor, juros);
        displayResultMessage(parcelaDoEmprestimo, valorDoEmprestimo);
    };
});

function displayResultMessage(valorDaParcela, valorDoEmprestimo) {
    Modal.modalMessage.innerText = `O valor das parcelas são de: 
    R$ ${valorDaParcela} reais
    
    e o valor total do empréstimo é: 
    R$ ${valorDoEmprestimo} reais`;
    Modal.open();
}
