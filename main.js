const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado =document.querySelector('.texto-resultado');
const perguntas = [
    {
        enunciado: "Jõao no decorrer do dia conta sobre Racismo e discriminação social sendo temas e questões que no decorrer do tempo vem afetando milhões de pessoas ao redor do mundo, desde seu ponto de vista como isso se manifesta na sociedade atualmente?",
        alternativas: [
            {
                texto:"A falta de educação e consciencia sobre tal perpetua essas divisões e gerando mais conflitos. Podendo se manifestar através de atitudes preconceituosas, práticas institucionais injustas, e políticas, entre outros.",
                afirmacao:"Conseguimos aprender com a ajuda de Jõao e de voçe sobre educação e consciencia sobre tal perpetuandos divisões e gerando mais conflitos. Podendo se manifestar através de atitudes preconceituosas, práticas institucionais injustas, e políticas, entre outros. "
            },
            
            {
                texto:"No decorrer do tempo vem afetando a vida social, atitudes, e comportamentos, saber valorizar e ajudar aqueles que sofrem injustiças são algumas das coisas que podemos fazer para ajudar.",
                afirmacao:"No decorrer do tempo joão e voçe aprenderom sobre a vida social, afetando atitudes e comportamentos, sabendo valorizar e ajudar aqueles que sofrem injustiças são algumas das coisas que podemos fazer para ajudar. "
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
                texto: "Praticamente foram criadas barreiras significativas que influenciam aqueles pessoas que procuram ajuda sobre o tema,.",
                afirmacao: "Praticamente foram criadas barreiras significativas que influenciam aqueles pessoas que procuram se relacionar, procurar ajuda e aqueles que são o contrario."
            }
            
        
        ]
    },

    {
        enunciado: "Ainda pessoas lutam para alcançar uma posição de igualdade, o que podemos dizer a respeito sobre?",
        alternativas: [
            {
                texto: "Conseguimos dizer que não teriamos problema, ja que com o tempo as desigualdades se resolverão. ",
                afirmacao: "Consegue dizer que não teria problema ja que com o tempo as desigualdades se resolverão com o decorrer do tempo positivamente ou negativamente"
            },

            {
                texto: " Apesar disso a discriminação enfraquece os laços comunitários e promove divisões sociais, prejudicando a integração e o entendimento entre os diferentes grupos de pessoas que procuram a igualdade.",
                afirmacao:"Sendo assim a discriminação vai enfraquecendo os laços comunitários e promovendo divisões sociais, prejudicando a integração e o entendimento entre os diferentes grupos."
            }
            
        ]
    },

    {
        enunciado: " A despeito disso a discriminação social influencia a saúde mental e física das pessoas?",
        alternativas: [
            {
                texto:  " Sim! desde estresse crônico, ansiedade e depressão. Além disso, pode limitar o acesso a cuidados de saúde adequados, contribuindo para mais problemas fisicos e mentais ",
                afirmacao: "concorda em que desde cedo se não tratarmos podemos sofrer estresse crônico, ansiedade e depressão. Além disso, pode limitar o acesso a cuidados de saúde adequados, contribuindo para mais problemas fisicos e mentais"
            },
            
            {
                texto:" Não! sobre-entendemos que todos são fortes e não influencia na saude mental e fisica ",
                afirmacao:"Falamos sobre como não influencia na saude mental fisica desde seu ponto de vista, "
            }
            
        ]
    },

    {
        enunciado: "Com o decorrer do tempo João veio analisando sobre o tema e tendo mais conhecimento para ajudar, Jõao finalizou com sua ultima pergunta. Qual seria algumas formas eficazes de combater o racismo e a discriminação social? ",
        alternativas: [
            {
                texto:"Podemos envolver educação e conscientização, promoção de políticas inclusivas, apoio a legislações antidiscriminação, e uma que consideramos muito importante como é o diálogo intercultural. ",
                afirmacao: "e finalizando concluimos em como ajudar desde incentivar educação e conscientização, promoção de políticas inclusivas, apoio a legislações antidiscriminação, e uma que consideramos muito importante como é o diálogo intercultural."
            },

            {
                texto:"Conscientização e sensibilização sendo importante para promover campanhas de conscientização e sensibilização sobre o tema",
                afirmacao:"finalizamos em que a conscientização e sensibilização são atividades importantes para promover campanhas de conscientização e sensibilização sobre o tema "
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