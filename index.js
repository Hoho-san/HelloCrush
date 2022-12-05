const noBtn = document.getElementById("Hinde");
const yesBtn = document.getElementById("Oo");
const ques = document.getElementById("question");
let btn = document.getElementById("btn");
let position;

noBtn.addEventListener("mouseover", () => {
    let rand = Math.floor(Math.random() * 250 + 1);
    let rand2 = Math.floor(Math.random() * 250 + 2);
    noBtn.style.transform = "translate(" + rand + "px," + rand2 + "px)";
});
noBtn.addEventListener("click", () => {
    let rand = Math.floor(Math.random() * 200 + 1);
    let rand2 = Math.floor(Math.random() * 200 + 1);
    noBtn.style.transform = "translate(" + rand + "px," + rand2 + "px)";
});

yesBtn.addEventListener("click", () => {
    ques.innerHTML = "Ikaw Haaaaa HAHAHAHAHA <3";
});
