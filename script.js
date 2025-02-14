import { typewrite } from './lib/typewrite-tools/typewrite.js';
import { typeerase } from './lib/typewrite-tools/typeerase.js';

let greet = async () => {
    await new Promise(resolve => setTimeout((resolve), 750));
    typewrite("greet-greet", "welcome!", 60);
    await new Promise(resolve => setTimeout((resolve), 1550));
    document.querySelector("body").classList.add("background-fade-to-dark");
    document.querySelector("#greet-pfp").classList.add('animate__animated', 'animate__fadeOut');
    document.querySelector("#pfp").style.visibility = "visible";
    document.querySelector("#pfp").classList.add("animate__animated", "animate__fadeIn");
    await new Promise(resolve => setTimeout((resolve), 500));
    typeerase("greet-greet");
    await new Promise(resolve => setTimeout((resolve), 1000));
    document.querySelector("#greet-container").remove();
}

window.switchTab = (tab, idx) => {
    let sections = document.querySelectorAll(".section");
    let buttons = document.querySelectorAll(".btn");

    for(let i = 0; i < sections.length; i++){
        sections[i].style.display = "none";
        buttons[i].style.borderBottomStyle = "none";
    }

    document.querySelector(`#${tab}`).style.display = "block";
    buttons[idx].style.borderBottomColor = "white";
    buttons[idx].style.borderBottomStyle = "solid";
}

let main = async () => {
    if(localStorage.getItem("have_greeted") != null && localStorage.getItem("have_greeted_time") != null){
        document.body.style.backgroundColor = "#2d2d30";
        document.body.style.color = "white";
        document.querySelector("#greet-container").remove();
        document.querySelector("#pfp").style.visibility = "visible";

        let time_since_have_greeted = Math.floor(Date.now() / 1000) - parseInt(localStorage.getItem("have_greeted_time"));
        if(time_since_have_greeted > 86400){
            localStorage.removeItem("have_greeted");
            localStorage.removeItem("have_greeted_time");
        }

    }else{
        document.body.style.backgroundColor = "white";
        localStorage.setItem("have_greeted", "true");
        localStorage.setItem("have_greeted_time", Math.floor(Date.now() / 1000).toString())
        greet();
    }

    document.querySelectorAll(".btn")[0].style.borderBottomColor = "white";
    document.querySelectorAll(".btn")[0].style.borderBottomStyle = "solid";

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
}

main();
