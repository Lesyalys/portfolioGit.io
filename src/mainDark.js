// import './style.css'
import {shem} from './modeShem'
{/* <br><img src="/portfolioGit.io/public/img/HTML5.png"></img> */}

export function dark(element){
    element.innerHTML = `
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
    `
    document.getElementById('meDark').addEventListener('click',()=>shem())
}