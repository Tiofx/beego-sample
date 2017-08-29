{{ with .selector }}
{{ if . }}
{{ assets_js "/js/lab6/pageSelector.js" }}
<script>generatePageSelector({{ .Count }}, {{ .Current_page }}, {{ .Page_number }}{{ if $.link }},{{ $.link }}{{ end }})</script>
{{ else }}
<h3>Произошла ошибка при загрузке селектора:</h3>
{{ end }}
{{ end }}