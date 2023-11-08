var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/visa-photo.png") {
    myImage.setAttribute("src", "images/site-photo2.png");
  } else {
    myImage.setAttribute("src", "images/visa-photo.png");
  }
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
  var myName = prompt("Введите свое имя и случится магия");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Визы во Вьетнам, " + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Визы во Вьетнам, " + storedName;
}
myButton.onclick = function () {
  setUserName();
};