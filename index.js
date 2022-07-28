const buttons = document.querySelector(".Main_rating").querySelectorAll("span");

const mainCard = document.querySelector(".Main");
const mainEnd = document.querySelector("#Main_end");
const totalRate = document
  .querySelector("#Main_end")
  .querySelector(".Main_end-span");

const button = document.querySelector(".Main_button");
const endText = document.querySelector("#end_text");

let rate = "";
function manageButtons(e) {
  if (rate === "") {
    e.target.style.backgroundColor = "var(--Orange)";
    e.target.style.color = "white";
  } else if (rate == e.target.innerText) {
    e.target.style.backgroundColor = "var(--Span_color)";
    e.target.style.color = "var(--Light_Grey)";
    e.target.className = "Span_2";
    rate = "";
    return;
  } else if (rate != e.target.innerText) {
    buttons[parseInt(rate) - 1].className = "Span_2"; //anterior
    buttons[parseInt(rate) - 1].style.backgroundColor = "var(--Span_color)"; //anterior
    buttons[parseInt(rate) - 1].style.color = "var(--Light_Grey)"; //anterior
    e.target.style.backgroundColor = "var(--Orange)"; //new
    e.target.style.color = "white"; //new
  }

  rate = e.target.innerText;
}

function manageSubmi() {
  mainCard.style.display = "none";
  mainEnd.style.display = "flex";
  if (rate == "") {
    rate = 0;
  }
  totalRate.innerText = `You selected ${rate} out of 5`;
  endText.innerText = `${rate} out of 5 Thank you! We appreciate you taking the time to give a
  rating. If you ever need more support, don't hesitate to get in touch!
`;
}

buttons.forEach((button) => button.addEventListener("click", manageButtons));
button.addEventListener("click", manageSubmi);
