var modal = document.querySelector(".modal");
var trigger = document.querySelector("#trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);




var modalimg = document.querySelector(".modal-img");
var triggerimg = document.querySelector("#trigger-img");
var triggerimg2 = document.querySelector("#trigger-img2");
var triggerimg3 = document.querySelector("#trigger-img3");
var closeButtonimg = document.querySelector(".close-button-img");

function toggleModal2() {
    modalimg.classList.toggle("show-modal-img");
}

function windowOnClick2(event) {
    if (event.targetimg === modalimg) {
        toggleModal2();
    }
}

triggerimg.addEventListener("click", toggleModal2);
triggerimg2.addEventListener("click", toggleModal2);
triggerimg3.addEventListener("click", toggleModal2);
closeButtonimg.addEventListener("click", toggleModal2);
window.addEventListener("click", windowOnClick2);
