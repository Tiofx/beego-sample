var month = ['Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август',
    'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

var id = "dateContainer";

function updateDate() {
    $(getDateContainer())
        .text(getDate());

    // setInterval(updateDate, 1000);
}

function getDate() {
    var now = new Date();
    return `${now.getHours()}ч ${month[now.getMonth()]} ${now.getYear() % 100}год`;
}

function getDateContainer() {
    var container = $(`#${id}`);

    if (!container.length) {
        $("#mainNav").append($("<br/>"));
    }

    return container.length ? container :
        $(createDateContainer())
            .each(function () {
                console.log(this);
            })
            .each(function () {
                console.log(this);
            })
            .appendTo("#mainNav");

}

function createDateContainer() {
    return $("<div></div>")
        .attr("id", id)
        .addClass("date");
}
