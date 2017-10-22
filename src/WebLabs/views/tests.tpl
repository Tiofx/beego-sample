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

                        <input type="text" class="form-control" id="FIO" name="fio"
                               placeholder="Пример: Петров Иван Иванович">
                    </div>

                    <div class="form-group">
                        <label for="group"> Группа:</label>

                        <select class="form-control" id="group" name="group">
                            <optgroup label="1 курс">
                                <option value="ИС/б-11-o">ИС/б-11-o</option>
                                <option value="ИС/б-12-o">ИС/б-12o</option>
                                <option value="ИС/б-13-o">ИС/б-13o</option>
                                <option value="ИС/б-14-o">ИС/б-14-o</option>
                            </optgroup>

                            <optgroup label="2 курс">
                                <option value="ИС/б-21-o">ИС/б-21-o</option>
                                <option value="ИС/б-22-o">ИС/б-22o</option>
                                <option value="ИС/б-23-o">ИС/б-23o</option>
                                <option value="ИС/б-24-o">ИС/б-24-o</option>
                            </optgroup>

                            <optgroup label="3 курс">
                                <option value="ИС/б-31-o">ИС/б-31-o</option>
                                <option value="ИС/б-32-o">ИС/б-32o</option>
                                <option value="ИС/б-33-o">ИС/б-33o</option>
                                <option value="ИС/б-34-o">ИС/б-34-o</option>
                            </optgroup>
                        </select>
                    </div>

                    <div>
                        <hr>
                        <h3>Тесты:</h3>
                        <hr>

                        <div class="form-group">
                            <label for="answer1">Вид - это ...</label>

                            <input type="text" class="form-control" id="test1" name="answer1"
                                   placeholder="основная структурная единица биологической систематики живых организмов">

                            <p class="help-block">Ответ необходимо ввести ASCII кодами</p>
                        </div>

                        <div class="form-group">
                            <label> У какой линии толщина по отношению к толщине основной линии от S/3 до S/2?</label>

                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="answer2" value="Сплошная толстая основная">
                                    Сплошная толстая основная
                                </label>
                            </div>

                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="answer2" value="Сплошная тонкая">
                                    Сплошная тонкая
                                </label>
                            </div>

                            <div class="checkbox">
                                <label>
                                    <input type="checkbox" name="answer2" value="Двойная сплошная">
                                    Двойная сплошная
                                </label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="answer3"> Определите какой разрез изображон на данной картинке (В-В):</label>

                            <select class="form-control" id="test3" name="answer3">
                                <optgroup
                                        label="В зависимости от положения секущей плоскости относительно горизонтальной плоскости проекций:">
                                    <option value="горизонтальный" selected="selected">горизонтальный</option>
                                    <option value="вертикальный">вертикальный</option>
                                    <option value="наклонный">наклонный</option>
                                </optgroup>

                                <optgroup label="В зависимости от числа секущих плоскостей:">
                                    <option value="простой">простой</option>
                                    <option value="сложный">сложный</option>
                                </optgroup>

                            </select>

                            <img src="/static/img/section.jpg" alt="Картинка разрезов">
                        </div>
                    </div>
                    <br>
                    <hr>

                    <button type="submit" class="btn btn-default btn btn-primary">Отправить</button>

                    <button type="reset" class="btn btn-default">Очистить</button>

                    <br>
                    <br>
                    <br>
                </form>

            </div>
            {{ template "unit/error.tpl" . }}

        </section>

        {{ if .user }}
        {{ template "unit/table.tpl" .tests_table }}
        {{ end }}
    </div>
</div>
{{ end }}

{{ define "load_resources" }}
{{ asset_js  "all" }}
{{ end }}