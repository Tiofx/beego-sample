{{ template "unit/base.tpl" . }}
{{ define "body" }}
<div class="container">
    <div class="masthead">

        {{ template "unit/header.tpl" . }}
        {{ template "unit/nav_bar.tpl" . }}

        <hr>

        <section>

            <div class="container-fluid">
                <h3>Введите ваши контакты:</h3>
                <hr>
                <form method="post">
                    <div class="form-group">
                        <label for="FIO">ФИО</label>

                        <input type="text" class="form-control" id="FIO" name="fio" value="{{ .contact.Fio }}"
                               placeholder="Пример: Петров Иван Иванович">
                    </div>

                    <div class="form-group">
                        <label> Пол:</label>

                        <div class="radio-inline">
                            <label>
                                <input type="radio" name="optionsRadios" checked value="man">
                                Мужской
                            </label>
                        </div>

                        <div class="radio-inline">
                            <label>
                                <input type="radio" name="optionsRadios" value="woman">
                                Женский
                            </label>
                        </div>

                        <div class="radio-inline">
                            <label>
                                <input type="radio" name="optionsRadios" disabled>
                                Не определился
                            </label>
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="age"> Возраст:</label>

                        <select class="form-control" id="age" name="age">
                            <option selected="selected" value="16">Меньше 16</option>
                            <option value="18">Больше 16, но меньше 18</option>
                            <option value="21">Больше 18, но меньше 21</option>
                            <option value="40">Больше 21, но меньше 40</option>
                            <option value="100">Больше 40</option>
                        </select>
                    </div>

                    <div class="form-group" id="birthdayContainer">
                        <label for="birthday"> Дата:</label>

                        <input class="form-control" id="birthday" type="text" name="date"
                               value="{{ .contact.Date }}">
                    </div>

                    <div class="form-group">
                        <label for="email">Адресс электронной почты:</label>
                        <input type="text" class="form-control" id="email" placeholder="Email" name="email"
                               value="{{ .contact.Email }}">
                    </div>

                    <div class="form-group">
                        <label for="phoneNumber">Телефон</label>
                        <input type="text" class="form-control" id="phoneNumber" placeholder="+71234567891"
                               name="phoneNumber" value="{{ .contact.Phone }}">
                    </div>


                    <button type="submit" class="btn btn-default btn btn-primary" id="submit">
                        Отправить
                    </button>

                    <button type="reset" value="Reset" class="btn btn-default">Очистить</button>
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
    {{ assets_js "/js/lab3/birthday.js" }}
    {{ assets_css "/css/lab3/modalDialog.css" }}
    {{ assets_css "/css/lab3/popover.css" }}
    {{ assets_css "/css/lab3/calendarDay.css" }}
{{ end }}