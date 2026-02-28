
const galleryDiv = document.querySelector('.pic');
const learnMoreBtn = document.querySelector('.pic button');

learnMoreBtn.addEventListener('click', function() {
    const newImageSources = ['/images/wind1.png', '/images/wind2.png'];

    newImageSources.forEach(src => {
    
        const newImg = document.createElement('img');
        newImg.src = src;
        newImg.alt = "Additional Gallery Image"
        galleryDiv.insertBefore(newImg, learnMoreBtn);
    });
    learnMoreBtn.style.display = 'none';
});