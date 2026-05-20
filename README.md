# Calculadora Neumórfica com Sistema de Temas e Motor RegEx Nativo

Aplicação web moderna desenvolvida com JavaScript Puro (Vanilla JS) e CSS3 Avançado. O projeto aplica os conceitos visuais da estética do Neumorfismo Flat e se destaca pela implementação de um motor de sanitização de strings via Expressões Regulares (RegEx), suporte global a eventos de teclado físico e gerenciamento de persistência de dados no navegador.

---

## Demonstração Visual

[GIF demonstrativo em desenvolvimento - Será adicionado na próxima atualização do repositório]

---

## Diferenciais Técnicos e Engenharia de Software

O desenvolvimento desta aplicação priorizou fundamentos sólidos de engenharia frontend e manipulação nativa da Web API, diferenciando-se de implementações básicas através dos seguintes pilares:

* **Persistência de Estado via Local Storage**: Sistema de persistência nativo para o gerenciamento de preferências visuais. O tema escolhido pelo usuário (Light ou Dark Mode) permanece gravado no navegador, garantindo que o ecossistema inicie com a identidade visual correta mesmo após o fechamento da sessão.
* **Sanitização de Expressões Complexas com RegEx**: Motor que intercepta e limpa caracteres puramente visuais (como X, x, vírgulas e o símbolo de divisão tradicional) e os converte, utilizando Expressões Regulares, para os operadores computacionais nativos correspondentes antes da avaliação matemática final.
* **Auto-fechamento Dinâmico de Parênteses**: Lógica baseada em varredura que contabiliza o escopo de abertura e fechamento de blocos operacionais. Caso o usuário finalize uma inserção sem fechar os parênteses pendentes, o sistema injeta os caracteres faltantes no final da string automaticamente via código, prevenindo erros de execução.
* **Prevenção de Injeção de Sinais Duplicados**: Validação baseada na análise do último caractere digitado no fluxo. Impede de forma nativa que o usuário insira múltiplos sinais aritméticos em sequência (como dois sinais de adição ou operadores conflitantes), blindando o sistema contra erros de sintaxe matemática antes que eles atinjam o interpretador.
* **Acessibilidade Dinâmica via Teclado Físico**: Interceptação de eventos globais do teclado através do evento keydown. O sistema bloqueia o comportamento padrão de teclas do sistema (como o Enter), redireciona as entradas para emular mecanicamente o clique dos botões e oferece atalhos rápidos para comandos de correção (Backspace) e limpeza total (Escape).

---

## Tecnologias e Recursos Utilizados

* **HTML5**: Estruturação semântica de displays protegidos contra edição direta através do atributo readonly.
* **CSS3 Avançado**: Uso estrito de variáveis nativas (:root), layouts bidimensionais estruturados com CSS Grid e Media Queries focadas no comportamento Mobile-First e Desktop.
* **JavaScript (ES6+)**: Manipulação de DOM via addEventListener, controle de propagação de eventos no navegador e tratamento de exceções estruturado em blocos try/catch.
* **Font Awesome**: Biblioteca de ícones vetoriais dinâmicos para a interface de troca de temas.

---

## Fluxo Interno de Tratamento de Expressões

O núcleo do interpretador computa e formata as strings de entrada através de uma esteira sequencial de tratamento:
1. Remoção de espaçamentos periféricos vazios utilizando o método .trim()
2. Cálculo e injeção automática de escopos pendentes.
3. Substituição e normalização de símbolos aritméticos e pontuações decimais.
4. Processamento de formatação de porcentagens encadeadas.
5. Expansão e remoção de operadores órfãos no fechamento da linha antes da execução matemática pelo motor.

---

## Funcionalidades Principais

* **Aritmética Completa**: Suporte para o processamento de adições, subtrações, multiplicações, divisões e porcentagens encadeadas.
* **Feedback Mecânico**: Os botões respondem visualmente alterando a profundidade do Neumorfismo de relevo externo para relevo interno (box-shadow: inset) e simulando o deslocamento físico do componente através da propriedade transform: translateY.
* **Controle de Escopo Dinâmico**: Inserção inteligente de parênteses com base na análise contextual do último caractere inserido.
* **Layout Responsivo**: Ajuste automático da malha do teclado, transitando de uma visualização otimizada para smartphones (95vw) para dimensões fixas em telas desktops (550px).

---

## Instruções para Execução do Projeto

A aplicação utiliza uma arquitetura puramente Vanilla, dispensando a necessidade de instaladores, servidores locais ou gerenciadores de dependência:

1. Clone o repositório utilizando o comando:
   ```bash
   git clone https://github.com
   ```
2. Navegue até o diretório do projeto e execute o arquivo `index.html` com um duplo clique para abri-lo diretamente em seu navegador.
