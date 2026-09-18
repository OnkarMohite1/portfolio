
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
navLinks.classList.toggle("active");
});

const form=document.getElementById("contactForm");
const status=document.getElementById("status");

form.addEventListener("submit",async(e)=>{
e.preventDefault();
const data={name:name.value,email:email.value,message:message.value};
try{
const res=await fetch("http://localhost:5000/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});
const result=await res.json();
status.style.color="#22c55e";
status.innerHTML=result.message;
form.reset();
}catch{
status.style.color="#ef4444";
status.innerHTML="Backend not connected yet.";
}
});

window.addEventListener("scroll",()=>{

const cards =
document.querySelectorAll(
".project-card,.skill,.glass-card"
);

cards.forEach(card=>{

const top = card.getBoundingClientRect().top;

if(top < window.innerHeight-100){

card.style.opacity="1";
card.style.transform="translateY(0px)";

}

});
});