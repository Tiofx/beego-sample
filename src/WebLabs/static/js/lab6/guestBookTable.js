function generateTable(rows, headNames) {
    $("<div/>")
        .addClass("table-responsive")
        .append($("<h3> Сообщения </h3>"))
        .append(
            $("<table/>")
                .addClass("table table-bordered table-condensed")
                .append(table =>
                    $("<tr/>")
                        .each((_, tr) =>
                            $.each(headNames, (i, name) =>
                                $("<th/>")
                                    .text(name)
                                    .appendTo(tr)
                            )
                        )
                )
                .each((_, table) =>
                    $.each(rows, (_, row) =>
                        $("<tr/>")
                            .each((_, tr) =>
                                $.each(row, (i, value) => {
                                        if (i == "ImagePath" && value)
                                            $("<td/>")
                                                .append(
                                                    $("<div class='thumbnail'>")
                                                        .css("width", "111px")
                                                        .append(
                                                            $("<img/>")
                                                                .addClass("img-rounded")
                                                                .attr("src", value)
                                                        )
                                                )
                                                .appendTo(tr);
                                        else
                                            $("<td/>")
                                                .text(value)
                                                .appendTo(tr);
                                    }
                                )
                            )
                            .appendTo(table)
                    )
                )
        )
        .appendTo($("div.masthead"));
}