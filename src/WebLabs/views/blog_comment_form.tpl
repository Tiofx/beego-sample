<form method="post" action="blog_comment_form">
    <input type="hidden" name="blog_id" id="blog_id"/>

    <div class="form-group">

        <label for="comment">Комментарий: </label>

        <textarea class="form-control" rows="8" id="comment"
                  placeholder="Какая замечательная запись в блоге"
                  name="comment"></textarea>

        <br>

        <button type="submit" class="btn btn-default btn btn-primary" id="submit">
            Отправить
        </button>

    </div>
</form>
{{ template "unit/css_import.tpl" }}
{{ template "all_experimental_libs.tpl" }}
<script type="text/javascript">
    frontend_main.append_comment_to_blog({{ .blog_id }},{{ .comment }});
    frontend_main.hideIframe();
</script>
