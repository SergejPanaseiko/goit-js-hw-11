/* empty css                      */import{a as p,S as m,i}from"./assets/vendor-D0cagnvz.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const f="48662828-d5228b65b3bd2a50381de04cd",g="https://pixabay.com/api/";async function y(o){return(await p.get(g,{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}})).data.hits}function h(o){const r=document.querySelector(".gallery"),s=o.map(({webformatURL:a,largeImageURL:e,tags:t,likes:n,views:l,comments:d,downloads:u})=>`<a href="${e}" class="gallery-item">
                    <img src="${a}" alt="${t}">
                    <div class="info">
                        <p class="text">Likes<br> <span>${n}</span></p>
                        <p class="text">Views<br> <span>${l}</span></p>
                        <p class="text">Comments<br> <span>${d}</span></p>
                        <p class="text">Downloads<br> <span>${u}</span></p>
                    </div>
                </a>`).join("");r.innerHTML=s}const L=document.getElementById("search-form"),b=document.getElementById("search-input"),w=document.querySelector(".gallery");document.getElementById("loader");let E=new m(".gallery a");function v(){document.getElementById("loader").classList.add("show")}function c(){document.getElementById("loader").classList.remove("show")}c();L.addEventListener("submit",async o=>{o.preventDefault();const r=b.value.trim();if(!r){i.warning({title:"Увага",message:"Будь ласка, введіть пошуковий запит!"});return}w.innerHTML="",v();try{const s=await y(r);if(s.length===0){i.info({title:"Немає результатів",message:"Спробуйте інший пошуковий запит!"});return}setTimeout(()=>{c(),h(s)},500),E.refresh()}catch{i.error({title:"Помилка",message:"Щось пішло не так! Спробуйте ще раз."})}finally{}});c();
//# sourceMappingURL=index.js.map
