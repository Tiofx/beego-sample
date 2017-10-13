import org.w3c.dom.*
import org.w3c.files.File
import org.w3c.files.get
import org.w3c.xhr.FormData
import kotlin.browser.document
import kotlin.dom.appendText
import kotlin.js.json


fun allRows() = document.getElementsByTagName("tr")
        .asList()
        .drop(1)

fun rowById(id: Int) = allRows()
        .first {
            it.firstChild?.textContent
                    ?.apply { console.log("blog_id: ", this) }
                    ?.toInt()?.equals(id) ?: false
        }


fun getDataFromRow(tr: Element) = tr.children.run {
    json(
            "blog_id" to get(0)?.textContent,

            "date" to get(1)?.textContent,

            "messageTitle" to get(2)?.textContent,

            "imagePath" to get(3)
                    ?.querySelector("img")
                    ?.getAttribute("src"),

            "review" to get(4)?.textContent
    )
}

var Element.value: String?
    get() = getAttribute("value")
    set(value) = setAttribute("value", value ?: "null")

val HTMLIFrameElement.document
    get() = contentDocument
            ?: contentWindow?.document
            ?: throw UnsupportedOperationException("can't get document of the iframe")


data class BlogRecord(var id: Int?, var date: String? = null, var title: String?,
                      var imagePath: String? = null, var review: String?, var file: File? = null)

external fun escape(s: Any?): String

fun BlogRecord.toXML() = """
    <record>
        <id>${escape(id)}</id>
        <title>${escape(title)}</title>
        <imagePath>${escape(imagePath)}</imagePath>
        <review>${escape(review)}</review>
    </record>
    """.trimIndent()

fun BlogRecord.toFormData() = FormData().apply {
    append("id", "$id")
    append("title", "$title")
    append("imagePath", "$imagePath")
    append("review", "$review")
    this.asDynamic().append("image", file)
}

fun Document.toBlogRecord() = BlogRecord(
        getElementsByTagName("Id")[0]?.firstChild?.nodeValue?.toInt(),
        getElementsByTagName("Date")[0]?.firstChild?.nodeValue,
        getElementsByTagName("MessageTitle")[0]?.firstChild?.nodeValue,
        getElementsByTagName("ImagePath")[0]?.firstChild?.nodeValue,
        getElementsByTagName("Message")[0]?.firstChild?.nodeValue
)

fun BlogRecord.updateRow(tr: Element) = tr.children.apply {
    get(0)?.textContent = id?.toString()
    get(1)?.textContent = date
    get(2)?.textContent = title
    get(3)?.querySelector("img")
            ?.apply { setAttribute("src", imagePath ?: "null") }
            ?: get(3)?.appendText(imagePath ?: "no image")

    get(4)?.textContent = review
}

fun Document.fromForm() = BlogRecord(
        id = getElementById("blog_id")?.asDynamic().value,
        title = getElementById("messageTitle")?.asDynamic().value,
        file = getElementById("imagePath")
                ?.let { it as? HTMLInputElement }
                ?.files
                ?.get(0)
                ?.also { console.log(it) },
        review = getElementById("review")?.asDynamic().value
)