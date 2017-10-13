import org.w3c.dom.asList
import org.w3c.xhr.FormData
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.window

fun main(args: Array<String>) {
//    document.body?.onload = { _ ->
//        addButtonForEachRow("Добавить аоа")
//    }
}

fun String?.toBoolean() = when (this) {
    "true" -> true
    "false", null -> false
    else -> false
}

@JsName("check_login")
fun checkLogin(login: String) {
    XMLHttpRequest().run {
        onreadystatechange = {
            if (readyState == XMLHttpRequest.DONE && status == 200.toShort()) {
                response.apply { console.log(this) }
                if (response?.let { it as String }.toBoolean()) {
                    window.alert("Логин: [$login] уже существует!")
                } else {
                    window.alert("Логина: [$login] еще нет")
                }

            } else status.toString()
        }
        open("POST", "/checkLogin", true)
        FormData().apply { append("login", login) }
                .let { send(it) }
    }
}

fun hideIframe() {
    window
            .parent
            .document
            .getElementById("input_form")
//            ?.let { it as? HTMLElement }
            ?.asDynamic()
            ?.style
            ?.visibility = "hidden"
}

@JsName("change_record_buttons")
fun changeRecordButtons() =
        allRows().onEach {
            it.appendChild(
                    changeRecordButton(getDataFromRow(it))
            )
        }

@JsName("add_button_for_each_row")
fun addButtonForEachRow() =
        allRows().onEach { node ->
            node.firstChild
                    ?.textContent
                    ?.toInt()
                    ?.let {
                        node.appendChild(commentButton(it))
                    }
                    ?: window.alert("problem with blog record id")
        }


@JsName("append_comment_to_blog")
fun appendCommentToBlog(blogId: Int, comment: String) = window
        .parent.document
//        .querySelector("td:contains(\"$blogId\")")
        .getElementsByTagName("tr")
        .asList()
        .firstOrNull {
            it.getElementsByTagName("td")
                    .asList()
                    .firstOrNull()
                    ?.textContent
                    ?.toIntOrNull()
                    ?.equals(blogId)
                    ?: false
        }
        ?.insertAdjacentHTML("afterend", comment)
