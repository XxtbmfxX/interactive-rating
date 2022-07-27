const buttons = document.querySelector(".Main_rating").querySelectorAll("span");

const mainCard = document.querySelector(".Main");
const mainEnd = document.querySelector("#Main_end");
const totalRate = document
  .querySelector("#Main_end")
  .querySelector(".Main_end-span");

const button = document.querySelector(".Main_button");

let rate = "";
function manageButtons(e) {
  rate = e.target.innerText;
}

function manageSubmi() {
  mainCard.style.display = "none";
  mainEnd.style.display = "flex";
  totalRate.innerHTML = `You selected ${rate} out of 5`;
}

buttons.forEach((button) => button.addEventListener("click", manageButtons));
button.addEventListener("click", manageSubmi);
