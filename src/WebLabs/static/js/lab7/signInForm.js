function generateSignInForm() {
    $(document)
        .find("div.masthead")
        .eq(0)
        .prepend(
            $("<div/>")
                .css({
                    "border": "3px solid gray",
                    "padding": "5px",
                    "width": "30%"
                })
                .append(
                    $("<form method='post' action='/signin' name='signIn' class='form-horizontal'/>")
                        .append(
                            $("<div class='form-group'/>")
                                .append($("<label class='col-xs-3 control-label' for='login'>Логин:</label>"))
                                .append(
                                    $("<div class='col-xs-9'/>")
                                        .append(
                                            $("<input type='text' class='form-control' id='login' name='login' placeholder='petr69'/>")
                                        )
                                )
                        )
                        .append(
                            $("<div class='form-group'/>")
                                .append($("<label class='col-xs-3 control-label' for='password'>Пароль:</label>"))
                                .append(
                                    $("<div class='col-xs-9'/>")
                                        .append(
                                            $("<input type='password' class='form-control' id='password' name='password' placeholder='qwerty123'/>")
                                        )
                                )
                        )
                        .append(
                            $("<div class='form-group'/>")
                                .append(
                                    $("<div class='col-xs-offset-3 col-xs-9'/>")
                                        .append(
                                            $("<button type='submit' class='btn btn-default btn-primary col-xs-4'>Войти</button>")
                                        )
                                        .append(
                                            $("<a href='/registration' class='btn btn-default col-xs-offset-1 col-xs-7'>Регистрация</a>")
                                        )
                                )
                        )
                )
        )
}


function generateSignedInForm(fio) {
    $(document)
        .find("div.masthead")
        .eq(0)
        .prepend(
            $("<div/>")
                .css({
                    "border": "3px solid gray",
                    "padding": "5px",
                    "width": "40%"
                })
                .append(
                    $("<form method='post' action='/signOut' name='signOut'/>")
                        .append($(`<span>Пользователь: ${fio}  </span>`))
                        .append(
                            $("<button type='submit' class='btn btn-default btn-primary'>Выйти</button>")
                        )
                )
        )
}