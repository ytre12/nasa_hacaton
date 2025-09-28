const startPageElement = document.querySelector(".start-pages");
const btnStartApp = document.getElementById("start-app");

btnStartApp.onclick = () => {
    startPageElement.remove();
}