(()=>{"use strict";var e={451:(e,t,n)=>{e.exports=n.p+"be0d860e775accf30d67.png"}},t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}n.p="",(()=>{var e,t,a,i,c,s=n(451);document.getElementById("collapse").addEventListener("click",(function(){d.getBoundingClientRect().height<1?l():o()})),e=document.getElementById("feedback-button"),t=document.getElementById("feedback-close"),a=document.querySelector(".feedback_form"),e.addEventListener("click",(function(){e.classList.remove("disappear"),e.classList.add("disappear"),a.classList.remove("disappear"),a.classList.add("appear")})),t.addEventListener("click",(function(){e.classList.add("disappear"),e.classList.remove("disappear"),a.classList.remove("appear"),a.classList.add("disappear")})),i=document.getElementById("like"),c=document.querySelector(".like_container"),i.addEventListener("click",(function(){var e=document.createElement("img");e.className="heart",e.src=s,c.append(e);var t=i.getBoundingClientRect().left,n=i.getBoundingClientRect().width/2,a=e.getBoundingClientRect().width/2;e.style.left="".concat(t+n-a,"px");var d=Math.ceil(4*Math.random());e.classList.add("disappearing_heart".concat(d)),e.addEventListener("animationend",(function(){e.remove()}))}));var d=document.querySelector(".text_to_collapse"),r=d.getBoundingClientRect().height;function o(){var e=d.getBoundingClientRect().height;e<=5?d.style.height="0px":(d.style.height="".concat(e-5,"px"),requestAnimationFrame(o))}function l(){var e=d.getBoundingClientRect().height;e>=r?d.style.height="".concat(r,"px"):(d.style.height="".concat(e+5,"px"),requestAnimationFrame(l))}})()})();