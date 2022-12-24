import { Modal } from './modal.js';
import { valorTotalDoEmprestimo, valorDaParcelaEmprestimo, notANumber } from './utils.js';
import { AlertError } from './alert.js';

const form = document.querySelector('form');
const inputValor = document.querySelector('#valor');
const inputParcelas = document.querySelector('#parcelas');

inputValor.oninput = () => AlertError.close()
inputParcelas.oninput = () => AlertError.close()

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

    AlertError.close()

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

    const parcelaDoEmprestimo = valorDaParcelaEmprestimo(valor, parcelas, juros);
    const valorDoEmprestimo = valorTotalDoEmprestimo(valor, juros);
    displayResultMessage(parcelaDoEmprestimo, valorDoEmprestimo);
};

function displayResultMessage(valorDaParcela, valorDoEmprestimo) {
    Modal.modalMessage.innerText = `O valor das parcelas são de: 
    R$ ${valorDaParcela} reais
    
    e o valor total do empréstimo é: 
    R$ ${valorDoEmprestimo} reais`;
    Modal.open();
}






