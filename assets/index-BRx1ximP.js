(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(t){if(t.ep)return;t.ep=!0;const n=a(t);fetch(t.href,n)}})();const i=async()=>{let o=[];try{o=(await(await fetch("https://jarutnimra.github.io/json/db.json")).json()).menu.map(e=>e.dropdown.length>0?`
        <div class="dropdown dropdown-hover -mt-[8px]">
                  <div tabindex="0" role="button" class="text-white leading-[40px]  hover:bg-pink-500 px-[10px] cursor-pointer ">${e.name}</div>
                  <ul tabindex="0" class="dropdown-content  menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    ${e.dropdown.map(t=>`<li><a href=${t.link}>${t.name}</a></li>`).join(" ")}
                  </ul>
                </div>`:`<div class="w-fit -mt-[8px]"><a href=${e.link} class="block px-[10px] box-border text-[12px] no-underline capitalize leading-[40px] text-white hover:bg-pink-600 transition-all duration-200">${e.name}</a></div>`),document.querySelector(".menu nav").innerHTML=o.join(" ")}catch(r){console.log(r.message)}},c=async()=>{let o=[];try{o=(await(await fetch("https://jarutnimra.github.io/json/db.json")).json()).Products.map(e=>`<div class="product w-[45%]">
            <h1 class="text-center text-[32px]">${e.title}</h1>
            <h1 class="text-center text-[32px]">${e.price}</h1>
            <h1 class="text-center text-[32px]">${e.category}</h1>
            <p class="text-center text-[32px]">${e.description}</p>
            <img src=${e.image} class="w-[60%] block mx-auto" alt="">
            <div>
              <h1 class="text-center text-[32px]">${e.rating.rate}</h1>
              <h1 class="text-center text-[32px]">${e.rating.count}</h1>
            </div>
          </div>`),document.querySelector(".products").innerHTML=o.join(" ")}catch(r){console.log(r.message)}},l=async()=>{let o=[];try{o=(await(await fetch("https://jarutnimra.github.io/json/db.json")).json()).slider.map(e=>`            <div class="swiper-slide"><img src=${e.image} alt=${e.alt} /></div>`),document.querySelector(".swiper-wrapper").innerHTML=o.join(" ")}catch(r){console.log(r.message)}};function d(){new Swiper(".mySwiper",{spaceBetween:0,centeredSlides:!0,autoplay:{delay:2500,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}})}async function u(){await i(),await l(),await c(),d()}u();
