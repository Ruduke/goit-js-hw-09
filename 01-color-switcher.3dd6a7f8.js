!function(){var t,e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");a.disabled=!0;var d=function(){return document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))};e.addEventListener("click",(function(){e.disabled=!0,a.disabled=!1,d(),t=setInterval(d,1e3)})),a.addEventListener("click",(function(){e.disabled=!1,a.disabled=!1,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.3dd6a7f8.js.map
