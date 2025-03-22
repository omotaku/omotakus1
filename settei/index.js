const titles = document.getElementById("titles");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

const pm1 = document.getElementById("pm1");
const pm2 = document.getElementById("pm2");
const pm3 = document.getElementById("pm3");

const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");


btn1.addEventListener("click",() => {
    titles.innerText = "舞台/人物/登場展開"
    p1.classList.remove("hidden");
    pm1.classList.remove("hidden");
    pm2.classList.add("hidden");
    p2.classList.add("hidden");
    pm3.classList.add("hidden");
    p3.classList.add("hidden");
});

btn2.addEventListener("click",() => {
    titles.innerText = "大まかな展開"
    p1.classList.add("hidden");
    pm1.classList.add("hidden");
    pm2.classList.remove("hidden");
    p2.classList.remove("hidden");
    pm3.classList.add("hidden");
    p3.classList.add("hidden");
});

btn3.addEventListener("click",() => {
    titles.innerText = "展開詳細"
    p1.classList.add("hidden");
    pm1.classList.add("hidden");
    pm2.classList.add("hidden");
    p2.classList.add("hidden");
    p3.classList.remove("hidden");
    pm3.classList.remove("hidden");
});