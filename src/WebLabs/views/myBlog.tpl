{{ template "unit/base.tpl" . }}
{{ define "body" }}
<div class="container">
    <div class="masthead">

        {{ template "unit/header.tpl" . }}
        {{ template "unit/nav_bar.tpl" . }}

        {{ template "unit/pagable_table.tpl" .blog_table }}

        <br>

        <iframe src="blog_comment_form" frameborder="0" width="1000" height="400"
                id="input_form" style="visibility: hidden;">
        </iframe>

        <br>
    </div>
</div>
{{ end }}

{{ define "load_resources" }}
    {{ assets_css "/css/lab3/modalDialog.css" }}
    {{ assets_css "/css/lab3/popover.css" }}
    {{ asset_js  "all" }}

    {{ assets_js "/js/lab7/signInForm.js" }}
    {{ assets_js "/js/lab6/guestBookTable.js" }}
    {{ assets_js "/js/lab6/pageSelector.js" }}

    {{ template "all_experimental_libs.tpl" }}
{{ end }}

{{ if .user }}
    <script type="text/javascript">
        frontend_main.add_button_for_each_row();
    </script>
{{ end }}