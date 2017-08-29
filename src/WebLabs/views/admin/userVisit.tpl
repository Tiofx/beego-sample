{{ template "unit/base.tpl" . }}
{{ define "body" }}
<div class="container">

    <div class="masthead">

        {{ template "unit/header.tpl" . }}
        {{ template "unit/nav_bar.tpl" . }}

        <hr>

        <section>

            {{ template "unit/pagable_table.tpl" .user_visit }}
        </section>

    </div>
</div>
{{ end }}

{{ define "load_resources" }}
    {{ assets_css "/css/lab3/modalDialog.css" }}
    {{ assets_css "/css/lab3/popover.css" }}
{{ end }}