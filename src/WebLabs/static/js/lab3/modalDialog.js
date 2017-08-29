function createModalDialog(onYes, onNo) {
    return $("<div/>")
        .addClass("modalBackground")
        .append(
            $("<div/>")
                .addClass("modalDialogContainer")
                .append(
                    $("<textarea/>")
                        .addClass("question")
                        .attr("rows", 2)
                        .text("Вы действительно \nхотите это сделать?")
                )
                .append(
                    $("<div/>")
                        .addClass("button yes")
                        .text("да")
                        .click(event => {
                            onYes();
                            $(event.currentTarget)
                                .parent()
                                .parent()
                                .remove();
                        })
                )
                .append(
                    $("<div/>")
                        .addClass("button no")
                        .text("нет")
                        .click(event => {
                            onNo();
                            $(event.currentTarget)
                                .parent()
                                .parent()
                                .remove();
                        })
                ));
}
