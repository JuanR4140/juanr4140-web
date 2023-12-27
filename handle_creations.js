let titles = ["low", "web"];


for(let i = 0; i < titles.length; i++){
  document.querySelector(`#${titles[i]}-title`).style.cursor = "pointer";
  
  document.querySelector(`#${titles[i]}-title`).addEventListener("click", () => {
    let el = document.querySelector(`#${titles[i]}-div`);
    let ti = document.querySelector(`#${titles[i]}-title`);
      
    el.style.display = ( el.style.display == "none" ? "block" : "none" );
    
    if(el.style.display == "none"){
      ti.innerText = ti.innerText.replace("^", ">");
    }else{
      ti.innerText = ti.innerText.replace(">", "^");
    }
    
  });
}