(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&d(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();function n(){document.body.classList.toggle("dark-shem");const t=document.getElementById("logo"),r=document.body.classList.contains("dark-shem");t.src=r?"./img/Frame2.png":"./img/Frame.png",localStorage.setItem("theme",r?"dark":"light"),localStorage.getItem("theme")==="dark"&&document.body.classList.add("dark-shem")}function a(t){t.innerHTML=`
    <div class="screen">
        <div id = "rightBlock">
    
          <div id="meDark">  
            <img id="logo" src="./img/Frame.png">
          </div>
    
          <div id="info">
            INFO
            <br>Name Lesya
            <br>City: Nishnevartovsk
          </div>
    
          <div id="contact">
            CONTACT
            <br>Tg: <a href="https://t.me/Shadowtav">@Shadowtav</a>
            <br>Mail: <a href="https://e.mail.ru/cgi-bin/sentmsg?To=nya.olesya@bk.ru&from=otvet&afterReload=1">nya.olesya@bk.ru</a>
          </div>
        </div>
        
        <div id="allInfo">
          <div>
            <p>I am Lesya, a beginner frontend developer and designer</a></p>
            <br>My stack:
            <div id="table">
              <div class="table1">Frontend
              <div class="imgStack">
                <br><img src="./img/HTML5.png">
                <br><img src="./img/CSS3.png">
                <br><img src="./img/JavaScript.png">
                <br><img src="./img/Vite.js.png">
                <br><img src="./img/Tailwind CSS.png">
              </div>
              </div>
              <div class="table1">Backend
              <div class="imgStack">
                <br><img src="./img/Node.js.png">
                <br><img src="./img/Microsoft SQL Server.png">
              </div>
              </div>
              <div class="table1">Design
              <div class="imgStack">
                <br><img src="./img/Figma.png">
                <br><img src="./img/Blender.png">
                <br><img src="./img/Adobe Photoshop.png">
                <br><img src="https://framerusercontent.com/images/3zFbB2jdDFJ02sWnh7hLRZFujk.svg">
              </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
      <footer></footer>
    `,document.getElementById("meDark").addEventListener("click",()=>n())}a(document.querySelector("#app"));
