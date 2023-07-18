// carrossel dos profissionais
let arrayProfissionais = [ 
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
        "nome": "Lethicia",
        "cargo": "Nutricionista",
        "desc": "Nutricionista clínica com foco em emagrecimento e hipertrofia, sendo especialista em nutrição esportiva. Acredita em um processo descomplicado, sem dietas restritivas.",
        "img": "/assets/img/profissionais/Lethicia.jpg"
    },
    {
        "nome": "Bárbara",
        "cargo": "Estagiária",
        "desc": "Estudante de Psicologia no CEUB, aprimorando seus conhecimentos teóricos junto à prática profissional.",
        "img": "/assets/img/profissionais/Bárbara.png"
    },
    {
        "nome": "Tábata",
        "cargo": "Médica",
        "desc": "Atendimento com escuta qualificada e direcionada para o cuidado. Atendimento infantil, saúde da mulher, ocupacional e saúde mental.",
        "img": "/assets/img/profissionais/Tabata.jpeg"
    },
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

buttonRight.onmouseover = function () {
  document.getElementById('carrossel').scrollLeft += 704;
};
buttonLeft.onmouseover = function () {
  document.getElementById('carrossel').scrollLeft -= 704;
};

// scroll carrossel convenios

const conveniosRight = document.getElementById('convenios-left');
const conveniosLeft = document.getElementById('convenios-right');

conveniosLeft.onmouseover = function () {
  document.getElementById('convenios-carrossel').scrollLeft += 480;
};
conveniosRight.onmouseover = function () {
  document.getElementById('convenios-carrossel').scrollLeft -= 480;
};


function copy() {
    // Get the text field
    var copyText = document.getElementById("email");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}

