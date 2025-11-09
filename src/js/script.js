document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.alert').forEach(li => {
    li.addEventListener('click', () => {
        alert(li.textContent);
    });
});

document.querySelectorAll('.spotify_player').forEach(el => {
    const spotifyID = el.dataset.spotifyid;
    const width = el.dataset.width || 300;
    const height = el.dataset.height || 380;

    // Skapa iframe
    const iframe = document.createElement('iframe');
    iframe.src = `https://open.spotify.com/embed/track/${spotifyID}`;
    iframe.width = width;
    iframe.height = height;
    iframe.frameBorder = '0';
    iframe.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
    iframe.loading = 'lazy';

    // Lägg in spelaren i div:en
    el.appendChild(iframe);
});


