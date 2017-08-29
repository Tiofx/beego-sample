<!DOCTYPE html>
<html>

{{ template "unit/head.tpl" }}

<body>

<div class="container">

    <div class="masthead">

        {{ template "unit/header.tpl" . }}
        {{ template "unit/nav_bar.tpl" . }}

        <hr>

        <section>

            <div class="media">

                <div class="media-left">
                    <img src="static/img/camera_200.png" class="img-rounded" alt="Моя фотография">
                </div>

                <div class="media-body">
                    <h4 class="media-heading">Фамилия Имя</h4>
                    <hr>
                    {{ .biography }}
                </div>

            </div>

        </section>

    </div>

</div>

</body>
{{ template "unit/sign_form.tpl" . }}
</html>
		