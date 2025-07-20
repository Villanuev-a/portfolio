const card = document.querySelector('.quadrado');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  const halfW = window.innerWidth / 2;
  const halfH = window.innerHeight / 2;
  const maxDeg = 10; 

  
  const rotateY = ((x - halfW) / halfW) * maxDeg;
  const rotateX = -((y - halfH) / halfH) * maxDeg;

  card.style.transform =
    `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
});

document.addEventListener('mouseleave', () => {
  card.style.transform = 'rotateX(0deg) rotateY(0deg)';
});
