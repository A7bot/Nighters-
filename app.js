/* ================================================================
   NIGHTERS CYBER ACADEMY — app.js (Production Ready)
   ================================================================ */

// ── SYSTEM CONFIGURATION VARIABLES ───────────────────────────────
const SUPABASE_URL  = "https://pagphlvalfkzvvnmzgcl.supabase.co";
const SUPABASE_KEY  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhZ3BobHZhbGZrenZ2bm16Z2NsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE0MTc4ODAsImV4cCI6MjA5Njk5Mzg4MH0.JKHAj-Jw0ilEjji0Kg63Tm213PlMOBtRtsNu1NQxBvI";
const ADMIN_EMAILS  = ["malikyou823@gmail.com"];
// ─────────────────────────────────────────────────────────────────

// Global Supabase Client Initialization Instance
let supabaseClient = null;
if (typeof supabase !== 'undefined' && supabase.createClient) {
  supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
}

// Experience Level Range Matrix Definitions
const RANKS = [
  { name:"Recruit",           cls:"bz", min:0,     max:499   },
  { name:"Operative",         cls:"bs", min:500,   max:1999  },
  { name:"Red Agent",         cls:"br", min:2000,  max:4999  },
  { name:"Senior Analyst",    cls:"bg", min:5000,  max:9999  },
  { name:"Elite Red Teamer",  cls:"be", min:10000, max:Infinity }
];

/**
 * Returns rank configuration block based on player points total
 */
function getRank(pts){
  const cleanPts = Math.max(0, parseInt(pts) || 0);
  for(let i=RANKS.length-1;i>=0;i--) if(cleanPts>=RANKS[i].min) return RANKS[i];
  return RANKS[0];
}

/**
 * Calculates current rank level tier progress metrics
 */
function getRankProgress(pts){
  const cleanPts = Math.max(0, parseInt(pts) || 0);
  const idx=RANKS.findIndex(r=>cleanPts>=r.min&&cleanPts<=r.max);
  if(idx<0||idx===RANKS.length-1) return {pct:100,label:"MAX RANK — ELITE RED TEAMER"};
  const currentRank = RANKS[idx];
  const next=RANKS[idx+1];
  const pct=Math.round(((cleanPts-currentRank.min)/(next.min-currentRank.min))*100);
  return {pct:Math.max(0, Math.min(pct,100)),label:`${cleanPts} / ${next.min} pts → ${next.name}`};
}

/**
 * Cryptographic SHA-256 text hashing normalization routine
 */
async function sha256(str){
  if(!str) return '';
  const buf=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(str.trim().toLowerCase()));
  return [...new Uint8Array(buf)].map(x=>x.toString(16).padStart(2,'0')).join('');
}

/**
 * DOM Parameter Output Sanitizer (Prevents Basic Cross-Site Scripting Sinks)
 */
function esc(s){
  if(!s&&s!==0)return'';
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#x27;');
}

/**
 * Unique Device Browser Environmental Profiler Signature Tracking Fingerprint
 */
function fingerprint(){
  const s=[navigator.userAgent,navigator.language,screen.width+'x'+screen.height,new Date().getTimezoneOffset()].join('|');
  let h=0; for(let i=0;i<s.length;i++) h=(Math.imul(31,h)+s.charCodeAt(i))|0;
  return (h>>>0).toString(16);
}

/**
 * Renders stylized floating operational warning status blocks on specific interface targets
 */
function showAlert(id,msg,type){
  const el=document.getElementById(id); if(!el)return;
  el.textContent=msg; el.className='alert alert-'+(type||'err')+' show';
  setTimeout(()=>el.classList.remove('show'),6000);
}

/**
 * Renders modular sliding contextual diagnostic toast elements
 */
function toast(msg,type){
  let w=document.getElementById('toast-wrap');
  if(!w){w=document.createElement('div');w.id='toast-wrap';document.body.appendChild(w);}
  const t=document.createElement('div');
  t.className='toast'+(type==='ok'?' t-ok':type==='warn'?' t-warn':'');
  const s=document.createElement('span');s.textContent=msg;
  const x=document.createElement('span');x.className='tx';x.textContent='✕';x.onclick=()=>t.remove();
  t.appendChild(s);t.appendChild(x);w.appendChild(t);
  setTimeout(()=>{if(t.parentNode)t.remove();},4500);
}

