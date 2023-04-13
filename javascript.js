// hello world

function GreetingsOn() {
  document.getElementById("greetings").innerHTML = "Hello, World!";
}

function GreetingsOff() {
  document.getElementById("greetings").innerHTML = "";
}

function openAnotherPage() {
  window.location.href = "another_page.html";
  document.getElementById("thanks-for-contact").innerHTML =
}

// window.location.href = "another_page.html";
// document.getElementById("contact_us").hidden;
// const prev = document.querySelector(".prev");
// const next = document.querySelector(".next");
// const images = document.querySelector(".carousel").children;
// const totalImages = images.length;
// let index = 0;

// prev.addEventListener("click", () => {
//   nextImage("next");
// });

// next.addEventListener("click", () => {
//   nextImage("prev");
// });

// function nextImage(direction) {
//   if (direction == "next") {
//     index++;
//     if (index == totalImages) {
//       index = 0;
//     }
//   } else {
//     if (index == 0) {
//       index = totalImages - 1;
//     } else {
//       index--;
//     }
//   }

//   for (let i = 0; i < images.length; i++) {
//     images[i].classList.remove("main");
//   }
//   images[index].classList.add("main");
// }
