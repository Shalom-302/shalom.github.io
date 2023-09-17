var audio = new Audio('assets/sentmessage.mp3');

var mainMenu = {
    message: "Bienvenue sur mon portfolio automatique, Shalom Tehe, étudiant en Technologies de l'Information et de la Communication.\n\nTapez le numéro correspondant à l'une des options ci-dessous :\n1. Compétences\n2. Projets\n3. À propos\n4. Me contacter",
    options: ["compétences", "projets", "à propos", "me contacter"]
};

var skillsMenu = {
    message: "Compétences disponibles :\n1.1. Programmation\n1.2. IA\n1.3. Linguistique",
    options: ["programmation", "ia", "linguistique"]
};

var programmingSkills = {
    message: "Compétences en programmation :\n1.1.1. HTML\n1.1.2. CSS\n1.1.3. JavaScript\n1.1.4. PHP\n1.1.5. Python\n1.1.6. React JS\n1.1.7. Laravel"
};

var iaSkills = {
    message: "Compétences en IA :\n1.2.1. Maîtrise de ChatGPT OpenAI\n1.2.2. Bard Google\n1.2.3. Bing Microsoft chatbot\n1.2.4. Autres outils d'automatisation des tâches"
};

var linguisticSkills = {
    message: "Compétences linguistiques :\n1.3.1. Anglais\n1.3.2. Français"
};

var projectsMenu = {
    message: "Consultez mes projets sur GitHub : [Insérez le lien GitHub ici]"
};

var aboutMe = {
    message: "Je suis Shalom Tehe, un étudiant sérieux en Technologies de l'Information et de la Communication, travaillant en freelance. Mon objectif est de fournir des solutions technologiques de qualité à mes clients."
};

var contactInfo = {
    message: "Vous pouvez me contacter à l'adresse e-mail : shalomtehe219@gmail.com\nTéléphone : +225 0151406588\nVous pouvez également me trouver sur Facebook et LinkedIn."
};

var currentMenu = mainMenu;

function startFunction() {
    setLastSeen();
    sendTextMessage(currentMenu.message);
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "Dernière connexion aujourd'hui à " + formatTime(date);
}

function formatTime(date) {
    var hours = date.getHours().toString().padStart(2, '0');
    var minutes = date.getMinutes().toString().padStart(2, '0');
    return hours + ":" + minutes;
}

function isEnter(event) {
    if (event.keyCode === 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var userMessage = input.value.trim().toLowerCase();

    if (userMessage === "") {
        return;
    }

    if (!isNaN(userMessage)) {
        handleMenuOption(parseFloat(userMessage));
    } else {
        var optionIndex = currentMenu.options.indexOf(userMessage);
        if (optionIndex !== -1) {
            handleMenuOption(optionIndex + 1);
        } else {
            sendTextMessage("Désolé, je n'ai pas compris. Tapez le numéro correspondant à l'une des options du menu.");
        }
    }

    input.value = "";
    playSound();
}

function handleMenuOption(option) {
    switch (option) {
        case 1:
            currentMenu = skillsMenu;
            break;
        case 2:
            currentMenu = projectsMenu;
            break;
        case 3:
            currentMenu = aboutMe;
            break;
        case 4:
            currentMenu = contactInfo;
            break;
        case 1.1:
            currentMenu = programmingSkills;
            break;
        case 1.2:
            currentMenu = iaSkills;
            break;
        case 1.3:
            currentMenu = linguisticSkills;
            break;
        default:
            sendTextMessage("Désolé, option non valide. Tapez le numéro correspondant à l'une des options du menu.");
            return;
    }

    sendTextMessage(currentMenu.message);
}

function sendTextMessage(textToSend) {
    setLastSeen();
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = formatTime(date);
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}