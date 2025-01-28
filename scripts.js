const noBtn = document.getElementById('no-btn');
const yesBtn = document.querySelector('#yes-btn')
const buttonsContainer = document.querySelector('.buttons');

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('click', moveButton);

function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = "absolute"
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

yesBtn.addEventListener('click', function() {
    window.location.href = './pages/invite.html';
})
