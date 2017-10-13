<!DOCTYPE html>
<html>
{{ template "unit/head.tpl" . }}

    <body>
        {{ template "body" . }}
        {{ template "load_resources" }}
    </body>

{{ if not .not_use_sign_form }}
    {{ template "unit/sign_form.tpl" . }}
{{ end }}
</html>