(function(){
var IM={
 "mark": "assets/mark.webp",
 "word": "assets/word.webp",
 "logo": "assets/logo.webp",
 "freeze": "assets/freeze.webp",
 "diamond": "assets/diamond.webp",
 "dabber": "assets/dabber.webp",
 "grav": "assets/grav.webp",
 "pair": "assets/pair.webp",
 "angel": "assets/angel.webp",
 "street": "assets/street.webp",
 "hot": "assets/hot.webp",
 "pipe": "assets/pipe.webp",
 "smokebg": "assets/smokebg.jpg"
};
var $=function(i){return document.getElementById(i)},rm=matchMedia('(prefers-reduced-motion:reduce)').matches,i;
var h=$('h1'),n=0;
['SMOKIN','WOLF'].forEach(function(w,k){var l=document.createElement('div');w.split('').forEach(function(c){var s=document.createElement('span');s.textContent=c;s.style.setProperty('--i',n++);if(k)s.className='r';l.appendChild(s)});h.appendChild(l)});
var m='Free shipping on orders $50+ ✦ Smell proof storage ✦ Premium cleaning tools ✦ Rolling papers ✦ Top brands in stock ✦ Limited stock items ✦ ';
$('mq').textContent=m+m+m+m;
/* products */
var D=[['Premium Smell Proof Bag','dabber','24.99','34.99','HOT'],['Cleaning Kit Bundle','diamond','18.99','','NEW'],['Rolling Tray Deluxe','grav','14.99',''],['Airtight Storage Container','freeze','29.99','39.99','SALE']];
var L=[['Grateful Dead x Pulsar Metal Tray, Street People','street','7.50','','BEST','Grateful Dead x Pulsar'],['Pulsar Tray Lid Kit, Angel of Music','angel','13.00','','','Grateful Dead x Pulsar',1],['Pulsar Mini Tray Lid Kit, Hot Air','hot','8.00','','','Grateful Dead x Pulsar',1]];
function card(p,d){var im=p[1]=='svg'?'<svg><use href="#tray"/></svg>':'<img src="'+IM[p[1]]+'" alt="'+p[0]+'"'+(/dabber|diamond|freeze|grav/.test(p[1])?' class="cv"':'')+' loading="lazy">';return '<article class="card'+(p[6]?' dim':'')+'" style="--d:'+d+'">'+(p[4]?'<span class="tag">'+p[4]+'</span>':'')+'<div class="art">'+im+'</div><small>'+(p[5]||'Smokin Wolf')+'</small><h3>'+p[0]+'</h3><div class="pr"><div><b>$'+p[2]+'</b>'+(p[3]?'<s>$'+p[3]+'</s>':'')+'</div>'+(p[6]?'<span class="so">Sold out</span>':'<button class="add" aria-label="Add '+p[0]+' to cart">+</button>')+'</div></article>'}
$('g1').innerHTML=D.map(card).join('');$('g2').innerHTML=L.map(card).join('');document.querySelectorAll('[data-im]').forEach(function(e){e.src=IM[e.dataset.im]});document.querySelectorAll('.smk').forEach(function(e){e.style.setProperty('--bg','url('+new URL(IM.smokebg,document.baseURI).href+')')});
/* reveal */
var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');if(e.target.classList.contains('grid'))e.target.querySelectorAll('.card').forEach(function(c){c.classList.add('in')});io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('.grid,.sh,.big').forEach(function(e){io.observe(e)});
document.querySelectorAll('.sh h2,.big h2').forEach(function(e){e.innerHTML='<span>'+e.textContent+'</span>'});
document.querySelectorAll('.card').forEach(function(cd){
cd.addEventListener('pointermove',function(e){var r=cd.getBoundingClientRect(),px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;cd.style.transform='rotateY('+((px-.5)*14)+'deg) rotateX('+((.5-py)*14)+'deg)';cd.style.setProperty('--mx',px*100+'%');cd.style.setProperty('--my',py*100+'%')});
cd.addEventListener('pointerleave',function(){cd.style.transform=''})});
/* cart, form, menu */
var c=0,t=$('t'),tm;
function toast(s){t.textContent=s;t.classList.add('on');clearTimeout(tm);tm=setTimeout(function(){t.classList.remove('on')},2200)}
document.querySelectorAll('.add').forEach(function(b){b.addEventListener('click',function(){$('cc').textContent=++c;toast('Added to cart: '+b.closest('.card').querySelector('h3').textContent)})});
$('f').addEventListener('submit',function(e){e.preventDefault();e.target.reset();toast('Message sent. We will reply soon.')});
$('bur').addEventListener('click',function(){$('nl').classList.toggle('on')});
$('nl').addEventListener('click',function(){$('nl').classList.remove('on')});
/* scroll: nav, progress, hero camera */
var nav=$('nav'),pg=$('pg'),wolf=$('wolf'),hin=$('hin');
function sc(){var y=scrollY,mx=document.documentElement.scrollHeight-innerHeight;nav.classList.toggle('on',y>40);pg.style.transform='scaleX('+(mx>0?y/mx:0)+')';
wolf.style.setProperty('--s',1+y*.0006);hin.style.setProperty('--ty',y*.28+'px');hin.style.setProperty('--op',Math.max(0,1-y/(innerHeight*.7)))}
addEventListener('scroll',sc,{passive:true});sc();
/* smoke + embers */
var cv=$('smoke'),x=cv.getContext('2d'),W,H,S=[],E=[],T=0,px=.5,lx=-99,ly=-99,mob=innerWidth<700;
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight}rs();addEventListener('resize',rs);
function sm(init,ax,ay){var s=ax!=null;return{x:s?ax:Math.random()*W,y:s?ay:(init?Math.random()*H:H+160),r:s?28+Math.random()*40:120+Math.random()*230,v:s?1.1+Math.random()*1.2:.8+Math.random()*1.4,ph:Math.random()*6.3,f:.006+Math.random()*.012,a:s?.18:.07+Math.random()*.12,red:Math.random()<.55,g:s?.5:.15+Math.random()*.3,m:s,l:0}}
var TX=0.881,TY=0.661;
function cg(x,y){return{x:x,y:y,r:10+Math.random()*14,v:.9+Math.random()*1.1,ph:Math.random()*6.3,f:.01+Math.random()*.012,a:.3,red:Math.random()<.5,g:.32+Math.random()*.25,m:true,l:0,L:160,wx:.5+Math.random()*.9}}
function em(init){return{x:Math.random()*W,y:init?Math.random()*H:H+10,v:.6+Math.random()*1.6,s:1+Math.random()*2.6,ph:Math.random()*6.3}}
for(i=0;i<(mob?26:52);i++)S.push(sm(true));for(i=0;i<(mob?18:40);i++)E.push(em(true));
addEventListener('pointermove',function(e){px=e.clientX/innerWidth;var dx=e.clientX-lx,dy=e.clientY-ly;
wolf.style.setProperty('--px',((px-.5)*-36)+'px');wolf.style.setProperty('--py',((e.clientY/innerHeight-.5)*-26)+'px');
if(!rm&&dx*dx+dy*dy>500&&S.length<420){S.push(sm(false,e.clientX,e.clientY));lx=e.clientX;ly=e.clientY}});
function draw(){T++;
if(!rm&&T>80&&scrollY<H*.9&&wolf.complete&&(!mob||T%2==0)){var wr=wolf.getBoundingClientRect();if(wr.width&&S.length<380){var ex=wr.left+wr.width*TX,ey=wr.top+wr.height*TY;S.push(cg(ex,ey));if(!mob&&T%3==0)S.push(cg(ex+3,ey))}}
x.clearRect(0,0,W,H);x.globalCompositeOperation='lighter';
for(i=S.length-1;i>=0;i--){var p=S[i];p.y-=p.v;p.x+=Math.sin(T*p.f+p.ph)*1.4+(px-.5)*.8+(p.wx||0);p.r+=p.g;p.l++;
var al=p.a*Math.min(1,(p.y+p.r)/(H*.6));if(p.m){var LL=p.L||110;al*=Math.max(0,1-p.l/LL);if(p.l>LL){S.splice(i,1);continue}}else if(p.y<-p.r){S[i]=sm(false);continue}
var col=p.red?'225,20,10':'175,155,150',g=x.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r);g.addColorStop(0,'rgba('+col+','+al+')');g.addColorStop(1,'rgba('+col+',0)');x.fillStyle=g;x.beginPath();x.arc(p.x,p.y,p.r,0,6.3);x.fill()}
E.forEach(function(e,k){e.y-=e.v;e.x+=Math.sin(T*.02+e.ph)*.9;if(e.y<-10){E[k]=em(false);return}
var g=x.createRadialGradient(e.x,e.y,0,e.x,e.y,e.s*4),f=.55+.45*Math.sin(T*.15+e.ph);g.addColorStop(0,'rgba(255,150,60,'+f+')');g.addColorStop(1,'rgba(255,60,20,0)');x.fillStyle=g;x.beginPath();x.arc(e.x,e.y,e.s*4,0,6.3);x.fill()});
if(!rm)requestAnimationFrame(draw)}
draw();
/* lightning in the hero */
if(!rm)setInterval(function(){if(scrollY<innerHeight*.8){var f=$('fl');f.classList.remove('on');void f.offsetWidth;f.classList.add('on')}},9000);
})();
