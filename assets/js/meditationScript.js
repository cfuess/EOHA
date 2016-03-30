var pwd = 'Spring2016';
var cookieName = 'downloadCookie';

function setCookie() {
    $('#invalidCode').hide();
    if ($('#pwdText').val() === pwd) {
        createCookie(cookieName, pwd, 120);
    }
    else {
        createCookie(cookieName, 'noGood', 120);
        $('#invalidCode').show('slow');
    }
    checkCookie();
};

function checkCookie() {
    deny();
    var cookieVal = Cookies.get(cookieName);
    if (cookieVal === pwd) {
        download();
    }
};

function download() {
    $('#pwd').hide();
    $('#deny').hide();
    $('#download').show('fast');
};

function deny() {
    $('#deny').show();
    $('#pwd').show();
};

function createCookie(name, value, days) {
    var date, expires;
    if (days) {
        date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toGMTString();
    } else {
        expires = '';
    }
    document.cookie = name + '=' + value + expires + '; path=/';
}

$(function () {
    checkCookie();

    $('#pwdText').keypress(function (e) {
        if ((e.which && e.which === 13) || (e.keyCode && e.keyCode === 13)) {
            setCookie();
        }
    });

});
