{{ template "unit/base.tpl" . }}
{{ define "body" }}
<div class="container">

    <div class="masthead">

        {{ template "unit/header.tpl" . }}
        {{ template "unit/nav_bar.tpl" . }}

        {{ template "unit/pagable_table.tpl" .blog_table }}

        <hr>

        <section>

            <div class="container-fluid">
                <h3>Новая запись:</h3>
                <hr>
                <form method="post" enctype="multipart/form-data" name="mainForm" onsubmit="return false">

                    <input type="hidden" name="blog_id" id="blog_id" value=""/>

                    <div class="form-group">
                        <label for="messageTitle">Тема сообщения:</label>

                        <input type="text" class="form-control" id="messageTitle" name="messageTitle"
                               placeholder="Ваш сайт">
                    </div>

                    <div class="form-group">
                        <label for="imagePath">Изображение: </label>
                        <input type="file" class="form-control" id="imagePath" name="{{ .file_name }}">
                    </div>

                    <div class="form-group">
                        <label for="message">Текст сообщения:</label>
                        <textarea class="form-control" rows="8" id="review"
                                  placeholder="Мне понравился ваш сайт. Зайду еще много раз" name="message"></textarea>
                    </div>

                    <button type="submit" class="btn btn-default btn btn-primary" id="submit"
                            onclick="frontend_main.send_xml()">
                        Отправить
                    </button>

                    <button type="reset" class="btn btn-default">Очистить</button>
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
    {{ asset_css  "all_style" }}
    {{ asset_js  "all" }}
    {{ template "all_experimental_libs.tpl" }}
{{ end }}

<script type="text/javascript">
    frontend_main.change_record_buttons();
</script>