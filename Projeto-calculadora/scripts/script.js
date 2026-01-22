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