document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    let fotosEMensagens = [
        {foto: "imagens/foto1.jpeg", mensagem: "Meu amor, você é a luz da minha vida! 💖"},
        {foto: "imagens/foto2.jpeg", mensagem: "Cada momento com você é um presente. 🎁"},
        {foto: "imagens/foto3.jpeg", mensagem: "Nicole, eu te amo mais que tudo! ❤️"},
        {foto: "imagens/foto4.jpeg", mensagem: "Nicole, eu te amo mais que tudo! ❤️"},
        {foto: "imagens/foto5.jpeg", mensagem: "Nicole, eu te amo mais que tudo! ❤️"},
        {foto: "imagens/foto6.jpeg", mensagem: "Nicole, eu te amo mais que tudo! ❤️"},
        {foto: "imagens/foto7.jpeg", mensagem: "Nicole, eu te amo mais que tudo! ❤️"},
        {foto: "imagens/foto8.jpeg", mensagem: "Nicole, eu te amo mais que tudo! ❤️"},
        {foto: "imagens/foto9.jpeg", mensagem: "Nicole, eu te amo mais que tudo! ❤️"},
        {foto: "imagens/foto10.jpeg", mensagem: "Nicole, eu te amo mais que tudo! ❤️"}
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

        if (slideIndex >= fotosEMensagens.length) {slideIndex = 0}

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

        slideIndex++;
        setTimeout(showSlides, 10000);
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
