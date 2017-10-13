{{ template "unit/base.tpl" . }}
{{ define "body" }}
<div class="container">
    <div class="masthead">

        {{ template "unit/header.tpl" . }}

        <section>

            <div class="container-fluid">
                <h3>Введите ваши контакты:</h3>
                <hr>
                <form method="post" name="user">
                    <div class="form-group">
                        <label for="FIO">ФИО</label>

                        <input type="text" class="form-control" id="FIO" name="fio"
                               placeholder="Пример: Петров Иван Иванович">
                    </div>

                    <div class="form-group">
                        <label for="email">Адресс электронной почты:</label>
                        <input type="text" class="form-control" id="email" placeholder="petr57@mail.ru" name="email">
                    </div>

                    <div class="form-group">
                        <label for="login">Логин</label>

                        <input type="text" class="form-control" id="login" name="login" onblur="frontend_main.check_login(this.value)"
                               placeholder="petr57">
                    </div>

                    <div class="form-group">
                        <label for="password">Пароль</label>

                        <input type="text" class="form-control" id="password" name="password"
                               placeholder="qwerty123">
                    </div>


                    <button type="submit" class="btn btn-default btn btn-primary" id="submit">
                        Зарегистрироваться
                    </button>

                    <a href="/index" type="reset" class="btn btn-default">Назад</a>
                </form>

            </div>

            <br>
            <br>
            <br>

            {{ template "unit/error.tpl" . }}
        </section>
    </div>
</div>
{{ end }}

{{ define "load_resources" }}
    {{ assets_css "/css/lab3/modalDialog.css" }}
    {{ assets_css "/css/lab3/popover.css" }}

    {{ template "all_experimental_libs.tpl" }}
{{ end }}
