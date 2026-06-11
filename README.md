Calculadora Premium: Design Escandinavo e Café PremiumUma aplicação web leve desenvolvida em JavaScript Puro (Vanilla JS) e CSS3. Este foi o meu primeiro projeto prático no desenvolvimento de software. Ele reflete o início da minha jornada e a minha evolução técnica até as práticas modernas de arquitetura de código.

--- 
Demonstração Visual:

![Demonstração Visual](assets/calculadora-premium.gif)

--- 
Identidade Visual e TemasO projeto foge dos padrões comuns e traz duas estéticas visuais elegantes:Tema Claro (Escandinavo): Cores neutras, limpas e minimalistas. Elas focam no conforto visual e na simplicidade das formas.Tema Escuro (Café Premium): Tons ricos e profundos inspirados na cultura do café. Oferece alta elegância para uso em ambientes de pouca luz.

--- 
O Orgulho da Evolução (Nota sobre Engenharia)Como este foi o meu primeiro projeto, eu fiz escolhas de código típicas de quem estava começando. Eu decidi manter esses detalhes de propósito no repositório. Eles servem para documentar a minha evolução real como desenvolvedor.O "Erro" do !important: No início, usei o recurso !important no CSS para forçar o encaixe das bordas do teclado. Hoje, compreendo que isso quebra a cascata natural de estilização e dificulta a manutenção do sistema.A Solução Moderna: Atualmente, eu sei que a abordagem correta e sênior seria usar a propriedade grid-template-areas. Com ela, desenhamos o mapa das teclas por extenso direto no CSS do elemento pai. Isso elimina códigos repetidos e deixa a manutenção simples.

--- 
Desempenho Real (Google Lighthouse)A aplicação foi testada pelo Google Lighthouse. Os resultados comprovam a leveza de construir softwares sem o peso de frameworks:Performance (100/100): Resposta imediata aos cliques. O carregamento é instantâneo no computador e no celular.Melhores Práticas (100/100): Código limpo, seguro e em conformidade com as regras modernas da web.Acessibilidade (93/100): Ótima leitura de contraste e mapeamento estável de elementos na tela.

--- 
Funcionalidades e Recursos TécnicosMesmo sendo o meu primeiro projeto, busquei aplicar conceitos importantes de comportamento e experiência do usuário:Filtro contra Sinais Duplicados: O sistema analisa o último caractere digitado. Ele impede que o usuário digite dois operadores juntos (como ++ ou /*), evitando erros de conta.Teclado Físico Integrado: Captura os eventos de digitação do computador (keydown). O teclado físico simula o clique do botão da tela de forma automática, economizando código.Auto-fechamento de Parênteses: Uma inteligência que conta os parênteses do visor usando Expressões Regulares (RegEx). Se o usuário esquecer de fechar a conta, o sistema corrige a string antes do cálculo final.Memória de Tema (LocalStorage): Salva a escolha de cor do usuário no navegador. Se o usuário fechar o site e voltar no outro dia, o tema escolhido continua ativo.Tratamento de Erros (try/catch): Se alguma conta inválida passar pelas travas, o sistema não trava o navegador. O erro é capturado e a palavra "Erro" aparece de forma amigável na tela.

--- 
Como Executar o ProjetoPor ser um projeto feito puramente com tecnologias nativas da web, ele não precisa de nenhuma instalação ou servidor:Baixe ou clone este repositório.Dê um duplo clique no arquivo index.html.O projeto abrirá imediatamente no seu navegador de internet.




