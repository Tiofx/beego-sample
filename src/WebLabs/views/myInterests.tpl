<!DOCTYPE html>
<html>

{{ template "unit/head.tpl" . }}

<body>
<div class="container">
    <div class="masthead">

        {{ template "unit/header.tpl" . }}
        {{ template "unit/nav_bar.tpl" . }}
        <hr>

        <section>
            <ul class="vertical">
                {{ range $link, $description := .subrefs_description }}
                <li><a href='/myInterests/#{{ $link }}'>{{ $description }}</a></li>
                {{ end }}
            </ul>


            {{ range $name, $content := .subrefs_content}}
            <div class='afterVertical'>
                <a name='{{ $name }}'></a>
                <hr>
                <h2>{{ index $.subrefs_description $name }}</h2>
                <hr>
                <br>
                {{ range $content}}
                <img src="{{ $.image_path }}{{ . }}" class="img-rounded" alt="{{ . }}">
                {{ end }}
                <br>
                <br>
                <br>
            </div>
            {{ end }}

        </section>
    </div>
</div>
</body>
{{ template "unit/sign_form.tpl" . }}
{{ asset_js  "all" }}
{{ assets_css "/css/verticalNavBar.css" }}
</html>
