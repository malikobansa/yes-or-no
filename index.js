const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');

// Make the Yes button move away when hovered over
yesBtn.addEventListener('click', () => {
    const randomX = Math.floor(Math.random() * window.innerWidth / 2) + 1;
    const randomY = Math.floor(Math.random() * window.innerHeight / 2) + 1;
    yesBtn.style.position = 'absolute';
    yesBtn.style.left = `${randomX}px`;
    yesBtn.style.top = `${randomY}px`;
});

// No button click message
noBtn.addEventListener('click', () => {
    alert("Well, that’s sad! Maybe next time 😔");
});
