(()=>{const els=document.querySelectorAll('[data-reveal]');
els.forEach((el,i)=>{if(el.hasAttribute('data-stagger'))el.style.setProperty('--d',(i%4)*0.1+'s')});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
els.forEach(e=>io.observe(e));
const px=document.querySelectorAll('[data-parallax]');let t=false;
addEventListener('scroll',()=>{if(t)return;t=true;requestAnimationFrame(()=>{px.forEach(p=>p.style.translate='0 '+scrollY*p.dataset.parallax+'px');t=false})},{passive:true})})();
