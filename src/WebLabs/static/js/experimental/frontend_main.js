if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'frontend_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'frontend_main'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'frontend_main'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'frontend_main'.");
}
var frontend_main = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var asList = Kotlin.org.w3c.dom.asList_kt9thq$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var ButtonType = $module$kotlinx_html_js.kotlinx.html.ButtonType;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var button = $module$kotlinx_html_js.kotlinx.html.button_lzqaus$;
  var UnsupportedOperationException = Kotlin.kotlin.UnsupportedOperationException;
  function main$lambda(f) {
    addButtonForEachRow();
  }
  function main(args) {
    var tmp$;
    (tmp$ = document.body) != null ? (tmp$.onload = main$lambda) : null;
    test();
  }
  function appendCommentToBlog(comment) {
    window.parent.document.append(comment);
    return null;
  }
  function test() {
    return 'Hello';
  }
  function addButtonForEachRow() {
    var tmp$;
    tmp$ = drop(asList(document.getElementsByTagName('tr')), 1).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = element.firstChild) != null ? tmp$_0.textContent : null) != null ? toInt(tmp$_1) : null) != null ? element.appendChild(commentButton(tmp$_2)) : null) != null ? tmp$_3 : window.alert('problem with blog record id');
    }
  }
  function commentButton$lambda$lambda(closure$blog_record_id) {
    return function (f) {
      var tmp$, tmp$_0, tmp$_1;
      (tmp$_0 = get_document(Kotlin.isType(tmp$ = document.getElementById('input_form'), HTMLIFrameElement) ? tmp$ : Kotlin.throwCCE()).querySelector('input[name=blog_id]')) != null ? set_value(tmp$_0, closure$blog_record_id.toString()) : null;
      (Kotlin.isType(tmp$_1 = document.getElementById('input_form'), HTMLElement) ? tmp$_1 : Kotlin.throwCCE()).style.visibility = 'visible';
    };
  }
  function commentButton$lambda(closure$blog_record_id) {
    return function ($receiver) {
      set_onClickFunction($receiver, commentButton$lambda$lambda(closure$blog_record_id));
      $receiver.unaryPlus_pdl1vz$('\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439');
    };
  }
  function commentButton(blog_record_id) {
    return button(get_create(document), void 0, void 0, ButtonType.button, 'btn btn-default', commentButton$lambda(blog_record_id));
  }
  function get_value($receiver) {
    return $receiver.getAttribute('value');
  }
  function set_value($receiver, value) {
    $receiver.setAttribute('value', value != null ? value : Kotlin.throwNPE());
  }
  function get_document($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_1 = (tmp$_0 = $receiver.contentDocument) != null ? tmp$_0 : (tmp$ = $receiver.contentWindow) != null ? tmp$.document : null;
    if (tmp$_1 == null) {
      throw new UnsupportedOperationException("can't get document of the iframe");
    }
    return tmp$_1;
  }
  _.main_kand9s$ = main;
  _.append_comment_to_blog = appendCommentToBlog;
  _.stable_name = test;
  _.addButtonForEachRow = addButtonForEachRow;
  main([]);
  Kotlin.defineModule('frontend_main', _);
  return _;
}(typeof frontend_main === 'undefined' ? {} : frontend_main, kotlin, this['kotlinx-html-js']);

//# sourceMappingURL=frontend_main.js.map
