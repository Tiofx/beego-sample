$(document).ready(function () {
    $.when(
        $.getScript('/js/lab3/cookie.js'),
        $.getScript('/js/lab3/backGroundImage.js'),
        $.getScript('/js/lab3/realTimeValidation.js'),
        $.getScript('/js/lab3/dropDown.js'),
        $.getScript('/js/lab3/timer.js'),
        $.getScript('/js/lab3/modalDialog.js')
    ).done(function () {
        main();
    });
});

function main() {
    incrementPageVisit();

    setUpListenersForDropDown();
    setUpListenersForBackGround();

    updateDate();
}

function incrementPageVisit() {
    localStorage.setItem(document.URL, parseInt(localStorage.getItem(document.URL)) + 1 || 1);
    setCookie(document.URL, parseInt(getCookie(document.URL)) + 1 || 1);
}

