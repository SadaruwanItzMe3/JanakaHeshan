(()=>{const b=document.querySelector('.menu-btn'),n=document.getElementById('nav');
b&&b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
const y=document.getElementById('yr');y&&(y.textContent=new Date().getFullYear());
const fb=document.querySelectorAll('.filters button'),ps=document.querySelectorAll('.project'),em=document.querySelector('.empty');
fb.forEach(x=>x.addEventListener('click',()=>{fb.forEach(k=>k.classList.remove('active'));x.classList.add('active');let c=0;
ps.forEach(p=>{const s=x.dataset.filter==='all'||p.dataset.cat===x.dataset.filter;p.hidden=!s;c+=s});em&&(em.hidden=c>0)}));
const f=document.getElementById('contact-form');
f&&f.addEventListener('submit',e=>{e.preventDefault();if(!f.checkValidity()){f.reportValidity();return}
const d=new FormData(f),s=encodeURIComponent('Portfolio message from '+d.get('name')),m=encodeURIComponent(d.get('message')+'\n\nFrom: '+d.get('name')+' <'+d.get('email')+'>');
location.href='mailto:heshanmd.ml@gmail.com?subject='+s+'&body='+m})})();
