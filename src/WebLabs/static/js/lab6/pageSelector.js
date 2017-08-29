function generatePageSelector(count, currentPage = 1, pageNumber = 10, link = 'myBlog') {
    $("<div/>")
        .css("font-size", "22px")
        .append(
            $(`<span>Всего записей: ${count} </span>`)
        )
        .append($("<br>"))
        .append(
            $("<div/>")
                .append(
                    $(`<span>Старницы: </span>`)
                )
                .each((_, pages) => {
                        for (var i = 1; i <= pageNumber; i++) {
                            if (i != currentPage) {
                                $(`<a href='/${link}?page=${i}'>${i} </a>`).appendTo($(pages));
                            } else
                                $(`<span> ${i} </span>`).appendTo($(pages));
                        }
                    }
                )
        )
        .appendTo($("div.masthead"));
}