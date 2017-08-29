{{ template "unit/base.tpl" . }}
{{ define "body" }}
<div class="container">
    <div class="masthead">

        {{ template "unit/header.tpl" . }}
        {{ template "unit/nav_bar.tpl" . }}
        <hr>

        <section>

            <div class="container-fluid">
                <hr>
                <form method="post" enctype="multipart/form-data" name="mainForm">
                    <div class="form-group">
                        <label for="blogRecord">Добавить записи (.csv): </label>
                        <input type="file" class="form-control" id="blogRecord" name="{{ .filename }}">
                    </div>

                    <button type="submit" class="btn btn-default btn btn-primary" id="submit">
                        3arpyзить
                    </button>
                </form>

            </div>

            <br>
            <br>
            <br>
            {{ if .error }}
                <span style='color:red'>Ошибка при загрузке файла: {{ .error }}</span>
            {{ end }}
        </section>
    </div>
</div>
{{ end }}

{{ define "load_resources" }}
    {{ assets_css "/css/lab3/modalDialog.css" }}
    {{ assets_css "/css/lab3/popover.css" }}
{{ end }}