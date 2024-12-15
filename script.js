const typingProjects = document.getElementById("typing-projects");
const typingEffectContainer = document.getElementById("typingEffectContainer");

let txtCounter = 1;
let imgCounter = 1;
function changeText() {
  if (txtCounter == 1) {
    typingProjects.textContent = "I make Websites";
    typingEffectContainer.style.width = "180px";
    txtCounter++;
  } else if (txtCounter == 2) {
    typingProjects.textContent = "I make Games";
    typingEffectContainer.style.width = "155px";
    txtCounter++;
  } else if (txtCounter == 3) {
    typingProjects.textContent = "I make Webapps";
    typingEffectContainer.style.width = "170px";
    txtCounter -= 3;
  } else {
    typingProjects.textContent = "I make 3D Models";
    typingEffectContainer.style.width = "190px";
    txtCounter++;
  }
  typingProjects.classList.remove('typing-effect-3s');
  void typingProjects.offsetWidth;
  typingProjects.classList.add('typing-effect-3s');
}

function changeImg() {
  if (imgCounter == 1) {
    document.getElementById("featuredImg").src = "images/espgif.gif";
    imgCounter--;
  } else {
    document.getElementById("featuredImg").src = "images/laptop.gif";
    imgCounter++;
  }
  featuredImg.classList.remove('featured-img');
  void featuredImg.offsetWidth;
  featuredImg.classList.add('featured-img');
}

setInterval(changeImg, 4000);
setInterval(changeText, 3000);