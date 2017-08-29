function setUpListenersForDropDown() {
    $("#dropDown")
        .not(".active")
        .replaceWith(
            $(generateDropDown())
                .attr("id", "dropDown")
                .each(function () {
                    $(this)
                        .find("a")
                        .mouseover(() =>
                            $(this)
                                .find("ul")
                                .css("visibility", "visible")
                                .parent()
                                .css("z-index", 999)
                        )
                        .mouseout(() =>
                            $(this)
                                .find("ul")
                                .css("visibility", "hidden")
                                .parent()
                                .css("z-index", 0)
                        )
                })
        );
}

const arrayName = ["Любимые фильмы", "Любимые книги", "Любимые сериалы"];
const links = ["films", "books", "serials"];
const baseLink = "/myInterests";

function generateDropDown() {
    return $("<li></li>")
        .css("z-index", 0)
        .append(
            $("<a></a>")
                .attr("href", baseLink)
                .text("Мои_интересы")
        )
        .append(
            $("<ul></ul>")
                .addClass("dropDown")
                .append(() =>
                    links.map((element, index) =>
                        $("<li></li>")
                            .append(
                                $("<a></a>")
                                    .attr("href", `${baseLink}#${element}`)
                                    .text(arrayName[index]))))
        );
}
