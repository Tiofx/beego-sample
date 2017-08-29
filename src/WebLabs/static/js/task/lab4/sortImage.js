$(document.body).ready(function () {
    $("#allImageContainer")
        .prepend(
            $("<input/>")
                .attr("type", "button")
                .css("margin", "30px")
                .addClass("btn btn-primary btn-block")
                .val("Отсортировать картинки по высоте")
                .click(() => sort($("#allImageContainer")))
        );
});


function sort(imageContainer) {
    var images = $(imageContainer)
        .find("img")
        .parent()
        .parent()
        .toArray();

    images.sort((a, b) => getHeight(b) - getHeight(a));

    images = $(images)
        .map((i, el) =>
            $(el)
                .find("img")
                .attr("data-index", i)
        )
        .map((_, el)=>
            $(el)
                .parent()
                .parent()
                .detach())
        .toArray();

    $(images)
        .each((_, element) =>
            $(element).appendTo(imageContainer));

}

function getHeight(element) {
    return parseFloat(
        $(element)
            .find("img")
            .css("height")
            .replace("px", "")
    );
}
