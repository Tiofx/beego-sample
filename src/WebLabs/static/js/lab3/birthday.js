const daysName = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const dayInWeek = 7;
const monthName = ['Январь', 'Февраль', 'Март', 'Апрель',
    'Май', 'Июнь', 'Июль', 'Август',
    'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const yearRange = [1900, 2017];

const selectedColor = 'gold';

var calendar;
var birthdayField;
var birthdayContainer;

$(document).ready(function () {
    calendar = createCalendar();
    $(calendar).trigger("change");
    birthdayField = $("#birthday");
    birthdayContainer = $("#birthdayContainer");

    setUpListenersForBirthday();
});


function setUpListenersForBirthday() {
    $(calendar)
        .attr("id", "calendar");


    $(birthdayContainer)
        .append(calendar)
        .dblclick(() => $(calendar).slideToggle());

    $(calendar).trigger("change");
}

function createCalendar() {
    return $("<div/>")
        .each(div => calendar = div)
        .addClass("calendar")
        .attr({
            "data-day": 1,
            "data-monthNumber": 0,
            "data-year": 2017
        })
        .append(() => generateMonth())
        .append(() => generateYear())
        .append(() => generateDaysPicker())
        // .on("change", function () {
        //     $(birthdayField).val(
        //         `${$(this).attr("data-day")}.${month[$(this).attr("data-monthNumber")]}.${$(this).attr("data-year")}`
        //     );
        //     $(".calendarDays")
        //         .replaceWith(generateDaysPicker());
        // });
        .each(function () {
            $(this).get(0).addEventListener('change', function () {
                $(birthdayField).val(
                    `${$(this).attr("data-day")}.${month[$(this).attr("data-monthNumber")]}.${$(this).attr("data-year")}`
                );
                $(".calendarDays")
                    .replaceWith(generateDaysPicker());
            }, true);
        });
}

function generateHeader() {
    return $("<div/>")
        .addClass("calendarHeader")
        .each(function () {
            daysName.forEach(element =>
                $("<div/>")
                    .text(element)
                    .appendTo(this)
            )
        });
}

function generateYear() {
    return $("<select/>")
        .each(function () {
            for (var i = yearRange[0]; i <= yearRange[1]; i++) {
                $("<option/>")
                // .val(i)
                    .attr("value", i)
                    .text(i)
                    .appendTo(this);
            }

            $(this)
                .find("option:last-child")
                .attr("selected", true);
        })
        .change(function () {
            $(calendar)
                .attr("data-year", this[this.selectedIndex].value)
                .get(0).dispatchEvent(new Event('change'));
        })
        .each(function () {
            this.dispatchEvent(new Event('change'));
        });
}

function generateMonth() {
    return $("<select/>")
        .each(function () {
            monthName.forEach((month, index) =>
                $("<option/>")
                // .val(index)
                    .attr("value", index)
                    // .value(index)
                    .text(month)
                    .appendTo(this)
            );

            $(this)
                .first()
                .attr("selected", true);
        })
        .change(function () {
            $(calendar)
                .attr("data-monthNumber", this[this.selectedIndex].value)
                .get(0).dispatchEvent(new Event('change'));
            // .trigger("change");
        })
        .each(function () {
            this.dispatchEvent(new Event('change'));
        });
}

function generateDaysPicker() {
    var dayNumber = daysInMonth(
            $(calendar).attr("data-year") || 2017,
            $(calendar).attr("data-monthNumber")) || 31;

    var skipNumber = firstDay(
            $(calendar).attr("data-year") || 2017,
            $(calendar).attr("data-monthNumber")) || 6;


    if ($(calendar).attr("data-day") > dayNumber) {
        $(calendar).attr("data-day", 1);
    }

    return $("<div/>")
        .addClass("calendarDays")
        .append(() => generateHeader())
        .append(() => generateDays(1, dayNumber, skipNumber));
}

function generateDays(from, to = from + dayInWeek, skip = 0) {
    return $("<div/>")
        .addClass("calendarRow")
        .each(function () {
            for (var i = from - skip; i <= to; i++) {
                $("<div/>")
                    .text(i)
                    .attr("name", i)
                    .each(function () {
                        if (i >= from) {
                            $(this)
                                .css("cursor", "pointer")
                                .click(() => {
                                    cleanElementsBackground($(this).parent());
                                    $(calendar).attr("data-day", this.textContent);
                                    $(this).css("background", selectedColor);

                                    // $(calendar).trigger('change');
                                    $(calendar).get(0).dispatchEvent(new Event('change'));
                                });
                        } else {
                            $(this).addClass("emptyElement");
                        }

                        if ($(calendar).attr("data-day") == i) {
                            $(this).css("background", selectedColor);
                        }
                    })
                    .appendTo(this);
            }
        });
}

function cleanElementsBackground(div) {
    $(div)
        .children()
        .filter(element => $(element).attr("class") != "emptyElement")
        .each((_, element) => $(element).css("background", ""));
}

function daysInMonth(year, month) {
    var date = new Date(year, month, 1);
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}


function firstDay(year, month) {
    return new Date(year, month, 0).getDay();
}