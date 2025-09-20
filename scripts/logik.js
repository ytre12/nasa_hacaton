const dialogWindowElement = document.getElementById("dialog-pages");

const windowBodyElement = document.getElementById("window-body");

const cardOneElement = document.getElementById("card-1");
const cardTwoElement = document.getElementById("card-2");
const cardThreeElement = document.getElementById("card-3");

const leftPersonName = document.querySelector("#person-left");
const raghtPersonName = document.querySelector("#person-right");

const restartWindow = document.querySelector(".lose-window");
const restartBtn = document.getElementById("btn-restart");

cardOneElement.hidden = true;
cardTwoElement.hidden = true;
cardThreeElement.hidden = true;

restartWindow.hidden = true;

const ChangeSelector = () => {
    cardOneElement.hidden = !cardOneElement.hidden;
    cardTwoElement.hidden = !cardTwoElement.hidden;
    cardThreeElement.hidden = !cardThreeElement.hidden;
}

const SeeActivPerson = () => {
    if (dialogArr[dialogCounter][0] === "left") {
        leftPersonName.className = "person-name-activ";
        raghtPersonName.className = "person-name";
    }else if (dialogArr[dialogCounter][0] === "right") {
        leftPersonName.className = "person-name";
        raghtPersonName.className = "person-name-activ";
    }else {
        leftPersonName.className = "person-name";
        raghtPersonName.className = "person-name";    
    }
}

const dialogArr = [ 
                    ["left", "Діалог 2"],
                    ["right", "Діалог 3"],
                    ["left", "Діалог 4"],
                    ["", "Виберіть селектор:"],
                    ["left", "Діалог 5"],
                    ["right", "Діалог 6"],
                    ["left", "Діалог 7"],
                    ["", "Далі буде)"],];

const TrueDialog = [
    "Відповідь правильна",
]

const LoseLogic = [
    [false, false, true],

]

const loseImg = [
    [`<img src="./lose-img/lose-img.png" alt="" style="width: 350px; margin-top: 70px">`,
    `<img src="./lose-img/lose-img.png" alt="" style="width: 350px; margin-top: 70px">`,
    `<img src="./lose-img/lose-img.png" alt="" style="width: 350px; margin-top: 70px">`]
    ];

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
        SeeActivPerson();
        dialogWindowElement.textContent = dialogArr[dialogCounter][1];
        dialogCounter++;
        HideSelector();
        DialogCounterActiv();
    }
}

cardOneElement.onclick = function() {
    dialogWindowElement.textContent = "Був обраний селектор 1";
    ChangeSelector();
    if (LoseLogic[0][0]) {
        SeeLoseWindow(0)
    }else{
        dialogWork = true;
        dialogWindowElement.textContent = TrueDialog[0];
    }
}

cardTwoElement.onclick = function() {
    dialogWindowElement.textContent = "Був обраний селектор 2";
    ChangeSelector();
    if (LoseLogic[0][1]) {
        SeeLoseWindow(1)
    }else{
        dialogWork = true;
        dialogWindowElement.textContent = TrueDialog[0];
    }
}

cardThreeElement.onclick = function() {
    dialogWindowElement.textContent = "Був обраний селектор 3";
    ChangeSelector();
    if (LoseLogic[0][2]) {
        SeeLoseWindow(2)
    }else{
        dialogWork = true;
        dialogWindowElement.textContent = TrueDialog[0];
    }
}

restartBtn.onclick = function() {
    dialogWork = true;
    restartWindow.hidden = true;
    restartWindow.firstElementChild.remove();
    dialogCounter -= 2;

    SeeActivPerson();
    dialogWindowElement.textContent = dialogArr[dialogCounter][1];
    dialogCounter++;
}

const SeeLoseWindow = (numberImg) => {
    restartWindow.insertAdjacentHTML("afterbegin", loseImg[0][numberImg])
    restartWindow.hidden = false;
}



