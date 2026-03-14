import{a as l,S as p,i as g}from"./assets/vendor-DQvd0HNi.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();l.defaults.baseURL="https://pixabay.com/api/";l.defaults.params={key:"54988014-84e46a9f0470ced10c87901a9",image_type:"photo",orientation:"horizontal",safesearch:!0};function y(r){return l.get("",{params:{q:String(r).trim()}}).then(a=>a.data).catch(a=>console.error(a))}let n;function h(r){const a=document.querySelector(".gallery");if(!a)return;const o=r.map(s=>{const{webformatURL:e,largeImageURL:t,tags:i,likes:u,views:d,comments:f,downloads:m}=s,c=i;return`<li class="gallery-item">
  <a class="gallery-link" href="${t}" title="${c}">
    <img
      class="gallery-img"
      src="${e}"
      alt="${c}"
      loading="lazy"
      width="640"
      height="360"
    />
    <div class="gallery-info">
      <span class="gallery-info-item">Likes<span class='indicators'>${u}</span></span>
      <span class="gallery-info-item">Views<span class='indicators'>${d}</span></span>
      <span class="gallery-info-item">Comments<span class='indicators'>${f}</span></span>
      <span class="gallery-info-item">Downloads<span class='indicators'>${m}</span></span>
    </div>
  </a>
</li>`}).join("");a.innerHTML=o,n?n.refresh():n=new p(".gallery a",{captionsData:"alt",captionDelay:250})}function L(){const r=document.querySelector(".gallery");r&&(r.innerHTML="")}function w(){document.querySelector(".loader-wrap").classList.remove("is-hidden")}function S(){document.querySelector(".loader-wrap").classList.add("is-hidden")}const q=document.querySelector(".form");q.addEventListener("submit",r=>{r.preventDefault();const o=new FormData(r.target).get("search-text");o&&(L(),w(),setTimeout(()=>{y(o).then(s=>{if(s.hits.length===0){g.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}h(s.hits)}).catch(s=>console.error(s)).finally(()=>S())},2e3),r.target.reset())});console.log(divLoader);console.log(document.querySelector(".loader"));
//# sourceMappingURL=index.js.map
