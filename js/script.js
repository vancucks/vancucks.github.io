const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


const jump = () => {
  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 700);
};

const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

  console.log(marioPosition);

  if (pipePosition <= 40 && marioPosition < 70) {
    pipe.style.animation = 'name';
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = 'name';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = 'imagens/mariomorrendo.webp';
    mario.style.width = '45px';

    clearInterval(loop); // Para interromper o loop após a colisão

    
  }
}, 10);

document.addEventListener('keydown', jump);