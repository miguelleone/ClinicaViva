// carrossel dos profissionais
let arrayProfissionais = [ 
    {
        "nome": "Bruna",
        "cargo": "Médica",
        "desc": "Médica generalista, atendimentos de crianças, saúde da mulher, Prep, e atendimentos voltados para saúde mental.",
        "img": "/assets/img/profissionais/Bruna.jpg"
    },
    {
        "nome": "Carmen",
        "cargo": "Psicólogue",
        "desc": "Psicodramaticista, oferece atendimento em libras, atende público adolescente, adultos, idosos, conjugais, familiares e em grupo. Experiência em demandas relacionadas à orientação sexual e identidade de gênero.",
        "img": "assets/img/profissionais/Carmem.jpg"
    },
    {
        "nome": "Clara",
        "cargo": "Psicólogue",
        "desc": "Psicanalista dissidente, atendimento de pessoas LGBTIA+, jovens e adultos, depressão, ansiedade, discriminação, autolesão e sintomas diversos a partir da Psicanálise.",
        "img": "/assets/img/profissionais/Clara.jpg"
    },
    {
        "nome": "Augusto",
        "cargo": "Psicólogo",
        "desc": "Psicólogo, homem trans, atendimento de crianças, adolescentes, adultos e casais, com temáticas sobre luto, transtornos dissociativos de personalidade, sexualidade, sofrimento no trabalho, minorias e população LGBTIA+ com foco em transidentidades.",
        "img": "/assets/img/profissionais/Augusto.jpeg"
    },
    {
        "nome": "Gabriela",
        "cargo": "Psicóloga",
        "desc": "Psicanalista, membro da comissão LGBTIA+ do CRP DF, associada ao Fórum do Campo Lacaniano de Brasília. Trabalha com público adulto e adolescente, com enfoque no atendimento da população LGBTIA+",
        "img": "/assets/img/profissionais/Gabriela.jpg"
    },
    {
        "nome": "Lorena",
        "cargo": "Nutricionista",
        "desc": "Trabalha com crianças e adultos com foco em vegetarianismo e educação alimentar. Especialista em nutrição clínica e acredita que o atendimento nutricional deve ser acolhedor e inclusivo para todes, todas e todos.",
        "img": "/assets/img/profissionais/Lorena.jpg"
    },
    {
        "nome": "Paulo",
        "cargo": "Psicólogo",
        "desc": "Psicólogo, psicanalista, atendimento de adolescentes, adultos e idosos. Enfoque nas demandas sobre sexualidade, identidade e gênero. Experiência em demandas diversas sob o olhar da psicanálise.",
        "img": "/assets/img/profissionais/Paulo.jpg"
    },
    {
        "nome": "Ana Julia",
        "cargo": "Psicóloga",
        "desc": "Psicóloga, Gestalt-terapeuta, atende crianças, adolescentes, adultos e pessoas LGBTIA+. Experiência com demandas de ansiedade, depressão, relações interpessoais, autoconhecimento, entre outras.",
        "img": "/assets/img/profissionais/AnaJulia.jpg"
    },
    {
        "nome": "Najila",
        "cargo": "Psicóloga",
        "desc": "Psicóloga, especialista em Neuropsicologia, trabalha com avaliação para concursos, cirurgias e demais investigações.",
        "img": "/assets/img/profissionais/Najila.jpg"
    }
]

let carProfissionais = Array.from(document.getElementsByClassName("profissionais-container"));
let contador = 0;
carProfissionais.forEach(objetoArray => {
    objetoArray.children[0].setAttribute('style',`background-image: url(${arrayProfissionais[contador].img})`);
    objetoArray.children[1].children[0].textContent += arrayProfissionais[contador].nome;
    objetoArray.children[1].children[1].textContent += arrayProfissionais[contador].cargo;
    objetoArray.children[1].children[2].textContent += arrayProfissionais[contador].desc;
    contador++;
})

// video

var video = document.getElementById("videoInst")

if (video.play() !== undefined) {
    video.play().then(_ => {
        // Autoplay started!
    }).catch(error => {
        // Try muted autoplay
        video.muted = true
        video.play().then(_ => {
            // Muted autoplay started. Show unmute button
        }).catch(error => {
        })
    });
}

video.addEventListener('click',function(){
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
},false);

// scroll carrossel profissionais

const buttonRight = document.getElementById('profissionais-right');
const buttonLeft = document.getElementById('profissionais-left');

buttonRight.onclick = function () {
  document.getElementById('carrossel').scrollLeft += 704;
};
buttonLeft.onclick = function () {
  document.getElementById('carrossel').scrollLeft -= 704;
};

// scroll carrossel convenios

const conveniosRight = document.getElementById('convenios-left');
const conveniosLeft = document.getElementById('convenios-right');

conveniosLeft.onclick = function () {
  document.getElementById('convenios-carrossel').scrollLeft += 480;
};
conveniosRight.onclick = function () {
  document.getElementById('convenios-carrossel').scrollLeft -= 480;
};


