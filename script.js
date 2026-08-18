const ROLES=[
  "Cybersecurity Student",
  "Aspiring Ethical Hacker",
  "Digital Forensics Enthusiast",
  "Cybersecurity Practitioner",
  "Problem Solver",
  "Continuous Learner"
];
let ri=0,ci=0,del=false;
function type(){
  const el=document.getElementById('typed'),w=ROLES[ri];
  if(!del){el.textContent=w.slice(0,++ci);if(ci===w.length){del=true;setTimeout(type,2000);return}}
  else{el.textContent=w.slice(0,--ci);if(ci===0){del=false;ri=(ri+1)%ROLES.length}}
  setTimeout(type,del?55:85);
}
type();

function toggleMob(){document.getElementById('mob').classList.toggle('show')}

function switchTab(id,btn){
  document.querySelectorAll('.tab-content').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById(id).classList.add('active');btn.classList.add('active');
}

function switchCertTab(id,btn){
  document.querySelectorAll('.cert-tab-content').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.cert-tab-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById(id).classList.add('active');btn.classList.add('active');
}

const obs=new IntersectionObserver(e=>{e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('vis')})},{threshold:.1});
document.querySelectorAll('.tl-item,.fade-up').forEach(el=>obs.observe(el));

const secs=document.querySelectorAll('section[id]');
const navAs=document.querySelectorAll('.links a');
window.addEventListener('scroll',()=>{
  let cur='';
  secs.forEach(s=>{if(window.scrollY>=s.offsetTop-100)cur=s.id});
  navAs.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur));
});

function openCertModal(src){
  const img=document.getElementById('modal-img');
  img.src=src;
  img.onerror=()=>{img.alt='Image not found'};
  document.getElementById('certModal').classList.add('open');
}
function closeModalBg(e){if(e.target===document.getElementById('certModal'))document.getElementById('certModal').classList.remove('open')}
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.getElementById('certModal').classList.remove('open')});

function sendMsg(){
  const n=document.getElementById('fn').value.trim();
  const e=document.getElementById('fe').value.trim();
  const s=document.getElementById('fs').value.trim();
  const m=document.getElementById('fm').value.trim();
  if(!n||!e||!m){alert('Please fill in all required fields.');return;}
  window.location.href=`mailto:anishpatel.cyber@gmail.com?subject=${encodeURIComponent(s||'Portfolio contact from '+n)}&body=${encodeURIComponent(m+'\n\nFrom: '+n+'\nReply to: '+e)}`;
  document.getElementById('form-ok').style.display='block';
}
