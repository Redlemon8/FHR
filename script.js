document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title');
    const bannerVideo = document.getElementById('banner-video');
    const startTime = 12;
    const duration = 5;

    const adjustOpacity = () => {
        const currentTime = bannerVideo.currentTime;
        if (currentTime >= startTime) {
            const opacity = 1 - ((currentTime - startTime) / duration);
            title.style.opacity = opacity;
        }
    }

    bannerVideo.addEventListener('timeupdate', adjustOpacity);

    bannerVideo.addEventListener('ended', () => {
        title.style.display = 'none';
    });
});


