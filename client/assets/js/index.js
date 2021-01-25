window.addEventListener("load", start);
sentDoc.addEventListener("click", redirect);


function start() {
    $("#getTag").focus();
    enterPressed = 1;
    console.log(enterPressed);
    getJSONFile();
    eventKeypress();
};

function eventKeypress() {
    $("#getTag").keypress(function(event) {
        enterPressed = 0;
        if (event.which == 13) {
            enterPressed = 1;
        }
        getJSONFile();
        console.log(enterPressed);
    })
};

function getJSONFile() {
    if (enterPressed == 1) {
        valueRead = document.querySelector("#getTag").value;
        $.getJSON("assets/js/json/employees.json", function(data) {
            tags = data.tags;
            employees = data.nomes;
        });
        authUsers();
    }
};

function authUsers() {
    for (var i = 0; i < 11; i++) {
        if (valueRead == tags[i]) {
            users = employees[i];
            lastUser.innerHTML = "Olá " + users +
                " qual seu nivel de satisfação hoje?";
            console.log(tags, employees);
            console.log(users);
        }
    }
    choices();
    parseCodes();
};

function choices() {
    very_bad_choice();
    bad_choice();
    medium_choice();
    good_choice();
    very_good_choice();
};

function very_bad_choice() {
    choiceElements.very_badChoice.addEventListener("click", veryBad);

    function veryBad() {
        if (enterPressed == 1) {
            lists.very_badList.push(users);
            b = true;
        };
        enterPressed = 0;
        if (b == true) {
            var p = document.getElementById("veryBad_LastTag"),
                l = document.createElement("p"),
                n = document.createTextNode(lists.very_badList[lists.very_badList.length - 1]);
            l.appendChild(n);
            p.appendChild(l);
            lists.vbChoice.push("Muito ruim");
        }
        enterForInner();
        b = false;
    };
};

function bad_choice() {
    choiceElements.badChoice.addEventListener("click", bad);

    function bad() {
        if (enterPressed == 1) {
            lists.badList.push(users);
            b = true;
        };
        enterPressed = 0;
        if (b == true) {
            var p = document.getElementById("bad_LastTag");
            var l = document.createElement("p")
            var n = document.createTextNode(lists.badList[lists.badList.length - 1]);
            l.appendChild(n);
            p.appendChild(l);
            lists.bChoice.push("Ruim");
        }
        enterForInner();
        b = false;
    };
};

function medium_choice() {
    choiceElements.mediumChoice.addEventListener("click", medium);

    function medium() {
        if (enterPressed == 1) {
            lists.medium_list.push(users);
            b = true;
        };
        enterPressed = 0;
        if (b == true) {
            var p = document.getElementById("medium_LastTag");
            var l = document.createElement("p")
            var n = document.createTextNode(lists.medium_list[lists.medium_list.length - 1]);
            l.appendChild(n);
            p.appendChild(l);
            lists.mChoice.push("Médio");
        }
        enterForInner();
        b = false;
    };
};

function good_choice() {
    choiceElements.goodChoice.addEventListener("click", good);

    function good() {
        if (enterPressed == 1) {
            lists.goodList.push(users);
            b = true;
        };
        enterPressed = 0;
        if (b == true) {
            var p = document.getElementById("good_LastTag");
            var l = document.createElement("p")
            var n = document.createTextNode(lists.goodList[lists.goodList.length - 1]);
            l.appendChild(n);
            p.appendChild(l);
            lists.gChoice.push("Bom");
        }
        enterForInner();
        b = false;
    };
};

function very_good_choice() {
    choiceElements.very_goodChoice.addEventListener("click", veryGood);

    function veryGood() {
        if (enterPressed == 1) {
            lists.very_goodList.push(users);
            b = true;
        };
        enterPressed = 0;
        if (b == true) {
            var p = document.getElementById("veryGood_LastTag");
            var l = document.createElement("p")
            var n = document.createTextNode(lists.very_goodList[lists.very_goodList.length - 1]);
            l.appendChild(n);
            p.appendChild(l);
            lists.vgChoice.push("Muito bom");
        }
        enterForInner();
        b = false;
    };
};


function redirect() {
    window.open("https://accounts.google.com/o/oauth2/auth?client_id=//////////////-**************************6ccbl.apps.googleusercontent.com&redirect_uri=http://localhost:8000/callback.html&scope=https://www.googleapis.com/auth/spreadsheets&response_type=code&access_type=offline")
    take();
    fta = false;
};

function take() {
    localStorage.setItem('employeesList', lists.very_badList + ',' + lists.badList + ',' + lists.medium_list + ',' + lists.goodList + ',' + lists.very_goodList);
    localStorage.setItem('choicesList', lists.vbChoice + ',' + lists.bChoice + ',' + lists.mChoice + ',' + lists.gChoice + ',' + lists.vgChoice);
    fta = true;
    clearing();
};

function clearing() {
    lists.very_badList = [];
    lists.badList = [];
    lists.medium_list = [];
    lists.goodList = [];
    lists.very_goodList = [];
    if (fta == true) {
        document.location.reload(false);
    }
}


function parseCodes() {
    authCode = localStorage.getItem('authcode');
    scope = localStorage.getItem('scope');
}


function enterForInner() {
    if (enterPressed == 0) {
        lastUser.innerHTML = "Olá, aproxime sua tag para começar.";
        $("#getTag").focus();
    }
};