// hello world

function GreetingsOn() {
  document.getElementById("greetings").innerHTML = "Hello, World!";
}

function GreetingsOff() {
  document.getElementById("greetings").innerHTML = "";
}

   const form = document.querySelector("#input-form");
   const submitButton = document.querySelector("#submit");
   const scriptURL =
     "https://script.google.com/macros/s/1XTaVdkdAnzhAHoLOA-x0K4svtJOB9RUnp2OgudFCNoEE4Lo8muDKOgSO/exec";

   form.addEventListener("submit", (e) => {
     submitButton.disabled = true;
     e.preventDefault();
     let requestBody = new FormData(form);
     fetch(scriptURL, { method: "POST", body: requestBody })
       .then((response) => {
         alert("Success!", response);
         submitButton.disabled = false;
       })
       .catch((error) => {
         alert("Error!", error.message);
         submitButton.disabled = false;
       });
   });
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
