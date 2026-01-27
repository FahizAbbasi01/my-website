const lightbox = document.getElementById('lightbox');

function clearLightbox() {
    lightbox.innerHTML = '';
}

function closeLightbox() {
    lightbox.style.opacity = '0';
    setTimeout(() => {
        lightbox.style.visibility = 'hidden';
        clearLightbox();
    }, 300);
}

lightbox.addEventListener('click', function(e) {
    if(e.target === lightbox) closeLightbox();
});

// ================= ALL GALLERIES =================
const galleries = {
    gilgit: { images: ["Picture/Gilgit/gilgit1.jpg","Picture/Gilgit/gilgit2.jpg","Picture/Gilgit/gilgit3.jpg"], description: "Gilgit is the crown of Northern Pakistan with majestic mountains, rivers, and vibrant culture." },
    hunza: { images: ["Picture/Hunza/hunza1.jpg","Picture/Hunza/hunza2.jpg"], description: "Hunza Valley is a paradise of snow-capped peaks, lush greenery, and centuries-old culture." },
    skardu: { images: ["Picture/Skardu/skardu1.jpg","Picture/Skardu/skardu2.jpg"], description: "Skardu is the land of towering mountains, crystal lakes, and adventurous landscapes." },
    swat: { images: ["Picture/Swat/Swat1.jpg","Picture/Swat/Swat2.jpg"], description: "Swat Valley is known as the Switzerland of Pakistan with lush green mountains and flowing rivers." },
    kashmir: { images: ["Picture/Kashmir/kashmir1.jpg","Picture/Kashmir/kashmir2.jpg"], description: "Kashmir (AJK) includes Neelum Valley, Muzaffarabad, and Ganga Choti with breathtaking scenery." },
    historical: { images: ["Picture/Historical/badshahi.jpg","Picture/Historical/lahorefort.jpg","Picture/Historical/minar.jpg"], description: "Explore Pakistan's historical and cultural heritage including Badshahi Mosque, Lahore Fort, and Minar-e-Pakistan." }
};

function showGallery(place) {
    clearLightbox();
    const gallery = galleries[place];

    // Description
    const desc = document.createElement('p');
    desc.textContent = gallery.description;
    lightbox.appendChild(desc);

    // Gallery
    const galleryDiv = document.createElement('div');
    galleryDiv.className = 'gallery';
    lightbox.appendChild(galleryDiv);

    const allImages = [...gallery.images, ...gallery.images];
    allImages.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        galleryDiv.appendChild(img);
    });

    lightbox.style.visibility = 'visible';
    lightbox.style.opacity = '1';
}
