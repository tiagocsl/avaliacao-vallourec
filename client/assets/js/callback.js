window.addEventListener("load", takeAuthCode);

var authCodes,
    scopes;

var responseXHR;
var urlSheet = "https://sheets.googleapis.com/v4/spreadsheets/" + sheet_id + "/values/A1:append?includeValuesInResponse=true&valueInputOption=USER_ENTERED&responseValueRenderOption=FORMATTED_VALUE&responseDateTimeRenderOption=FORMATTED_STRING";

jQuery(window).load(function() {
    $(".callback-loader").delay(2700).fadeOut("slow"); //retire o delay quando for copiar!

});

function takeAuthCode() {
    var queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    authCodes = params.get('code');
    scopes = params.get('scope');
    localStorage.setItem('authcode', authCodes);
    localStorage.setItem('scope', scopes);
    setTimeout("self.close()", 2700);
    takeAcessToken();
}

var options = {
    method: 'POST',
    url: 'https://oauth2.googleapis.com/token',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'access-control-allow-origin': 'http://localhost:8000'
    },
    data: {
        code: authCodes,
        client_id: '******************************************************.apps.googleusercontent.com',
        client_secret: '********************************',
        redirect_uri: 'http://localhost:8000/callback.html',
        scope: 'https://www.googleapis.com/auth/spreadsheets',
        grant_type: 'authorization_code'
    }
};

function takeAcessToken() {
    var sendData = "code=" + authCodes + "&client_id=" + options.data.client_id + "&client_secret=" + options.data.client_secret + "&redirect_uri=" + options.data.redirect_uri + "&scope=" + options.data.scope + "&grant_type=" + options.data.grant_type;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', options.url, false);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(sendData);
    responseXHR = xhr.responseText;
    console.log(sendData);
    console.log(responseXHR);
    localStorage.setItem('access_json', responseXHR);
    sendSheet();
}


function sendSheet() {
    var b1 = localStorage.getItem('access_json');
    access_token = JSON.parse(b1).access_token;


    var date = new Date();
    var dia;
    if (date.getDate() < 9) {
        dia = "0" + date.getDate();
    } else {
        dia = date.getDate();
    }
    var data = dia + "/" + date.getMonth() + "/" + date.getFullYear();

    var employeesList = localStorage.getItem('employeesList'),
        employeesListString = employeesList.split(','),
        filtredEmployees = employeesListString.filter(x => x.trim());

    var choicesList = localStorage.getItem('choicesList'),
        choicesListString = choicesList.split(','),
        filtredChoices = choicesListString.filter(x => x.trim())

    var dataList = [];
    var dataRange = filtredEmployees.length;
    var j = 0;
    for (j; j < dataRange; j++) {
        dataList.push(data);
    };

    var request = {
        "majorDimension": "COLUMNS",
        "range": "A1",
        "values": [
            dataList,
            filtredEmployees, filtredChoices
        ]
    };

    var req = new XMLHttpRequest();
    req.open("POST", urlSheet);
    req.setRequestHeader('Authorization', 'Bearer ' + access_token); // Added
    req.setRequestHeader('Content-Type', 'application/json'); // Added
    req.send(JSON.stringify(request)); // Modified

};