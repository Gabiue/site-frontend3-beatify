let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});





function playMusic(src) {
    // Seleciona o elemento de áudio pelo ID
    const audioPlayer = document.getElementById('audio-player');
    // Se a fonte atual do áudio for diferente da nova fonte, atualiza a fonte
    if (audioPlayer.src !== src) {
        audioPlayer.src = src;
    }
    // Toca a música
    audioPlayer.play();
}