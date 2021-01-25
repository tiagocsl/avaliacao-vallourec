var users = "",
    enterPressed = 0,
    employees = [],
    tags = [],
    valueRead,
    authCode = "",
    scope = "",
    access_token = "",
    lastUser = document.getElementById("last-user");

const choiceElements = {
    very_badChoice: document.getElementById("veryBad"),
    badChoice: document.getElementById("bad"),
    mediumChoice: document.getElementById("medium"),
    goodChoice: document.getElementById("good"),
    very_goodChoice: document.getElementById("veryGood")
};

const lists = {
    very_badList: [],
    badList: [],
    medium_list: [],
    goodList: [],
    very_goodList: [],

    vbChoice: [],
    bChoice: [],
    mChoice: [],
    gChoice: [],
    vgChoice: [],
};

var sentDoc = document.getElementById("sent-doc");

var b = false,
    r = true,
    fta = false;