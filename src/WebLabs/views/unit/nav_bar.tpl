<nav id="mainNav">

    {{ if .user }}
    {{ if .user.AdminList }}
    <ul class="nav nav-justified">
        <li {{ if eq .ref "admin/index" }}class="active"{{ end }}><a href="/admin/index">Главная страница администратора</a></li>
        <li {{ if eq .ref "admin/guestBookLoad" }}class="active"{{ end }}><a href="/admin/guestBookLoad">Загрузка гостевой книги</a></li>
        <li {{ if eq .ref "admin/blogEdit" }}class="active"{{ end }}><a href="/admin/blogEdit">Редактор блога</a></li>
        <li {{ if eq .ref "admin/userVisit" }}class="active"{{ end }}><a href="/admin/userVisit">Статистика посещений</a></li>
    </ul>

    <br>
    {{ end }}
    {{ end }}

    <ul class="nav nav-justified">
        <li {{ if eq .ref "index" }}class="active"{{ end }}><a href="/index">Главная_страница</a></li>
        <li {{ if eq .ref "aboutMe" }}class="active"{{ end }}><a href="/aboutMe">Обо_мне</a></li>
        <li id="dropDown" {{ if eq .ref "myInterests" }}class="active"{{ end }}><a href="/myInterests">Мои_интересы</a>
        </li>
        <li {{ if eq .ref "learning" }}class="active"{{ end }}><a href="/learning">Учеба</a></li>
        <li {{ if eq .ref "photoAlbum" }}class="active"{{ end }}><a href="/photoAlbum">Фотоальбом</a></li>
        <li {{ if eq .ref "contacts" }}class="active"{{ end }}><a href="/contacts">Контакты</a></li>
        <li {{ if eq .ref "tests" }}class="active"{{ end }}><a href="/tests">Тесты</a></li>
        <li {{ if eq .ref "history" }}class="active"{{ end }}><a href="/history">История_просмотра</a></li>
    </ul>

    <br>

    <ul class="nav nav-justified">
        <li {{ if eq .ref "guestBook" }}class="active"{{ end }}><a href="/blog/guestBook">Гостевая книга</a></li>
        <li {{ if eq .ref "myBlog" }}class="active"{{ end }}><a href="/blog/myBlog">Мой блог</a></li>
        <li {{ if eq .ref "blogLoad" }}class="active"{{ end }}><a href="/blog/blogLoad">Загрузка блога</a></li>
    </ul>
</nav>