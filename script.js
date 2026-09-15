function getStatus(now) {
  const day = now.getDay(); // 0 = domingo ... 6 = sabado
  const minutes = now.getHours() * 60 + now.getMinutes();

  const lunchStart = 11 * 60;
  const lunchEnd = 14 * 60;
  const dinnerStart = 18 * 60 + 30;
  const dinnerEnd = 23 * 60;
  const isMonday = day === 1;

  if (minutes >= lunchStart && minutes < lunchEnd) {
    return { text: 'Aberto para Almoço · Fecha às 14h', state: 'aberto' };
  }

  if (!isMonday && minutes >= dinnerStart && minutes < dinnerEnd) {
    return { text: 'Rodízio Aberto · Fecha às 23h', state: 'aberto' };
  }

  if (!isMonday && minutes >= lunchEnd && minutes < dinnerStart) {
    return { text: 'Abriremos às 18h30 para o Rodízio', state: 'fechado' };
  }

  if (isMonday && minutes >= lunchEnd) {
    return { text: 'Fechado hoje à noite · Abrimos amanhã às 11h', state: 'fechado' };
  }

  return { text: 'Fechado agora · Abrimos às 11h', state: 'fechado' };
}

function updateStatus() {
  const statusText = document.getElementById('statusText');
  const statusDot = document.getElementById('statusDot');
  if (!statusText || !statusDot) return;

  const { text, state } = getStatus(new Date());
  statusText.textContent = text;
  statusDot.classList.remove('aberto', 'fechado');
  statusDot.classList.add(state);
}

function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach((target) => observer.observe(target));
}

document.addEventListener('DOMContentLoaded', () => {
  updateStatus();
  setInterval(updateStatus, 60000);
  initScrollReveal();

  const anoAtual = document.getElementById('anoAtual');
  if (anoAtual) anoAtual.textContent = new Date().getFullYear();
});
