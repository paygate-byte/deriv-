// ==== PARTICLES EFFECT ====
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  if (!particlesContainer) return;
  const particleCount = 36;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    const size = Math.random() * 5 + 3;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    const duration = Math.random() * 13 + 12;
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${Math.random() * 4}s`;
    particlesContainer.appendChild(particle);
  }
}
window.addEventListener('DOMContentLoaded', createParticles);

// ==== BUTTON ACTIONS ====
function proceed() {
  window.location.href = 'products.html';
}
