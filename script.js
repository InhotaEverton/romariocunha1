// JavaScript para funcionalidade do modal de foto de perfil
const profilePhoto = document.getElementById('profilePhoto');
const profileModal = document.getElementById('profileModal');
const profileModalImg = document.getElementById('profileModalImg');
const profileCaption = document.getElementById('profileCaption');
const closeProfile = document.getElementById('closeProfile');

// Quando clicar na foto do perfil, abrir o modal
profilePhoto.onclick = function() {
    profileModal.style.display = 'block';
    profileModalImg.src = profilePhoto.src;
    profileCaption.innerHTML = profilePhoto.alt;
};

// Fechar o modal de foto de perfil
closeProfile.onclick = function() {
    profileModal.style.display = 'none';
};

// Fechar o modal clicando fora da imagem (área de fundo)
profileModal.onclick = function(event) {
    if (event.target === profileModal) {
        profileModal.style.display = 'none';
    }
};

// JavaScript para a galeria de imagens
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

const galleryItems = document.querySelectorAll(".gallery-item img");

galleryItems.forEach((img, index) => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
        currentIndex = index;
    };
});

// Fechar o modal de galeria ao clicar no botão de fechar (×)
const closeBtn = modal.querySelector(".close");
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// Fechar o modal clicando fora da imagem (área de fundo)
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// Navegação nas imagens da galeria
prevBtn.onclick = function() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    modalImg.src = galleryItems[currentIndex].src;
    captionText.innerHTML = galleryItems[currentIndex].alt;
};

nextBtn.onclick = function() {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    modalImg.src = galleryItems[currentIndex].src;
    captionText.innerHTML = galleryItems[currentIndex].alt;
};

// Obtém os elementos do hambúrguer e do menu
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// Adiciona um evento de clique ao hambúrguer para alternar o menu
hamburger.addEventListener("click", function() {
    menu.classList.toggle("active"); // Alterna a classe "active" no menu
});
