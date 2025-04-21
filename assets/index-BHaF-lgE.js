(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))c(i);new MutationObserver(i=>{for(const e of i)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const e={};return i.integrity&&(e.integrity=i.integrity),i.referrerPolicy&&(e.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?e.credentials="include":i.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(i){if(i.ep)return;i.ep=!0;const e=r(i);fetch(i.href,e)}})();function l(){const t=document.getElementById("mode"),o=document.getElementById("logo");if(t){const r=t.getAttribute("href");r==="/portfolioGit.io/src/style.css"?(console.log("dark"),t.setAttribute("href","/portfolioGit.io/src/light.css"),o.setAttribute("src","./portfolioGit.io/public/img/Frame2.png")):r==="/portfolioGit.io/src/light.css"&&(console.log("light"),t.setAttribute("href","/portfolioGit.io/src/style.css"),o.setAttribute("src","/portfolioGit.io/public/img/Frame.png"))}}function n(t){t.innerHTML=`
    <div class="screen">
        <div id = "rightBlock">
    
          <div id="meDark">  
            <img id="logo" src="/portfolioGit.io/public/img/Frame.png">
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
                <br><img src="/portfolioGit.io/public/img/HTML5.png">
                <br><img src="/portfolioGit.io/public/img/CSS3.png">
                <br><img src="/portfolioGit.io/public/img/JavaScript.png">
                <br><img src="/portfolioGit.io/public/img/Vite.js.png">
                <br><img src="/portfolioGit.io/public/img/Tailwind CSS.png">
              </div>
              </div>
              <div class="table1">Backend
              <div class="imgStack">
                <br><img src="/portfolioGit.io/public/img/Node.js.png">
                <br><img src="/portfolioGit.io/public/img/Microsoft SQL Server.png">
              </div>
              </div>
              <div class="table1">Design
              <div class="imgStack">
                <br><img src="/portfolioGit.io/public/img/Figma.png">
                <br><img src="/portfolioGit.io/public/img/Blender.png">
                <br><img src="/portfolioGit.io/public/img/Adobe Photoshop.png">
                <br><img src="https://framerusercontent.com/images/3zFbB2jdDFJ02sWnh7hLRZFujk.svg">
              </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
      <footer></footer>
    `,document.getElementById("meDark").addEventListener("click",()=>l())}n(document.querySelector("#app"));
