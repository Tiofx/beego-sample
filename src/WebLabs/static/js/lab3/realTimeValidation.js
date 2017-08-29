const eventForValidation = 'blur';
const showDelay = 1;
const hideDelay = 1;

var submit;
const submitId = 'submit';
var fio, phoneNumber, birthday, email;
var mustBeValid = [fio, phoneNumber, birthday, email];

$(document).ready(function () {
    $.when(
        $.getScript('/js/lab3/modalDialog.js')
    ).done(function () {
        setUpListenersForValidation();
    });
});
var isReset = false;

function errorMessage(field, error) {
    $("[name=" + field + "]")
        .parent()
        .append(
            $("<span/>")
                .text(error)
                .css("color", "red")
        );
}


function setUpListenersForValidation() {
    // loadValidateElements();
    //
    // createFioValidation();
    // createTelephoneValidation();
    // createDateValidation();
    // createEmailValidation();
    //
    // submitEnableValidation();

    $(document)
        .on("reset", (event) => {
            if (isReset === true) {
                isReset = false;
                return true;
            }
            event.preventDefault();
            isReset = true;

            $(document.body).append(
                createModalDialog(() => $("form").trigger("reset"), () => isReset = false)
            );
        });
}

function submitEnableValidation() {
    $("#submit")
        .on('valid', function () {
            if (mustBeValid.every(
                    element => $(element).attr("data-valid")
                )) {
                $(this).attr("disabled", false);
            }
        })
        .each(function () {
            $(this)
                .parent()
                .submit(() => $(this).attr("disabled", true))
                .bind('reset', () => $(this).attr("disabled", true))
        });
}

function loadValidateElements() {
    fio = $('#FIO').get(0);
    phoneNumber = $("#phoneNumber").get(0);
    birthday = $("#birthday").get(0);
    email = $("#email").get(0);

    mustBeValid = [fio, phoneNumber, birthday, email];
}

function createFioValidation() {
    createValidationFor(fio,
        isFio,
        'ФИО - это три слова разделенных пробелом');
}


function createTelephoneValidation() {
    createValidationFor(phoneNumber,
        isPhoneNumber,
        'Телефон начинается с +7 или +3 и содержит от 9 до 11 цифр!');
}


function createDateValidation() {
    createValidationFor(birthday,
        isDate,
        'Дата должна быть в следующем формате: ДД.месяц.ГГГГ');
}

function createEmailValidation() {
    createValidationFor(email,
        isEmail,
        'Email должен быть в следующем формате: буквы@буквы.буквы');
}


function createValidationFor(element, validationFunction, helpMessage) {
    $(element)
        .each(function () {
            var popoverDiv = $("<div/>")
                .addClass("popoverDiv")
                .text(helpMessage)
                .appendTo($(this).parent());

            $(this).hover(
                () => $(popoverDiv).slideDown(),
                () => $(popoverDiv)
                    .delay(hideDelay * 1000)
                    .slideUp());

            $(createHelpMessage())
                .addClass("helpMessage")
                .text(helpMessage)
                .appendTo($(this).parent());
        })
        .on(eventForValidation, function () {
            if (validationFunction(this.value)) {
                $(this)
                    .attr("data-valid", true)
                    .parent()
                    .removeClass()
                    .addClass('form-group has-success has-feedback')
                    .find(".helpMessage")
                    .css("visibility", "hidden");

                $(`#${submitId}`).trigger('valid');
            } else {
                $(this)
                    .attr("valid", false)
                    .parent()
                    .removeClass()
                    .addClass('form-group has-error')
                    .find(".helpMessage")
                    .css("visibility", "visible");
            }
        });
}

function createHelpMessage() {
    return $("<span />")
        .addClass("help-block")
        .css("visibility", "hidden");
}