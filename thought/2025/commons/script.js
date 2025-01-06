import { typewrite } from '../lib/typewrite-tools/typewrite.js';
import { typeerase } from '../lib/typewrite-tools/typeerase.js';

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
}

main();
