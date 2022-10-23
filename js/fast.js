const addBtn = document.querySelector(".fast__add");
const linkFast = document.querySelector(".fast");
var fastLink = [];
function saveLink() {
  localStorage.setItem("link", JSON.stringify(fastLink));
}
function deleteLink(event) {
  const idx = event.target.parentElement;
  idx.remove();
  fastLink = fastLink.filter((item) => item.id !== parseInt(idx.id));
  savedLink();
}
function paintLink(newLink) {
  const linkA = document.createElement("div");
  linkA.id = newLink.id;
  linkA.className = "fast__add__new";
  const a = document.createElement("a");
  const icon = document.createElement("img");
  icon.src = newLink.text + "/favicon.ico";
  a.href = newLink.text;
  const btn = document.createElement("button");
  btn.innerText = "❌";
  btn.addEventListener("click", deleteLink);
  a.appendChild(icon);
  linkA.appendChild(a);
  linkA.appendChild(btn);
  linkFast.appendChild(linkA);
}
function addBtnHandler(event) {
  event.preventDefault();
  console.log("chekc");
  var urlInput = prompt("바로가기 주소를 추가해주세요!");
  if (!urlInput.includes("http")) {
    urlInput = "http://" + urlInput;
  }
  const newLinkObj = {
    text: urlInput,
    id: Date.now(),
  };
  fastLink.push(newLinkObj);
  paintLink(newLinkObj);
  saveLink();
}
addBtn.addEventListener("click", addBtnHandler);

const savedLink = localStorage.getItem("link");
if (savedLink) {
  const parsedLink = JSON.parse(savedLink);
  fastLink = parsedLink;
  parsedLink.forEach(paintLink);
}
