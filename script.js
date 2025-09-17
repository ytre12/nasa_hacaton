const dialogWindowElement = document.getElementById("dialog-pages");

const windowBodyElement = document.getElementById("window-body");

const cardOneElement = document.getElementById("card-1");
const cardTwoElement = document.getElementById("card-2");
const cardThreeElement = document.getElementById("card-3");

cardOneElement.hidden = true;
cardTwoElement.hidden = true;
cardThreeElement.hidden = true;

const ChangeSelector = () => {
    cardOneElement.hidden = !cardOneElement.hidden;
    cardTwoElement.hidden = !cardTwoElement.hidden;
    cardThreeElement.hidden = !cardThreeElement.hidden;
}

const dialogArr = ["Діалог 2", "Діалог 3", "Діалог 4", "Виберіть селектор:", "Діалог 5", "Діалог 6", "Діалог 7", "Далі буде)"];

let dialogCounter = 0;

let dialogWork = true;

const HideSelector = () => {
    if (dialogCounter == 4) {
        ChangeSelector();
        dialogWork=false;
    }  
}

const DialogCounterActiv = () => {
    if (dialogCounter >= 8) {
        dialogWork = false;
    }
}

dialogWindowElement.onclick = function() {
    if (dialogWork) {
        dialogWindowElement.textContent = dialogArr[dialogCounter];
        dialogCounter++;
        HideSelector();
        DialogCounterActiv();
    }
}

cardOneElement.onclick = function() {
    dialogWindowElement.textContent = "Був обраний селектор 1";
    dialogWork = true;
    ChangeSelector();
}

cardTwoElement.onclick = function() {
    dialogWindowElement.textContent = "Був обраний селектор 2";
    dialogWork = true;
    ChangeSelector();
}

cardThreeElement.onclick = function() {
    dialogWindowElement.textContent = "Був обраний селектор 3";
    dialogWork = true;
    ChangeSelector();
}