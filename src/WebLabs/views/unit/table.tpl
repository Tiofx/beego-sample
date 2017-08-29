{{ if and .rows .header }}
{{ assets_js "/js/lab6/guestBookTable.js" }}
<script>generateTable({{ marshal .rows }}, {{ marshal .header }})</script>
{{ else }}
<h3>Произошла ошибка:</h3>
{{ .error }}
{{ end }}