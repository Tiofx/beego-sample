var imageNumber;

$(document).ready(function () {
    setUpPhotoGrowListeners();

    imageNumber = $("#allImageContainer")
        .find("img")
        .length;
});


function setUpPhotoGrowListeners() {
    $('img').click(function () {
        $(document.body).append(() => createBigPhoto(this.cloneNode(true), $(this).attr("data-index")));
    });
}

function createBigPhoto(image, index) {
    return $('<div></div>')
        .hide()
        .addClass('photoContainer centred')
        .append(
            $(image)
                .addClass('centredImg')
                .off()
        )
        .append(
            $("<div/>")
                .addClass("photoInterface")
                .append(
                    $("<div/>")
                        .addClass("leftArrow")
                        .append(
                            $("<img/>")
                                .attr("src", "static/img/arrow/left.png")
                                .attr("alt", "left")
                        )
                        .click(function () {
                            var index = $(this)
                                .parent()
                                .parent()
                                .find("img")
                                .attr("data-index");
                            index = (index - 1 + imageNumber) % imageNumber;

                            $("#allImageContainer")
                                .find(`[data-index=${index}]`)
                                .trigger("click");
                        })
                )
                .append(
                    $("<div/>")
                        .addClass("imageInfo")
                        .text(`фото ${index} из ${imageNumber}`)
                )
                .append(
                    $("<div/>")
                        .addClass("rightArrow")
                        .append(
                            $("<img/>")
                                .attr("src", "static/img/arrow/right.png")
                                .attr("alt", "right")
                        )
                        .click(function () {
                            var index = $(this)
                                .parent()
                                .parent()
                                .find("img")
                                .attr("data-index");
                            index++;
                            index = index % imageNumber;

                            $("#allImageContainer")
                                .find(`[data-index=${index}]`)
                                .trigger("click");
                        })
                )
        )
        .click(function () {
            $.when(
                $(this)
                    .slideUp("slow")
            ).done(() => this.remove());
        })
        .fadeIn("slow");
}
