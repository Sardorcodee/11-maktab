let intro = document.querySelector("items-center");
let eyon = document.querySelector(".eye");
console.log(eyon);
eyon.addEventListener("click", function () {
  let pass = document.querySelector("#password");
  let eyn = document.querySelector(".fa-eye");
  let eynslash = document.querySelector(".fa-eye-slash");
  if (pass.type === "password") {
    eynslash.classList.remove("d-none");
    eyn.classList.add("d-none");
    pass.setAttribute("type", "text");
  } else {
    eyn.classList.remove("d-none");
    pass.setAttribute("type", "password");
    eynslash.classList.add("d-none");
  }
});
let sigU = document.querySelector(".sigUp");
let sigI = document.querySelector(".sigin");
sigU.addEventListener("click", function () {
  let revers = document.querySelector(".p-7");
  setTimeout(() => {
    revers.classList.add("flex-row-reverse");
    sigI.classList.remove("border-b-4");
    sigU.classList.add("border-b-4");
    document.querySelector(".w-100").setAttribute("src", "/src/Signup.png");
    document.getElementsByTagName("form").innerHTML = "";
    document.querySelector("form").innerHTML = sigUpp;
  }, 100);
});
sigI.addEventListener("click", function () {
  window.location = "/index.html";
});
//  Time
setInterval(() => {
  const vaqt = new Date();
  let y = vaqt.getFullYear();
  let o = vaqt.getMonth();
  let k = vaqt.getDate();
  let s = vaqt.getHours();
  let m = vaqt.getMinutes();
  let se = vaqt.getSeconds();
  oy = nol(o + 1);
  document.getElementById("yil").innerHTML = y;
  document.getElementById("oy").innerHTML = oy;
  document.getElementById("kun").innerHTML = nol(k);
  document.getElementById("soat").innerHTML = nol(s);
  document.getElementById("minut").innerHTML = nol(m);
  document.getElementById("sekund").innerHTML = nol(se);

   
}, 1000);
function nol(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// function red() {
//   let onlin = navigator.onLine;
//   if(onlin === false){
//     document.body.innerHTML = "Server bilan aloqa yo'q....";
//   }
// };
// red();
