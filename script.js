document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    let fotosEMensagens = [
        {foto: "imagens/foto1.jpeg", mensagem: "É difícil começar a descrever..."},
        {foto: "imagens/foto2.jpeg", mensagem: "Lembro de quando nos conhecemos pela primeira vez..."},
        {foto: "imagens/foto3.jpeg", mensagem: "E daquele primeiro beijo..."},
        {foto: "imagens/foto4.jpeg", mensagem: "Lembro da felicidade após chegar em casa do primeiro encontro..."},
        {foto: "imagens/foto5.jpeg", mensagem: "Amo seu sorriso..."},
        {foto: "imagens/foto6.jpeg", mensagem: "Amo sua risada quando te faço cócegas..."},
        {foto: "imagens/foto7.jpeg", mensagem: "Amo ser fotografado pela retina desses olhos lindos..."},
        {foto: "imagens/foto8.jpeg", mensagem: "Amo estar ao seu lado..."},
        {foto: "imagens/foto9.jpeg", mensagem: "E nesse dia especial amor..."},
        {foto: "imagens/foto10.jpeg", mensagem: "Te desejo feliz aniversário!, TE AMO!"},
    ];

    document.getElementById('startButton').addEventListener('click', function() {
        let musica = document.getElementById("musica");
        musica.play();
        showSlides();
        this.style.display = 'none';
    });

    function showSlides() {
        let container = document.querySelector(".slideshow-container");
        container.innerHTML = "";

        if (slideIndex >= fotosEMensagens.length) {
            slideIndex = fotosEMensagens.length -1;
        }

        let slide = document.createElement("div");
        slide.className = "mySlides";

        let moldura = document.createElement("div");
        moldura.className = "moldura";

        let img = document.createElement("img");
        img.src = fotosEMensagens[slideIndex].foto;

        let textoMoldura = document.createElement("p");
        textoMoldura.className = "texto-moldura";
        textoMoldura.textContent = fotosEMensagens[slideIndex].mensagem;

        moldura.appendChild(img);
        moldura.appendChild(textoMoldura);
        slide.appendChild(moldura);
        container.appendChild(slide);
        
        if (slideIndex < fotosEMensagens.length - 1) {
              slideIndex++;
             setTimeout(showSlides, 10000);
        }

    }
});

function toggleMusic() {
    let musica = document.getElementById("musica");
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
}