let intro = document.querySelector("items-center");
let eyon = document.querySelector(".eye");
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
let formi = document.getElementById("form");
sigU.addEventListener("click", function () {
  sigI.classList.add("aktiv");
  sigI.classList.remove("border-b-4");
  sigU.classList.add("border-b-4");
  document.querySelector(".google").classList.add("d-none");
  document.querySelector(".or").classList.add("d-none");
  document.querySelector(".forgot").classList.add("d-none");
  let newDv = document.createElement("div");
  newDv.classList.add("mt-1");
  newDv.classList.add("position-relative");
  formi.prepend(newDv);
  let name = `<label for="email" class="block pt-4  text-base mb-2 indigo"
  >Full Name</label
  >
  <input
  type="text"
  id="Name"
  class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-5 focus:border-gray-600"
  placeholder="Enter Name..."
  required
  minlength="6"
  />
  `;
  newDv.innerHTML = name;
  let ak = document.querySelector(".aktiv");
  ak.addEventListener("click", function () {
    window.location = "/index.html";
  });
});



// function red() {
//   let onlin = navigator.onLine;
//   if(onlin === false){
//     document.body.innerHTML = "Server bilan aloqa yo'q....";
//   }
// };
// red();
