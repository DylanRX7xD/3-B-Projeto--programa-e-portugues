const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado =document.querySelector('.texto-resultado');
const perguntas = [
    {
        enunciado: "Racismo e discriminação social são temas e questões que no decorrer do tempo vem afetando milhões de pessoas ao redor do mundo",
        alternativas: [
            {
                texto:"Alternativa 1",
                afirmacao:"Resultado 1"
            },
            
            {
                texto:"Alternativa 2",
                afirmacao:"Resultado 2 "
            }

            
        ]
    },

    {
        enunciado: "Pergunta 2 ",
        alternativas: [
            {
                texto: "Alternativa 1 ",
                afirmacao:"Resultado 3 "
            },

            {
                texto: "Alternativa 2",
                afirmacao: "Resultado 4"
            }
            
        
        ]
    },

    {
        enunciado: "Pergunta 3",
        alternativas: [
            {
                texto: "Alternativa 1 ",
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