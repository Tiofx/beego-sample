{{ if .hasError }}
{{ range .errors }}
<script>errorMessage("{{ .Key }}", "{{ .Message }}")</script>
{{ end }}
{{ else if and . (not .isFirstTime) }}
<h1>Успех. Ошибок нет.</h1>
{{ end }}
