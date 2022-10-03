window.onload = loginLoad;
function loginLoad()
{
    var clickButton = document.getElementById("myLogin");
    clickButton.onsubmit = checkLogin;
}

function checkLogin()
{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const username = urlParams.get('username');
    const password = urlParams.get('passwordMain');

    var id = document.forms["myLogin"]["username"].value;
    var pass = document.forms["myLogin"]["passwordMain"].value;

    if(id == username && pass == password)
    {
        logingsuccess();
        alert("Better Call Saul");
    }
    else
    {
        alert("Username or Password Incorrected, try call Saul");
        return false;
    }
}

function logingsuccess()
{
    window.location.href = "https://www.youtube.com/watch?v=gDjMZvYWUdo";
}