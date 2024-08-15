const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado =document.querySelector('.texto-resultado');
const perguntas = [
    {
        enunciado: "Jõao no decorrer do dia conta sobre Racismo e discriminação social sendo temas e questões que no decorrer do tempo vem afetando milhões de pessoas ao redor do mundo, desde seu ponto de vista como isso afeta e como podemos prevenir ou ajudar?",
        alternativas: [
            {
                texto:"A falta de educação e consciencia sobre tal perpetua essas divisões e gerando mais conflitos.",
                afirmacao:"A falta de educação e consciencia sobre tal perpetua essas divisões e gerando mais conflitos. "
            },
            
            {
                texto:"No decorrer do tempo vem afetando a vida social, atitudes, e comportamentos, saber valorizar e ajudar aqueles que sofrem injustiças são algumas das coisas que podemos fazer para ajudar.",
                afirmacao:"No decorrer do tempo vem afetando a vida social, atitudes, e comportamentos, saber valorizar e ajudar aqueles que sofrem injustiças são algumas das coisas que podemos fazer para ajudar. "
            }

            
        ]
    },

    {
        enunciado: "Sendo assim, somos seres humanos e ainda assim porque tratariamos uns aos outros diferentes pela cor da pele? ",
        alternativas: [
            {
                texto: "Foram construidas atitudes e comportamentos que geram preconceitos raciais gerando conflitos e muitos problemas ",
                afirmacao:" Foram construidas atitudes e comportamentos que geram preconceitos raciais gerando conflitos e muitos problemas "
            },

            {
                texto: "Praticamente foram criadas barreiras significativas que influenciam aqueles pessoas que procuram se relacionar, procurar ajuda e aqueles que são o contrario.",
                afirmacao: "Praticamente foram criadas barreiras significativas que influenciam aqueles pessoas que procuram se relacionar, procurar ajuda e aqueles que são o contrario."
            }
            
        
        ]
    },

    {
        enunciado: "Ainda pessoas lutam para alcançar uma posição de igualdade, o que podemos dizer a respeito sobre?",
        alternativas: [
            {
                texto: "Conseguimos dizer que não teriamos problema, ja que com o tempo as desigualdades se resolverão. ",
                afirmacao: "Resultado 5"
            },

            {
                texto: "Alternativa 2",
                afirmacao:"Resultado 6"
            }
            
        ]
    },

    {
        enunciado: "Pergunta 4 ",
        alternativas: [
            {
                texto:  "Alternativa 1 ",
                afirmacao: "Resultado 7"
            },
            
            {
                texto:"Alternativa 2",
                afirmacao:"Resultado 8"
            }
            
        ]
    },

    {
        enunciado: "Pergunta 5 ",
        alternativas: [
            {
                texto:"Alternativa 1 ",
                afirmacao: "Resultado 9"
            },

            {
                texto:"Alternativa 2",
                afirmacao:"Resultado 10"
            }            
            
        ]
    },
 ]

 let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostrarPerguntas(){
    if(atual >= perguntas.length){
        mostreResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent =""; 
    mostrarAlternativas();
}

function mostrarAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", ()  => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada)  {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " "; 
    atual++;
    mostrarPerguntas();
}

function mostreResultado (){
    caixaPerguntas.textContent = " ... ";
    textoResultado.textContent =    historiaFinal;
    caixaAlternativas.textContent = "..";
}

mostrarPerguntas();