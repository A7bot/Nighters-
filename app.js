// ==========================================
// CYBER ACADEMY — Core Config
// ==========================================

const SUPABASE_URL = "https://pagphlvalfkzvvnmzgcl.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhZ3BobHZhbGZrenZ2bm16Z2NsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0MTc4ODAsImV4cCI6MjA5Njk5Mzg4MH0.JKHAj-Jw0ilEjji0Kg63Tm213PlMOBtRtsNu1NQxBvI";

// ==========================================
// MATRIX RAIN ANIMATION
// ==========================================

function initMatrix() {
  const canvas = document.getElementById('matrix-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const chars = 'アイウエオカキクケコサシスセソ01アABCDEF0123456789><{}[]|/\\';
  const fontSize = 14;
  const cols = Math.floor(canvas.width / fontSize);
  const drops = Array(cols).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px Share Tech Mono';
    drops.forEach((y, i) => {
      const ch = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(ch, i * fontSize, y * fontSize);
      if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
  }

  setInterval(draw, 40);

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

// ==========================================
// TYPEWRITER
// ==========================================

function typewriter(elementId, phrases, speed = 60) {
  const el = document.getElementById(elementId);
  if (!el) return;
  let i = 0, j = 0, deleting = false;

  function tick() {
    const phrase = phrases[i % phrases.length];
    if (deleting) {
      el.textContent = phrase.slice(0, j--);
      if (j < 0) { deleting = false; i++; setTimeout(tick, 500); return; }
    } else {
      el.textContent = phrase.slice(0, j++);
      if (j > phrase.length) { deleting = true; setTimeout(tick, 1800); return; }
    }
    setTimeout(tick, deleting ? 30 : speed);
  }
  tick();
}

// ==========================================
// SHOW ALERT
// ==========================================

function showAlert(id, msg, type = 'error') {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = '// ' + msg;
  el.className = `alert alert-${type} show`;
  setTimeout(() => el.classList.remove('show'), 5000);
}

// ==========================================
// INIT ON LOAD
// ==========================================

window.addEventListener('DOMContentLoaded', () => {
  initMatrix();
});