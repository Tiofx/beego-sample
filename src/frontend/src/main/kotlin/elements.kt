import kotlinx.html.ButtonType
import kotlinx.html.button
import kotlinx.html.dom.create
import kotlinx.html.js.onClickFunction
import org.w3c.dom.*
import org.w3c.dom.parsing.DOMParser
import org.w3c.xhr.XMLHttpRequest
import kotlin.browser.document
import kotlin.browser.window
import kotlin.js.Json

@JsName("send_xml")
fun sendXML() {
    document
            .run { fromForm() }
            .apply { console.log(this) }
            .let {
                XMLHttpRequest().run {
                    onreadystatechange = {
                        try {
                            if (readyState == XMLHttpRequest.DONE) {
                                if (status == 200.toShort()) {
                                    response
                                            ?.also { console.log("response: $it") }
                                            ?.let { DOMParser().parseFromString(it as String, "text/xml") }
                                            ?.also { console.log("response after parse: ", it) }
                                            ?.toBlogRecord()
                                            ?.also { console.log("response as blog record: ", it) }
                                            ?.let { blog ->
                                                rowById(blog.id ?: throw IllegalArgumentException("blog record need id"))
                                                        .also { console.log("founded table row: ", it) }
                                                        .let { blog.updateRow(it) }
                                                        .also { console.log("table row after update: ", it) }
                                            }

                                    document.querySelector("form")
                                            ?.let { it as? HTMLFormElement }
                                            ?.reset()

                                    "Успех"

                                } else "Проблема $status"

                            } else {
                                "Ожидание, $readyState"
                            }

                        } catch (e: Exception) {
                            window.alert(e.toString())
                            "error: $e"
                        }.let { console.log(it) }
                    }

                    open("POST", "/admin/blog/edit.xml", true)
                    send(it.toFormData())
                }
            }
}

fun changeRecordButton(record: Json): HTMLElement
        = document.create.button(type = ButtonType.button, classes = "btn btn-default") {
    onClickFunction = { _ ->
        document.apply {
            console.log(record)

            getElementById("blog_id")
                    ?.value = record["blog_id"]?.toString()

            getElementById("messageTitle")
                    ?.value = record["messageTitle"]?.toString()

            getElementById("review")
                    ?.asDynamic().value = record["review"]?.toString()
        }
    }
    +"Изменить запись"
}

fun commentButton(blog_record_id: Int): HTMLElement
        = document.create.button(type = ButtonType.button, classes = "btn btn-default") {
    onClickFunction = { _ ->
        document.getElementById("input_form")
                .let { it as HTMLIFrameElement }
                .apply {
                    document.querySelector("input[name=blog_id]")
                            ?.value = blog_record_id.toString()

                    style.visibility = "visible"
                }
    }
    +"Добавить комментарий"
}