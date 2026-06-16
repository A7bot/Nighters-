/* ================================================================
   NIGHTERS CYBER ACADEMY — app.js
   Shared config + utilities. Loaded on every page.
   ================================================================ */

// ── CONFIG — replace with your real Supabase values ──────────────
const SUPABASE_URL = "https://pagphlvalfkzvvnmzgcl.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhZ3BobHZhbGZrenZ2bm16Z2NsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0MTc4ODAsImV4cCI6MjA5Njk5Mzg4MH0.JKHAj-Jw0ilEjji0Kg63Tm213PlMOBtRtsNu1NQxBvI";

// Your admin email(s). Anyone with these emails gets admin access.
const ADMIN_EMAILS = ["malikyou823@gmail.com"];
// ─────────────────────────────────────────────────────────────────

// ── RANK SYSTEM ───────────────────────────────────────────────────
const RANKS = [
  { name:"Bronze Operative", cls:"bz", min:0,     max:999   },
  { name:"Silver Agent",     cls:"bs", min:1000,  max:4999  },
  { name:"Gold Analyst",     cls:"bg", min:5000,  max:14999 },
  { name:"Platinum Ghost",   cls:"bp", min:15000, max:49999 },
  { name:"Elite Red Teamer", cls:"be", min:50000, max:Infinity }
];

function getRank(pts) {
  for (let i = RANKS.length - 1; i >= 0; i--) {
    if (pts >= RANKS[i].min) return RANKS[i];
  }
  return RANKS[0];
}

function getRankProgress(pts) {
  const idx = RANKS.findIndex(r => pts >= r.min && pts <= r.max);
  const rank = RANKS[idx];
  if (!rank || idx === RANKS.length - 1) return { pct:100, label:"MAX RANK — ELITE RED TEAMER" };
  const next = RANKS[idx + 1];
  const pct  = Math.round(((pts - rank.min) / (next.min - rank.min)) * 100);
  return { pct:Math.min(pct, 100), label:`${pts} / ${next.min} pts → ${next.name}` };
}

// ── SHA-256 (for flag hashing) ─────────────────────────────────────
async function sha256(str) {
  const buf = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(str.trim().toLowerCase())
  );
  return [...new Uint8Array(buf)].map(x => x.toString(16).padStart(2,'0')).join('');
}

// ── XSS SAFE ESCAPE ───────────────────────────────────────────────
function esc(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#x27;');
}

// ── BROWSER FINGERPRINT ───────────────────────────────────────────
function fingerprint() {
  const s = [
    navigator.userAgent,
    navigator.language,
    `${screen.width}x${screen.height}`,
    new Date().getTimezoneOffset(),
    navigator.hardwareConcurrency || 0
  ].join('|');
  let h = 0;
  for (let i = 0; i < s.length; i++) { h = (Math.imul(31, h) + s.charCodeAt(i)) | 0; }
  return (h >>> 0).toString(16);
}

// ── ALERTS ────────────────────────────────────────────────────────
function showAlert(id, msg, type) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = msg;
  el.className = `alert alert-${type || 'err'} show`;
  setTimeout(() => el.classList.remove('show'), 6000);
}

// ── TOAST ─────────────────────────────────────────────────────────
function toast(msg, type) {
  let wrap = document.getElementById('toast-wrap');
  if (!wrap) {
    wrap = document.createElement('div');
    wrap.id = 'toast-wrap';
    document.body.appendChild(wrap);
  }
  const t = document.createElement('div');
  t.className = `toast${type === 'err' ? ' t-err' : type === 'ok' ? ' t-ok' : ''}`;
  const span = document.createElement('span');
  span.textContent = msg;
  const x = document.createElement('span');
  x.className = 'tx';
  x.textContent = '✕';
  x.onclick = () => t.remove();
  t.appendChild(span);
  t.appendChild(x);
  wrap.appendChild(t);
  setTimeout(() => { if (t.parentNode) t.remove(); }, 4500);
}

// ── AUTH GUARDS ───────────────────────────────────────────────────
async function requireAuth(sb) {
  const { data: { user }, error } = await sb.auth.getUser();
  if (error || !user) { window.location = 'login.html'; return null; }
  return user;
}

async function requireAdmin(sb) {
  const user = await requireAuth(sb);
  if (!user) return null;
  if (!ADMIN_EMAILS.includes(user.email)) {
    window.location = 'dashboard.html'; return null;
  }
  return user;
}

// ── MATRIX (auth pages only) ──────────────────────────────────────
function initMatrix() {
  const c = document.getElementById('bg-canvas');
  if (!c) return;
  const ctx = c.getContext('2d');
  const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight; };
  resize();
  window.addEventListener('resize', resize);
  const chars = 'NIGHTERS01アイウXPLOIT/ABCDEF0123456789{}[]';
  const fs = 13;
  let drops = [];
  const rebuild = () => {
    const cols = Math.floor(c.width / fs);
    drops = Array.from({length:cols}, () => Math.random() * -60);
  };
  rebuild();
  window.addEventListener('resize', rebuild);
  setInterval(() => {
    ctx.fillStyle = 'rgba(0,0,0,0.06)';
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = '#c8a84b';
    ctx.font = fs + "px 'JetBrains Mono'";
    drops.forEach((y, i) => {
      ctx.globalAlpha = Math.random() * 0.55 + 0.15;
      ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * fs, y * fs);
      ctx.globalAlpha = 1;
      if (y * fs > c.height && Math.random() > 0.972) drops[i] = 0;
      drops[i] += 0.45 + Math.random() * 0.45;
    });
  }, 48);
}

// ── TYPEWRITER ────────────────────────────────────────────────────
function typewriter(id, phrases, speed) {
  const el = document.getElementById(id);
  if (!el) return;
  let pi = 0, ci = 0, del = false;
  speed = speed || 65;
  (function tick() {
    const p = phrases[pi % phrases.length];
    if (del) { el.textContent = p.slice(0, ci--); if (ci < 0) { del = false; pi++; return setTimeout(tick, 500); } }
    else     { el.textContent = p.slice(0, ci++); if (ci > p.length) { del = true; return setTimeout(tick, 2100); } }
    setTimeout(tick, del ? 28 : speed);
  })();
}

// ── COUNTDOWN ─────────────────────────────────────────────────────
function countdown(targetISO, elId) {
  const el = document.getElementById(elId);
  if (!el) return;
  const end = new Date(targetISO).getTime();
  const tick = () => {
    const diff = end - Date.now();
    if (diff <= 0) { el.textContent = '00:00:00'; el.classList.add('urgent'); return; }
    const h = String(Math.floor(diff/3600000)).padStart(2,'0');
    const m = String(Math.floor((diff%3600000)/60000)).padStart(2,'0');
    const s = String(Math.floor((diff%60000)/1000)).padStart(2,'0');
    el.textContent = `${h}:${m}:${s}`;
    if (diff < 300000) el.classList.add('urgent'); // red under 5 min
  };
  tick();
  return setInterval(tick, 1000);
}

// ── HELPERS ───────────────────────────────────────────────────────
const today = () => new Date().toISOString().slice(0,10);
const fmtDate = iso => new Date(iso).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'});
const fmtTime = iso => new Date(iso).toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'});

// ── INIT ──────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', initMatrix);
