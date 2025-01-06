//let url = "media/images";
/*if(window.matchMedia("(prefers-color-scheme: dark)").matches){
  theme.src = `${url}/sun.png`;
}else{
  theme.src = `${url}/moon.png`;
}*/
let isLight = false;
let darkColor = "#303136";
let lightColor = "#FFFFFF";

let all_links = document.querySelectorAll(".link");
all_links.forEach((link) => {
  link.addEventListener("click", (c) => {
    c.preventDefault();
    let href = link.getAttribute("href");
    let color = link.getAttribute("data-color");
    let icon = link.getAttribute("data-icon");
    if(color === "user") color = ( isLight ? lightColor : darkColor );
    document.querySelector("#cover").style.backgroundColor = `${color}`;
    document.querySelector("#icon").src = icon;
    
    document.querySelector("#cover").classList.add("animation");
    document.querySelector("#icon").classList.add("grow");
    setTimeout(() => {
      window.location.href = href;
    }, 1000);
    
  });
});

window.onpageshow = (event) => {
  if(event.persisted){
    window.location.reload();
  }
}

/*all_links.forEach((link) => {
  alert("preventing default and executing..");
  link.preventDefault();
  let href = link.attr("href");
  setTimeout(() => {
    window.location.href = href;
  }, 1000);
});*/


let colors = document.querySelectorAll("html, body, .bar-item");
let texts = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, .link");
let pfp = document.querySelector(".pfp");
let icons = document.querySelectorAll(".icon");

let getStyle = (el, styleProp) => {
  if(el.currentStyle) return el.currentStyle[styleProp];
  return document.defaultView.getComputedStyle(el, null)[styleProp];
}

let setTheme = (theme) => {
  if(theme == "dark"){
    colors.forEach(el => el.style.backgroundColor = darkColor) //.style.backgroundColor = "#303136";
    texts.forEach(text => text.style.color = lightColor);
    pfp.style.borderColor = darkColor;
    icons.forEach(icon => icon.style.filter = "invert()");
  }else if(theme == "light"){
    colors.forEach(el => el.style.backgroundColor = lightColor);
    texts.forEach(text => text.style.color = darkColor);
    pfp.style.borderColor = lightColor;
    icons.forEach(icon => icon.style.filter = "none");
  }
}

let theme = document.querySelector("#theme");
let userTheme = getStyle(document.querySelector(".pfp"), "border-color");
if(userTheme.includes("255")) isLight = true;
let storageTheme = localStorage.getItem("theme");
if(storageTheme != null) isLight = ( storageTheme == "true" ? true : false );
setTheme((isLight ? "light": "dark"));
theme.addEventListener("click", () => {
  if(isLight){
    // we are now in dark mode
    isLight = !isLight;
    localStorage.setItem("theme", isLight);
    setTheme("dark");
  }else{
    // we are now in light mode
    isLight = !isLight;
    localStorage.setItem("theme", isLight);
    setTheme("light");
  }
});

document.querySelectorAll(".btn")[0].style.borderBottomColor = "#2196f3";
document.querySelectorAll(".btn")[0].style.borderBottomStyle = "solid";
let switchTab = (tab) => {
  let sections = document.querySelectorAll(".section");
  let buttons = document.querySelectorAll(".btn");
  let idx = ( tab === sections[0].id ? 0 : ( tab === sections[1].id ? 1 : ( tab === sections[2].id ? 2 : 2) ) );
  for(let i = 0; i < sections.length; i++){
    sections[i].style.display = "none";
    buttons[i].style.borderBottomColor = "black";
    buttons[i].style.borderBottomStyle = "none";
  }
  document.querySelector(`#${tab}`).style.display = "block";
  buttons[idx].style.borderBottomColor = "#2196f3";
  buttons[idx].style.borderBottomStyle = "solid";
}

document.querySelector("#contact").addEventListener("click", () => {
  let content = document.querySelector("#content");
  let socials = document.querySelector("#socials");
  if(content.style.display == "block"){
    content.style.display = "none";
    socials.style.display = "block";
  }else{
    content.style.display = "block";
    socials.style.display = "none";
  }
});


