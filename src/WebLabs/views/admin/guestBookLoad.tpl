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
                        <label for="messages">Файл: </label>
                        <input type="file" class="form-control" id="messages" name="{{ .file_name }}">
                    </div>

                    <button type="submit" class="btn btn-default btn btn-primary" id="submit">
                        3arpyзить
                    </button>
                </form>

            </div>

            <br>
            <br>
            <br>

            {{ .result }}

        </section>

    </div>
</div>
{{ end }}

{{ define "load_resources" }}
    {{ asset_css  "all_style" }}
    {{ asset_js  "all" }}
{{ end }}