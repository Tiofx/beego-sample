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
            <h3>Картинки</h3>
            <div class="container-fluid" id="allImageContainer">

                {{ range $i, $title := .photo_album.titles }}

                {{ if (eq (mod $i $.photo_album.col_num) 0 ) }}
                <div class="row">
                    {{ end }}

                    <div class="col-md-3">
                        <div class="thumbnail">

                            <img src='{{ printf $.photo_album.image_format $.photo_album.base_image_path (plus $i 1)}}'
                                 class="img-rounded"
                                 alt="{{ $title }}"
                                 title="{{ $title }}"
                                 data-index={{ $i }}>

                            <div class="caption">{{ $title }}</div>

                        </div>
                    </div>

                    {{ if (eq (mod $i $.photo_album.col_num) (minus $.photo_album.col_num 1)) }}
                </div>
                {{ end }}

                {{ end }}

            </div>
        </section>
    </div>
</div>
</body>
{{ template "unit/sign_form.tpl" . }}

{{ assets_css "/css/lab3/bigPhoto.css" }}

{{ assets_js "/js/lab3/photoGrow.js" }}
{{ assets_js "/js/task/lab4/sortImage.js" }}
</html>
		