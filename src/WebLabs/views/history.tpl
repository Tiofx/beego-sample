{{ template "unit/base.tpl" . }}
{{ define "body" }}
<div class="container">

    <div class="masthead">

        {{ template "unit/header.tpl" . }}
        {{ template "unit/nav_bar.tpl" . }}

        <hr>

        <section id="tableDestination">

        </section>

    </div>
</div>
{{ end }}

{{ define "load_resources" }}
    {{ assets_css "/css/tableHeadAlign.css" }}
    {{ assets_js "/js/lab3/history.js" }}
{{ end }}