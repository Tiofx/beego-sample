{{ template "unit/base.tpl" .}}

{{ define "body" }}
<body>
<div class="container">

    <div class="masthead">

        {{ template "unit/header.tpl" . }}
        {{ template "unit/nav_bar.tpl" . }}

        <hr>

        <section>
            <div class="media">

                <div class="media-left">
                    <img src="/static/img/camera_200.png" class="img-rounded" alt="Моя фотография">
                </div>

                <div class="media-body">
                    <h3 class="media-heading">Фамилия Имя Отчество</h3>
                    Группа: <abbr title="Информационные системы/бюджет-41-очное отделение обучения">ИС/б-31-о</abbr>
                    <br>
                    <hr>
                    <div class="text-center"><h4>Лабораторная работа №8 WEB </h4></div>
                    <br>
                    <div class="text-center"><h5>
                            Исследование возможностей асинхронного взаимодействия с сервером. Технология AJAX
                        </h5>
                    </div>
                    <br>
                    <hr>
                </div>

            </div>

        </section>

    </div>
</div>
</body>
{{ end }}

{{ define "load_resources" }}{{ end }}
