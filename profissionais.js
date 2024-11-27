export default function initfetchProf() {
    async function fetchProf(url) {
        try {
            const response = await fetch(url);
            const profJson = await response.json();
            const containerProfissionais = document.querySelector('.profissionais-carrossel');

            // Adiciona os profissionais ao carrossel
            profJson.forEach(profissional => {
                const divProf = createDivProf(profissional);
                containerProfissionais.appendChild(divProf);
            });

            // Inicializa o carrossel
            initCarousel();
        } catch (error) {
            console.error("Erro ao buscar os profissionais:", error);
        }
    }

    function createDivProf(profissional) {
        const div = document.createElement('div');
        div.classList.add('gapProfissional');
        
        if (profissional.id % 2 === 0) {
            div.innerHTML = `
                <div class="imgProfissional" style="background-image: url(${profissional.img});"></div>
                <div class="infoProfissional" style="background-color: var(--${profissional.cor})">
                    <h2>${profissional.nome}</h2>
                    <h4>${profissional.cargo}</h4>
                    <p>${profissional.desc}</p>
                </div>`;
        } else {
            div.innerHTML = `
                <div class="infoProfissional" style="background-color: var(--${profissional.cor})">
                    <h2>${profissional.nome}</h2>
                    <h4>${profissional.cargo}</h4>
                    <p>${profissional.desc}</p>
                </div>
                <div class="imgProfissional" style="background-image: url(${profissional.img});"></div>`;
        }
        
        return div;
    }

    function initCarousel() {
        const carrossel = document.querySelector('.profissionais-carrossel');
        const btnLeft = document.createElement('button');
        const btnRight = document.createElement('button');

        // Configurações dos botões de navegação
        btnLeft.classList.add('nav-button', 'nav-left');
        btnLeft.innerHTML = '◀';
        btnRight.classList.add('nav-button', 'nav-right');
        btnRight.innerHTML = '▶';

        // Adiciona os botões ao carrossel
        document.querySelector('.profissionais').appendChild(btnLeft);
        document.querySelector('.profissionais').appendChild(btnRight);

        // Lógica para navegação
        const itemWidth = 320; // Largura total de cada item (incluindo gap)

        btnRight.addEventListener('click', () => {
            carrossel.scrollBy({ left: itemWidth, behavior: 'smooth' }); // Rola para a direita
        });

        btnLeft.addEventListener('click', () => {
            carrossel.scrollBy({ left: -itemWidth, behavior: 'smooth' }); // Rola para a esquerda
        });
    }

    // Chama a função para fazer o fetch dos profissionais
    fetchProf('profissionais.json');
}