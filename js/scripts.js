const input = document.querySelectorAll("input");
const label = document.querySelectorAll("label");
const span = document.querySelectorAll("span");
const div = document.querySelectorAll("div");
const form = document.querySelector("#form");

/* When the page listens the event loads the label class will be added as long as the text input has something inside*/
window.addEventListener("load", () => {
  for (let i = 0; i < input.length; i++) {
    if (input[i].type === "email" || input[i].type === "password") {
      if (input[i].value === "") {
        label[i].classList.remove("label");
      } else {
        label[i].classList.add("label");
      }
    }
  }
});

//Functions about states from input
const focus = (i) => {
  input[i].addEventListener("focus", () => {
    label[i].classList.add("label");
  });
  return;
};

const blur = (i) => {
  input[i].addEventListener("blur", () => {
    if (input[i].value === "") {
      label[i].classList.remove("label");
      input[i].style.borderBottom = "2px solid rgb(201, 102, 21)";

      if (span[i].id === "errorUser") {
        span[i].textContent = "Please enter a valid email or phone number.";
      }
      if (span[i].id === "errorPass") {
        span[i].textContent =
          "Your password must contain between 4 and 60 characters.";
      }
      if (div[i].className == "campo") {
        div[i].style.marginBottom = "0";
        div[i].style.marginTop = "1rem";
      }
    } else {
      label[i].classList.add("label");
      input[i].style.borderBottom = "";
      span[i].textContent = "";
      div[i].style.marginBottom = "1rem";
      div[i].style.marginTop = "0";
    }
  });
  return;
};

const submit = (i) => {
  form.addEventListener("submit", (e) => {
    console.log("submit");
    if (input[i].value === "") {
      input[i].style.borderBottom = "2px solid rgb(201, 102, 21)";
      if (span[i].id === "errorUser") {
        span[i].textContent = "Please enter a valid email or phone number.";
      }
      if (span[i].id === "errorPass") {
        span[i].textContent =
          "Your password must contain between 4 and 60 characters.";
      }
      if (div[i].className == "campo") {
        div[i].style.marginBottom = "0";
        div[i].style.marginTop = "1rem";
      }
    }
    e.preventDefault();
  });
};
//Call the functions
for (let i = 0; i < input.length; i++) {
  if (input[i].type === "email" || input[i].type === "password") {
    focus(i);
    blur(i);
    submit(i);
  }
}
//Show and hide password
