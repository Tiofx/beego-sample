{{ if not .user }}
    <script>generateSignInForm();</script>
    {{ template "unit/error.tpl" .user_errors }}
{{ else }}
    <script>generateSignedInForm("{{ .user.Fio }}");</script>
{{ end }}