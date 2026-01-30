const botao = document.getElementById('botao-tema');
const body = document.body;

// --- PERSISTÊNCIA DO TEMA ---
const temasalvo = localStorage.getItem('tema');
// Inicializa o tema baseado no localStorage
temaEscuro(temasalvo === 'escuro');

function temaEscuro(tipo) {
    if (tipo) { // Simplificado: if(tipo) já checa se é true
        body.classList.add('escuro');
        botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        body.classList.remove('escuro');
        botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

botao.addEventListener('click', () => {
    const isescuro = body.classList.toggle('escuro');
    temaEscuro(isescuro);
    localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});

// --- LÓGICA DA CALCULADORA ---
const display = document.querySelector('#display');
const botoes = document.querySelectorAll('.edit');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        // CORREÇÃO: Verificar se o botão clicado NÃO é uma função de controle
        // Isso evita que apareça "AC" ou "⌫" escrito no visor
        const isControle = botao.classList.contains('backspace') || botao.classList.contains('AC');
        
        if (!isControle) {
            display.value += botao.innerText;
        }
    });
});

//Botão Igual//
const btnIgual = document.querySelector('.igual');

if (btnIgual && display) {
    btnIgual.addEventListener('click', (e) => {
        // O "Pulo do Gato": impede que qualquer outro código imprima o "=" no visor
        e.preventDefault();
        e.stopImmediatePropagation();

        try {
            // 1. Captura o texto do visor (input ou div)
            let expressao = (display.value || display.innerText || "").trim();

            // 2. Limpeza Premium:
            // - Remove o símbolo "=" se ele tiver "vazado" para o visor
            // - Troca "X" ou "x" por "*" (multiplicação)
            // - Troca "," por "." (decimal)
            // - Remove qualquer sinal (+, -, *, /) que tenha ficado solto no final
            let contaProcessada = expressao
                .replace(/=/g, "")
                .replace(/X/g, "*")
                .replace(/x/g, "*")
                .replace(/,/g, ".")
                .replace(/[+\-*/]$/, "");

            // 3. Se o visor estiver vazio após a limpeza, não faz nada
            if (!contaProcessada) return;

            // 4. Executa o cálculo
            const resultadoFinal = eval(contaProcessada);

            // 5. Exibição: Substitui a conta pelo resultado (usa "=" e não "+=")
            if (display.tagName === 'INPUT') {
                display.value = resultadoFinal;
            } else {
                display.innerText = resultadoFinal;
            }

        } catch (erro) {
            console.error("Falha na conta:", erro);
            // Em caso de erro matemático, mostra a mensagem
            if (display.tagName === 'INPUT') display.value = "Erro";
            else display.innerText = "Erro";
        }
    });
}

// Backspace //
const btnApagar = document.querySelector('.backspace');
if (btnApagar) { // Verificação de segurança
    btnApagar.addEventListener('click', () => {
        display.value = display.value.slice(0, -1);
    });
}

/// AC ///
const btnLimpar = document.querySelector('.AC');
if (btnLimpar) { // Verificação de segurança
    btnLimpar.addEventListener('click', () => {
        display.value = '';
    });
}
//Soma//
const btnSoma = document.querySelector('.adicao');
let soma = 0;
 if(btnSoma) {
    btnSoma.addEventListener('click', ()=> {
        const ultimoChar = display.value.slice(-1);
        const sinais = ['+', '-', '*', '/'];
        
        if(display.value != "" && !sinais.includes(ultimoChar)) {
            display.value += "+";
        }
    });
}

// Subtração //
const btnSubtracao = document.querySelector('.subtracao');
let subtracao = 0;
if(btnSubtracao) {
    btnSubtracao.addEventListener('click', ()=> {
        const ultimoChar = display.value.slice(-1);
        const sinais = ['+', '-', '*', '/'];

        if(display.value != "" && !sinais.includes(ultimoChar)) {
            display.value += "-";
        }
    });
}

// Multiplicação //
const btnMultiplicacao = document.querySelector('.multiplicacao');
let multiplicacao = 0;
if(btnMultiplicacao) {
    btnMultiplicacao.addEventListener('click', ()=> {
        const ultimoChar = display.value.slice(-1);
        const sinais = ['+', '-', '*', '/'];

        if(display.value != "" && !sinais.includes(ultimoChar)) {
            display.value += "*";
        }
    });
}





