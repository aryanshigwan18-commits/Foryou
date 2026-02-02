function petalNext(el, index) {
  el.querySelector(".petal").classList.add("fly");
  setTimeout(() => {
    document.querySelectorAll("section")[index]
      .scrollIntoView({ behavior: "smooth", block: "center" });
  }, 700);
}

function softNo() {
  document.getElementById("noText").classList.remove("hidden");
}

/* Fireworks */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
let particles = [];

function createFirework() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height / 2;
  const color = `hsl(${Math.random()*360},100%,60%)`;

  for (let i=0;i<40;i++) {
    particles.push({x,y,vx:(Math.random()-0.5)*6,vy:(Math.random()-0.5)*6,a:1,c:color});
  }
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach((p,i)=>{
    p.x+=p.vx; p.y+=p.vy; p.a-=0.015;
    if(p.a<=0) particles.splice(i,1);
    else {
      ctx.globalAlpha=p.a;
      ctx.fillStyle=p.c;
      ctx.beginPath();
      ctx.arc(p.x,p.y,2,0,Math.PI*2);
      ctx.fill();
    }
  });
  requestAnimationFrame(animate);
}

function startCelebration() {
  canvas.classList.remove("hidden");
  document.getElementById("overlay").classList.remove("hidden");
  document.getElementById("yesMessage").classList.remove("hidden");
  animate();
  const i=setInterval(createFirework,300);
  setTimeout(()=>clearInterval(i),6000);
}
