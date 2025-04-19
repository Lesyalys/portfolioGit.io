import './style.css'

export function dark(element){
    element.innerHTML = `
    <div class="screen">
        <div id = "rightBlock">
    
          <div id="meDark">  
            <img src="./public/img/Frame.png">
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
                <br><img src="../public/img/HTML5.png">
                <br><img src="./public/img/CSS3.png">
                <br><img src="./public/img/JavaScript.png">
                <br><img src="./public/img/Vite.js.png">
                <br><img src="./public/img/Tailwind CSS.png">
                <br><img src="./public/img/Three.js.png">
              </div>
              </div>
              <div class="table1">Backend
              <div class="imgStack">
                <br><img src="./public/img/Node.js.png">
                <br><img src="./public/img/Microsoft SQL Server.png">
              </div>
              </div>
              <div class="table1">Design
              <div class="imgStack">
                <br><img src="./public/img/Figma.png">
                <br><img src="./public/img/Blender.png">
                <br><img src="./public/img/Adobe Photoshop.png">
                <br><img src="https://framerusercontent.com/images/3zFbB2jdDFJ02sWnh7hLRZFujk.svg">
              </div>
              </div>
            </div>
          
          </div>
        </div>
      </div>
      <footer>fdsfsd</footer>
    `
    document.getElementById('meDark').addEventListener('click',()=>console.log('hi'))
}