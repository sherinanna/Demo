const form = document.querySelector("#inputForm");
const container = document.querySelector(".container");
const imgUrl = document.querySelector("#inputurl");
const topText = document.querySelector("#topText");
const bottomText = document.querySelector("#bottomText");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const memeBox = document.createElement("div");
  const image = document.createElement("img");
  const top = document.createElement("div");
  const bottom = document.createElement("div");
  const removeBtn = document.createElement("button");

  memeBox.classList.add("memeBox");
  image.classList.add("image");
  top.classList.add("topText");
  bottom.classList.add("bottomText");
  removeBtn.classList.add("removeBtn");

  image.setAttribute("src", imgUrl.value);
  top.innerText = topText.value.toUpperCase();
  bottom.innerText = bottomText.value.toUpperCase();
  removeBtn.innerText = "X";

  container.appendChild(memeBox);
  memeBox.appendChild(image);
  memeBox.appendChild(top);
  memeBox.appendChild(bottom);
  memeBox.appendChild(removeBtn);

  form.reset();
});

container.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }
});