/**
 * Enforces session verification checks on general operative interfaces
 */
async function requireAuth(sb){
  const client = sb || supabaseClient;
  if(!client) { console.error("Supabase client instance not initialized."); return null; }
  const {data:{user},error}=await client.auth.getUser();
  if(error||!user){window.location='login.html';return null;}
  return user;
}

/**
 * Restricts core validation routes to authorized system administration profiles only
 */
async function requireAdmin(sb){
  const client = sb || supabaseClient;
  const u=await requireAuth(client); if(!u)return null;
  if(!ADMIN_EMAILS.includes(u.email)){window.location='dashboard.html';return null;}
  return u;
}

/**
 * Cyber Terminal Matrix Waterfall Animation Pipeline Control Interface
 */
function initMatrix(){
  const c=document.getElementById('bg-canvas'); if(!c)return;
  const ctx=c.getContext('2d');
  const resize=()=>{c.width=window.innerWidth;c.height=window.innerHeight;};
  resize(); window.addEventListener('resize',resize);
  const chars='NIGHTERS01アXPLOIT/\\ABCDEF0123456789{}[]<>!@#';
  const fs=13; let drops=[];
  const rb=()=>{drops=Array.from({length:Math.floor(c.width/fs)},()=>Math.random()*-60);};
  rb(); window.addEventListener('resize',rb);
  
  setInterval(()=>{
    ctx.fillStyle='rgba(0,0,0,0.065)';ctx.fillRect(0,0,c.width,c.height);
    ctx.fillStyle='#e11d48';ctx.font=fs+"px 'JetBrains Mono'";
    drops.forEach((y,i)=>{
      ctx.globalAlpha=Math.random()*.55+.1;
      ctx.fillText(chars[Math.floor(Math.random()*chars.length)],i*fs,y*fs);
      ctx.globalAlpha=1;
      if(y*fs>c.height&&Math.random()>.972)drops[i]=0;
      drops[i]+=.5+Math.random()*.4;
    });
  },46);
}

/**
 * Operational Typewriter Teletype Text Terminal Animation Controller
 */
function typewriter(id,phrases,speed){
  const el=document.getElementById(id);if(!el)return;
  let pi=0,ci=0,del=false;speed=speed||65;
  (function tick(){
    const p=phrases[pi%phrases.length];
    if(del){el.textContent=p.slice(0,ci--);if(ci<0){del=false;pi++;return setTimeout(tick,500);}}
    else{el.textContent=p.slice(0,ci++);if(ci>p.length){del=true;return setTimeout(tick,2100);}}
    setTimeout(tick,del?26:speed);
  })();
}

/**
 * Tracks remaining campaign timeline markers for capture-the-flag assignments
 */
function countdown(targetISO,elId){
  const el=document.getElementById(elId);if(!el)return;
  const end=new Date(targetISO).getTime();
  const tick=()=>{
    const d=end-Date.now();
    if(d<=0){el.textContent='00:00:00';el.classList.add('urgent');return;}
    const h=String(Math.floor(d/3600000)).padStart(2,'0');
    const m=String(Math.floor((d%3600000)/60000)).padStart(2,'0');
    const s=String(Math.floor((d%60000)/1000)).padStart(2,'0');
    el.textContent=`${h}:${m}:${s}`;
    if(d<300000)el.classList.add('urgent');
  };
  tick();return setInterval(tick,1000);
}

// Structural ISO date conversions and helpers
const today=()=>new Date().toISOString().slice(0,10);
const fmtDate=iso=>new Date(iso).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'});
const fmtTime=iso=>new Date(iso).toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'});
const getPhase=lvl=>lvl<=10?1:lvl<=20?2:3;

window.addEventListener('DOMContentLoaded',initMatrix);
