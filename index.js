import{a as c,S as L,i as w}from"./assets/vendor-DQvd0HNi.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();c.defaults.baseURL="https://pixabay.com/api/";c.defaults.params={key:"54988014-84e46a9f0470ced10c87901a9",image_type:"photo",orientation:"horizontal",safesearch:!0};function S(r){return c.get("",{params:{q:String(r).trim()}}).then(a=>a.data).catch(a=>console.error(a))}let l;function q(r){const a=document.querySelector(".gallery");if(!a)return;const o=r.map(s=>{const{webformatURL:e,largeImageURL:t,tags:n,likes:p,views:g,comments:y,downloads:h}=s,d=n;return`<li class="gallery-item">
  <a class="gallery-link" href="${t}" title="${d}">
    <img
      class="gallery-img"
      src="${e}"
      alt="${d}"
      loading="lazy"
      width="640"
      height="360"
    />
    <div class="gallery-info">
      <span class="gallery-info-item">Likes<span class='indicators'>${p}</span></span>
      <span class="gallery-info-item">Views<span class='indicators'>${g}</span></span>
      <span class="gallery-info-item">Comments<span class='indicators'>${y}</span></span>
      <span class="gallery-info-item">Downloads<span class='indicators'>${h}</span></span>
    </div>
  </a>
</li>`}).join("");a.innerHTML=o,l?l.refresh():l=new L(".gallery a",{captionsData:"alt",captionDelay:250})}function b(){const r=document.querySelector(".gallery");r&&(r.innerHTML="")}function v(){document.querySelector(".loader-wrap").classList.remove("is-hidden")}function $(){document.querySelector(".loader-wrap").classList.add("is-hidden")}const u=document.querySelector(".form"),i=document.createElement("div");i.classList.add("loader-wrap","is-hidden");u.insertAdjacentElement("afterend",i);const m=document.createElement("span");m.classList.add("loader");i.append(m);const f=document.createElement("ul");f.classList.add("gallery");i.insertAdjacentElement("afterend",f);u.addEventListener("submit",r=>{r.preventDefault();const o=new FormData(r.target).get("search-text");o&&(b(),v(),setTimeout(()=>{S(o).then(s=>{if(s.hits.length===0){w.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}q(s.hits)}).catch(s=>console.error(s)).finally(()=>$())},2e3),r.target.reset())});console.log(i);console.log(document.querySelector(".loader"));
//# sourceMappingURL=index.js.map
