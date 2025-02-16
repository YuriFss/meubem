document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    let fotosEMensagens = [
        {foto: "imagens/foto1.jpeg", mensagem: "Teste 💖"},
        {foto: "imagens/foto2.jpeg", mensagem: "Teste 🎁"},
        {foto: "imagens/foto3.jpeg", mensagem: ""},
        {foto: "imagens/foto4.jpeg", mensagem: ""},
        {foto: "imagens/foto5.jpeg", mensagem: ""},
        {foto: "imagens/foto6.jpeg", mensagem: ""},
        {foto: "imagens/foto7.jpeg", mensagem: ""},
        {foto: "imagens/foto8.jpeg", mensagem: ""},
        {foto: "imagens/foto9.jpeg", mensagem: ""},
        {foto: "imagens/foto10.jpeg", mensagem: ""}
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
