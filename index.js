/* empty css                      */import{a as m,S as f,i}from"./assets/vendor-D0cagnvz.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="48662828-d5228b65b3bd2a50381de04cd",g="https://pixabay.com/api/";async function h(o){return(await m.get(g,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9}})).data.hits}function L(o){const r=document.querySelector(".gallery"),s=o.map(({webformatURL:a,largeImageURL:e,tags:t,likes:n,views:d,comments:p,downloads:u})=>`<a href="${e}" class="gallery-item">
                    <img src="${a}" alt="${t}">
                    <div class="info">
                        <p class="text">Likes<br> <span>${n}</span></p>
                        <p class="text">Views<br> <span>${d}</span></p>
                        <p class="text">Comments<br> <span>${p}</span></p>
                        <p class="text">Downloads<br> <span>${u}</span></p>
                    </div>
                </a>`).join("");r.innerHTML=s}const b=document.getElementById("search-form"),w=document.getElementById("search-input"),E=document.querySelector(".gallery"),c=document.getElementById("loader");let v=new f(".gallery a");function x(){document.getElementById("loader").classList.add("show")}function l(){document.getElementById("loader").classList.remove("show")}l();b.addEventListener("submit",async o=>{o.preventDefault();const r=w.value.trim();if(!r){i.warning({title:"Увага",message:"Будь ласка, введіть пошуковий запит!"});return}E.innerHTML="",x();try{const s=await h(r);if(s.length===0){i.info({title:"Немає результатів",message:"Спробуйте інший пошуковий запит!"});return}l(),L(s),v.refresh()}catch{c.style.display="none",i.error({title:"Помилка",message:"Щось пішло не так! Спробуйте ще раз."})}finally{c.style.display="none"}});l();
//# sourceMappingURL=index.js.map
