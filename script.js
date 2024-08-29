
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como a globalização influencia a cultura local no Brail?",
        alternativas: [
            {
                texto: "Introduz novos elementos culturais.",
                afirmacao: "afirmação"
            },
            {
                texto: "Elimina a completamente a cultura local." ,
                afirmacao: "afirmação" 
            }

        ]
    },
    {
        enunciado: "De que maneira a arte e a música refletem as mudanças sociais em uma soiedade?",
        alternativas: [
            {
                texto: "Inovam as culturas.",
                afirmacao: "afirmação"
            },
            {
                texto: "A arte e a núsica não interferem na cultura",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        pergunta: "Como o cinema brasileiro tem representado a realidade social do país?",
        alternativas: [
            {
                texto: "Abordam temas como a deigualdade.",
                afirmacao: "afirmação"
            },
            {
                texto: "Não represenntam a nossa cultura.",
                afirmacao: "afirmação"
            }

        ]
    },
    {
        enunciado: "Como as gerações mais jovens etão reinventando tradições culturais?",
        alternativas: [
            {
                texto: "Através das músicas, filmes, e entre outras formas de arte.",
                afirmacao: "afirmação"
            },
            {
                texto: "A tradição nunca muda.",
                afirmacao: "afirmação"
            }


        ]
    },
    {
        enunciado: "Quais os impactos da tecnologia na preservação e disseminação da cultura?",
        alternativas: [
            {
                texto: "Ter mais acessos à informações.",
                afirmacao: "afirmação"
            },
            {
                texto:"Não contribui em nada.",
                afirmacao: "afirmação"
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();