// Add mousemove effect for 3D card movement
document.querySelector('.scene').addEventListener('mousemove', (e) => {
    const card = document.querySelector('.card');
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = -(x - centerX) / 20;
    
    card.style.transform = `translateZ(50px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

// Reset card position when mouse leaves
document.querySelector('.scene').addEventListener('mouseleave', () => {
    const card = document.querySelector('.card');
    card.style.transform = 'translateZ(50px)';
});
