const btn = document.querySelector("#sub-btn");
const card = document.querySelector("#card");
const success = document.querySelector("#success");
const email = document.querySelector("#email");
const error = document.querySelector("#error");
const dismiss = document.querySelector("#dismiss-btn")

function validateEmail(e) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(e);
}
btn.addEventListener("click", function () {

    if (validateEmail(email.value)) {
        card.classList.add("none");
        error.classList.remove("none");
        email.classList.remove("email-error");
        success.classList.remove("none");
    }
    else {
        error.classList.remove("none");
        email.classList.add("email-error");
        email.value = "";
    }

})
dismiss.addEventListener("click", function () {
    card.classList.remove("none");
    success.classList.add("none")
    error.classList.add("none");
    email.classList.remove("email-error");
    email.value = "";

})
