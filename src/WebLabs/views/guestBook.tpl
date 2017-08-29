{{ template "unit/base.tpl" . }}

{{ define "body" }}
<div class="container">
    <div class="masthead">

        {{ template "unit/header.tpl" . }}

        {{ template "unit/nav_bar.tpl" . }}

        <hr>

        <section>
            <hr>

            <hr>

            <div class="container-fluid">
                <h3>Обратная связь:</h3>
                <hr>
                <form method="post" name="mainForm">
                    <div class="form-group">
                        <label for="FIO">ФИО</label>

                        <input type="text" class="form-control" id="FIO" name="fio"
                               placeholder="Пример: Петров Иван Иванович">
                    </div>

                    <div class="form-group">
                        <label for="email">Адресс электронной почты:</label>
                        <input type="text" class="form-control" id="email" placeholder="Email" name="email">
                    </div>

                    <div class="form-group">
                        <label for="review">Текст отзыва:</label>
                        <textarea class="form-control" rows="8" id="review"
                                  placeholder="Мне понравился ваш сайт. Зайду еще много раз" name="review"></textarea>
                    </div>

                    <button type="submit" class="btn btn-default btn btn-primary" id="submit">
                        Отправить
                    </button>

                    <button type="reset" class="btn btn-default">Очистить</button>
                </form>

            </div>

            <br>
            <br>
            <br>

            {{ template "unit/table.tpl" .guest_book_table }}
        </section>
    </div>
</div>
{{ end }}


{{ define "load_resources" }}
    {{ assets_css "/css/lab3/modalDialog.css" }}
    {{ assets_css "/css/lab3/popover.css" }}
    {{ assets_css "/css/lab3/calendarDay.css" }}
{{ end }}