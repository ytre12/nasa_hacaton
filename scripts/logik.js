const dialogWindowElement = document.getElementById("dialog-pages");

const windowBodyElement = document.getElementById("window-body");

const cardOneElement = document.getElementById("card-1");
const cardTwoElement = document.getElementById("card-2");
const cardThreeElement = document.getElementById("card-3");

const leftPerson = document.querySelector("#person-left-id");
const raghtPerson = document.querySelector("#person-right-id");

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

//Зміна bg
const ChangeBg = (num) => {
    if (num === 4) {
        document.body.style.backgroundImage = 'url("img/ai-gen-bg.png")';
    } else if (num === 90) {
        document.body.style.backgroundImage = 'url("img/ai-gen-bg.png")';
    }
}

// Показує активний діалог та персонажа
const SeeActivPerson = () => {
    if (dialogArr[dialogCounter][0] === "left") {
        leftPersonName.className = "person-name-activ";
        raghtPersonName.className = "person-name";
        
        leftPerson.className = "person-activ";
        raghtPerson.className = "person";
    }else if (dialogArr[dialogCounter][0] === "right") {
        leftPersonName.className = "person-name";
        raghtPersonName.className = "person-name-activ";

        leftPerson.className = "person";
        raghtPerson.className = "person-activ";
    }else {
        leftPersonName.className = "person-name";
        raghtPersonName.className = "person-name";    
    
        leftPerson.className = "person";
        raghtPerson.className = "person";
    }
}

// Змінює після правильного вибору картинки на селекторі
const ChangeImgItems = () => {
    cardOneElement.firstElementChild.remove();
    cardTwoElement.firstElementChild.remove();
    cardThreeElement.firstElementChild.remove();

    cardOneElement.insertAdjacentHTML("afterbegin", itemSelectorImg[itemsSelectorStage][0]);
    cardTwoElement.insertAdjacentHTML("afterbegin", itemSelectorImg[itemsSelectorStage][1]);
    cardThreeElement.insertAdjacentHTML("afterbegin", itemSelectorImg[itemsSelectorStage][2]);

    itemsSelectorStage++;
}

// Масив діалогів (1 - хто розмовляє, 2 - сам діалог)
const dialogArr = [ 
                    ["left", "Діалог 2"],
                    ["right", "Діалог 3"],
                    ["left", "Діалог 4"],
                    ["", "Виберіть селектор:"],
                    ["left", "Діалог 5"],
                    ["right", "Діалог 6"],
                    ["left", `qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq
                        qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq`],
                    ["left", "Діалог 9"],
                    ["left", "Діалог 10"],
                    ["", "Виберіть селектор:"],
                    ["", "Далі буде)"],];

// Масив діалогів при парвильній відповіді
const TrueDialog = [
    "Відповідь правильна",
]

// Правильні відповіді False - правильна True - неправильна
const LoseLogic = [
    [false, false, true],
    [true, true, false],
]

// Змінна що відповідає за активні зображення при поразці
let losVar = 0;

// Картинки при поразці
const loseImg = [
    [`<img src="./lose-img/lose-img.png" alt="" style="width: 350px; margin-top: 70px">`,
    `<img src="./lose-img/lose-img.png" alt="" style="width: 350px; margin-top: 70px">`,
    `<img src="./lose-img/lose-img.png" alt="" style="width: 350px; margin-top: 70px">`]
    ];

// Масив малюнків селекторів 
const itemSelectorImg = [   
                            [
                            `<img src="./lose-img/lose-img.png" alt="card-1" width="100px">`, 
                            `<img src="./lose-img/nyan-cat.avif" alt="card-2" width="100px">`,
                            `<img src="./lose-img/test-img.gif" alt="card-3" width="100px">`
                            ],

                        ];
let itemsSelectorStage = 0;

let dialogCounter = 0;

let dialogWork = false;

const HideSelector = () => {
    if (dialogCounter == 4 || dialogCounter == 10) {
        ChangeSelector();
        dialogWork=false;
    }  
}

const DialogCounterActiv = () => {
    if (dialogCounter >= 11) {
        dialogWork = false;
    }
}

document.addEventListener("keydown", (event)=> {
    if (event.code === "Space") {
        if (dialogWork) {
            SeeActivPerson();
            dialogWindowElement.textContent = dialogArr[dialogCounter][1];
            dialogCounter++;
            HideSelector();
            DialogCounterActiv();
        }
    }
} )


dialogWindowElement.onclick = function() {
    if (dialogWork) {
        SeeActivPerson();
        dialogWindowElement.textContent = dialogArr[dialogCounter][1];
        dialogCounter++;
        HideSelector();
        DialogCounterActiv();
        ChangeBg(dialogCounter)
    }
}

cardOneElement.onclick = function() {
    dialogWindowElement.textContent = "Був обраний селектор 1";
    ChangeSelector();
    if (LoseLogic[losVar][0]) {
        SeeLoseWindow(0)
    }else{
        dialogWork = true;
        dialogWindowElement.textContent = TrueDialog[0];
        ChangeImgItems();
        losVar++;
    }
}

cardTwoElement.onclick = function() {
    dialogWindowElement.textContent = "Був обраний селектор 2";
    ChangeSelector();
    if (LoseLogic[losVar][1]) {
        SeeLoseWindow(1)
    }else{
        dialogWork = true;
        dialogWindowElement.textContent = TrueDialog[0];
        ChangeImgItems();
        losVar++;
    }
}

cardThreeElement.onclick = function() {
    dialogWindowElement.textContent = "Був обраний селектор 3";
    ChangeSelector();
    if (LoseLogic[losVar][2]) {
        SeeLoseWindow(2)
    }else{
        dialogWork = true;
        dialogWindowElement.textContent = TrueDialog[0];
        ChangeImgItems();
        losVar++;
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


// Частина що відповідає за старт

const tutorialPages = document.querySelector(".tuorial-pages");
const compleatTutorial = document.getElementById("read-tutorial");

compleatTutorial.onclick = () => {
    tutorialPages.remove();
    dialogWork = true;
}