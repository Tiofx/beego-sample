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
            <h2 class="text-center">Севастопольский государственный университет</h2>
            <h3 class="text-center">Институт Информационных систем</h3>
            <hr>

            <h4>Перечень изучаемых дистиплин</h4>
            <div class="table-responsive">
                <table class="table table-bordered table-condensed">

                    {{ range .table.header }}

                    <tr>
                        {{ range . }}

                        <th rowspan="{{ get_from_hr . "rowspan" }}" colspan="{{ get_from_hr . "colspan" }}">
                            {{ get_from_hr . "title" }}
                        </th>

                        {{ end }}
                    </tr>

                    {{ end }}


                    {{ range .table.rows }}

                    <tr>
                        {{ range . }}

                        <td>{{ . }}</td>

                        {{ end }}

                    </tr>

                    {{ end }}

                </table>

            </div>

        </section>

    </div>

</div>

</body>
{{ template "unit/sign_form.tpl" . }}

{{ assets_css "static/css/tableHeadAlign.css" }}
</html>
		