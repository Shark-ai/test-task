const registrationForm = document.getElementById("registrationForm");
const userName = document.getElementById("name");
const email = document.getElementById("email");
const reEmail = document.getElementById("reEmail");
const fromWhere = document.getElementById("fromWhere");
const privacyStatement = document.getElementById("privacyStatement");
const mainText = document.getElementById("mainTextContainer");
const errorContainer = document.getElementById("errorContainer");

let errorSpan = document.createElement("span");
errorSpan.classList.add("error");

const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let modal = document.getElementById("modal");
  window.onclick = function (event) {
    if (event.target !== modal) {
      modal.style.display = "none";
      registrationForm.style.display = "grid";
      mainText.style.display = "flex";
    }
  };

  if (userName.value == "") {
    userName.placeholder = "Nem töltötte ki";
    return false;
  } else if (userName.value.trim().length <= 2) {
    errorContainer.appendChild(errorSpan);
    errorSpan.innerHTML = "Minimum 3 karakter hosszúságúnak kell lennie";
    return false;
  } else if (email.value == "") {
    email.placeholder = "Nem töltötte ki";
    return false;
  } else if (!email.value.match(emailPattern)) {
    errorContainer.appendChild(errorSpan);
    errorSpan.innerHTML =
      "Szabványos e-mail címet használjon pl: valami@gmail.com";
    return false;
  } else if (email.value != reEmail.value) {
    errorContainer.appendChild(errorSpan);
    errorSpan.innerHTML = "A két e-mail címnek meg kell egyeznie";
    return false;
  } else if (fromWhere.value == "") {
    errorContainer.appendChild(errorSpan);
    errorSpan.innerHTML = "Kérjük válasszon egy lehetőséget";
    return false;
  } else if (privacyStatement.checked === false) {
    errorContainer.appendChild(errorSpan);
    errorSpan.innerHTML = "Kérjük fogadja el az Adatkezelési nyilatkozatot";
    return false;
  } else {
    clearFunction();
  }
});

const clearFunction = () => {
  userName.value = "";
  userName.placeholder = "Név*";
  email.value = "";
  email.placeholder = "E-mail cím*";
  reEmail.value = "";
  reEmail.placeholder = "E-mail cím újra*";
  fromWhere.value = "";
  privacyStatement.checked = false;
  modal.style.display = "flex";
  mainText.style.display = "none";
  registrationForm.style.display = "none";
  const title = document.title;
  document.title = "Sikeres regisztráció...";
  setTimeout(() => {
    document.title = title;
  }, 2500);
};

const onkeyupFunction = (element) => {
  element.onkeyup = function () {
    if (errorSpan.textContent.length) {
      errorSpan.remove();
    }
  };
};

onkeyupFunction(userName);
onkeyupFunction(email);
onkeyupFunction(reEmail);

const onchangeFunction = (element) => {
  element.onchange = function () {
    if (errorSpan.textContent.length) {
      errorSpan.remove();
    }
  };
};

onchangeFunction(fromWhere);
onchangeFunction(privacyStatement);
