/* ==========================================
   KHĀNÉ Website
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Smooth Scrolling
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                e.preventDefault();

                target.scrollIntoView({
                    behavior:"smooth"
                });

            }

        });

    });

    /* ==========================
       Sticky Header
    ========================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", ()=>{

        if(window.scrollY > 60){

            header.style.background = "rgba(0,0,0,.96)";
            header.style.boxShadow = "0 8px 25px rgba(0,0,0,.35)";

        }else{

            header.style.background = "rgba(0,0,0,.85)";
            header.style.boxShadow = "none";

        }

    });

    /* ==========================
       Active Navigation
    ========================== */

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", ()=>{

        let current = "";

        sections.forEach(section=>{

            const sectionTop = section.offsetTop - 150;

            if(window.scrollY >= sectionTop){

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href") === "#" + current){

                link.classList.add("active");

            }

        });

    });

    /* ==========================
       Scroll Animation
    ========================== */

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{
        threshold:0.2
    });

    document.querySelectorAll(
        ".section,.product-card,.feature-box,.faq-item"
    ).forEach(el=>{

        el.classList.add("hidden");

        observer.observe(el);

    });

    /* ==========================
       Scroll To Top Button
    ========================== */

    const topBtn = document.createElement("button");

    topBtn.innerHTML = "↑";

    topBtn.id = "topBtn";

    document.body.appendChild(topBtn);

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 500){

            topBtn.style.display="flex";

        }else{

            topBtn.style.display="none";

        }

    });

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    /* ==========================
       Contact Form
    ========================== */

    const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    emailjs.sendForm(
        "Glanza_web",
        "template_ui1ymcj",
        this
    )
    .then(function(){

        alert("Thank you! Your inquiry has been sent successfully.");

        form.reset();

    })
    .catch(function(error){

        alert("Failed to send message.");

        console.log(error);

    });

});

/* ==========================
   Top Button Style
========================== */

const style=document.createElement("style");

style.innerHTML=`

#topBtn{

position:fixed;

bottom:100px;

right:25px;

width:50px;

height:50px;

border:none;

border-radius:50%;

background:#d4af37;

color:#111;

font-size:22px;

cursor:pointer;

display:none;

justify-content:center;

align-items:center;

box-shadow:0 10px 25px rgba(0,0,0,.3);

transition:.3s;

z-index:999;

}

#topBtn:hover{

transform:scale(1.1);

background:#f5d76e;

}

`;

document.head.appendChild(style);

console.log("KHĀNÉ Website Loaded Successfully");
