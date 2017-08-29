{{ template "unit/base.tpl" . }}
{{ define "body" }}
<body>
<div class="container">
    <div class="masthead">

        {{ template "unit/header.tpl" . }}
        {{ template "unit/nav_bar.tpl" . }}

        {{ template "unit/pagable_table.tpl" .blog_table }}
    </div>
</div>
</body>
{{ end }}

{{ define "load_resources" }}
    {{ assets_css "/css/lab3/modalDialog.css" }}
    {{ assets_css "/css/lab3/popover.css" }}

    {{ assets_js "/js/lab7/signInForm.js" }}
    {{ assets_js "/js/lab6/guestBookTable.js" }}
    {{ assets_js "/js/lab6/pageSelector.js" }}
{{ end }}