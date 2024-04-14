// selected all html id
const nameInput = document.getElementById("name-input");
const phoneInput = document.getElementById("phone-input");
const emailInput = document.getElementById("email-input");
const textareaInput = document.getElementById("textarea-input");
const submitBtn = document.getElementById("submit-btn");

const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const textareaError = document.getElementById("textarea-error");
const submitError = document.getElementById("submit-error");

// window.onload function
window.onload = function () {
  mainFun();
};

function mainFun() {
  nameInput.addEventListener("keyup", nameInputFun);
  phoneInput.addEventListener("keyup", phoneInputFun);
  emailInput.addEventListener("keyup", isValidEmail);
  textareaInput.addEventListener("keyup", yourMassage);

  submitBtn.addEventListener("click", function () {
    nameInputFun();
    phoneInputFun();
    isValidEmail();
    yourMassage();
    submitFun();
  });
}

// nameInputFun
function nameInputFun() {
  let inputValue = nameInput.value;
  if (inputValue === "") {
    nameError.innerHTML = "name is required!";
  } else if (inputValue.length < 6) {
    nameError.innerHTML = "minimum type 6 character";
  } else {
    nameError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  }
}

// phoneInputFun
function phoneInputFun() {
  let phoneValue = phoneInput.value;
  console.log(phoneValue);
  if (phoneValue === "") {
    phoneError.innerHTML = "phone is required!";
  } else if (phoneValue.length < 11) {
    phoneError.innerHTML = "type 11 digits number";
  } else {
    phoneError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  }
}

// isValidEmail
function isValidEmail() {
  let emailValue = emailInput.value;
  if (emailValue === "") {
    emailError.innerHTML = "email is required!";
  } else if (
    !emailValue.match(
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    )
  ) {
    emailError.innerHTML = "email is invalid!";
  } else {
    emailError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  }
}

// yourMassage
function yourMassage() {
  let textareaValue = textareaInput.value;
  if (textareaValue === "") {
    textareaError.innerHTML = "please write something!";
  } else {
    textareaError.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
  }
}
