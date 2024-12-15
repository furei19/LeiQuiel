const images = [
    '/projectsContent/esp8266.png',
    '/projectsContent/rooftopStudying1.png',
    '/projectsContent/rooftopStudying2.png',
    '/projectsContent/mystvale.png',
    '/projectsContent/lance.png',
    '/projectsContent/hardDisk.png',
    '/projectsContent/ecrab.png',
    '/projectsContent/mimikyuu.png'
];
let currentIndex = 0;
const imgSlider = document.getElementById('img-slider');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('previous');

function showImage(index) {
    imgSlider.style.opacity = 0;
    setTimeout(() => {
        imgSlider.src = images[index];
        imgSlider.style.opacity = 1;
    }, 500);
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});