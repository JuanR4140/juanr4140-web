let isLight = false;
let darkColor = "#303136";
let lightColor = "#FFFFFF";


let back = document.querySelector("#return");
back.addEventListener("click", (c) => {
  c.preventDefault();
  let href = back.getAttribute("href");
  let color = back.getAttribute("data-color");
  let icon = back.getAttribute("data-icon");
  if(color === "user") color = ( isLight ? lightColor : darkColor );
  document.querySelector("#cover").style.backgroundColor = `${color}`;
  document.querySelector("#icon").src = icon;
  
  document.querySelector("#cover").classList.add("animation");
  document.querySelector("#icon").classList.add("grow");
  setTimeout(() => {
    window.location.href = href;
  }, 1000);
  
});

window.onpageshow = (event) => {
  if(event.persisted){
    window.location.reload();
  }
}

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

/*document.querySelector("#return").addEventListener("click", () => {
  location.href = "https://juanr4140.com";
});*/
