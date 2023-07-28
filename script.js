"use strict";

const btnShow_modal = document.querySelectorAll(".show-modal");

const btnClose_modal = document.querySelector(".close-modal");

const overlay = document.querySelector(".overlay");

const modal = document.querySelector(".modal");

// Function which will run when we wanna open the window :
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

// Function which will run when we wanna close the window :
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// Adding eventListner on all the button of show using the for loop :
for (let i = 0; i < btnShow_modal.length; i++) {
  btnShow_modal[i].addEventListener("click", openModal);
}

// 3 ways to close the window :

// 1.Either you use X to close the description :
btnClose_modal.addEventListener("click", closeModal);

// 2.Or can tap anywhere on the screen :
overlay.addEventListener("click", closeModal);

// 3.If user presses the escape key then also close :
document.addEventListener("keydown", function (e) {

// If the modal class does not contain the hidden class then : we used ! for converting the result :    
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

