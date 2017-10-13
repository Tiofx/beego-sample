if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'frontend_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'frontend_main'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'frontend_main'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'frontend_main'.");
}
var frontend_main = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var Exception = Kotlin.kotlin.Exception;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var ButtonType = $module$kotlinx_html_js.kotlinx.html.ButtonType;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var button = $module$kotlinx_html_js.kotlinx.html.button_lzqaus$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var asList = Kotlin.org.w3c.dom.asList_kt9thq$;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var json = Kotlin.kotlin.js.json_pyyo18$;
  var UnsupportedOperationException = Kotlin.kotlin.UnsupportedOperationException;
  function sendXML$lambda$lambda$lambda(this$) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
      try {
        if (this$.readyState === XMLHttpRequest.DONE) {
          if (this$.status === Kotlin.toShort(200)) {
            var tmp$_8;
            if ((tmp$ = this$.response) != null) {
              console.log('response: ' + tmp$);
              tmp$_8 = tmp$;
            }
             else
              tmp$_8 = null;
            var tmp$_9;
            if ((tmp$_0 = tmp$_8) != null) {
              var tmp$_10;
              tmp$_9 = (new DOMParser()).parseFromString(typeof (tmp$_10 = tmp$_0) === 'string' ? tmp$_10 : Kotlin.throwCCE(), 'text/xml');
            }
             else
              tmp$_9 = null;
            var tmp$_11;
            if ((tmp$_1 = tmp$_9) != null) {
              console.log('response after parse: ', tmp$_1);
              tmp$_11 = tmp$_1;
            }
             else
              tmp$_11 = null;
            var tmp$_12;
            if ((tmp$_3 = (tmp$_2 = tmp$_11) != null ? toBlogRecord(tmp$_2) : null) != null) {
              console.log('response as blog record: ', tmp$_3);
              tmp$_12 = tmp$_3;
            }
             else
              tmp$_12 = null;
            if ((tmp$_4 = tmp$_12) != null) {
              var tmp$_13;
              tmp$_13 = tmp$_4.id;
              if (tmp$_13 == null) {
                throw new IllegalArgumentException('blog record need id');
              }
              var $receiver = rowById(tmp$_13);
              console.log('founded table row: ', $receiver);
              var $receiver_0 = updateRow(tmp$_4, $receiver);
              console.log('table row after update: ', $receiver_0);
            }
            var tmp$_14;
            if ((tmp$_5 = document.querySelector('form')) != null) {
              var tmp$_15;
              tmp$_14 = Kotlin.isType(tmp$_15 = tmp$_5, HTMLFormElement) ? tmp$_15 : null;
            }
             else
              tmp$_14 = null;
            (tmp$_6 = tmp$_14) != null ? tmp$_6.reset() : null;
            tmp$_7 = '\u0423\u0441\u043F\u0435\u0445';
          }
           else
            tmp$_7 = '\u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 ' + this$.status;
        }
         else {
          tmp$_7 = '\u041E\u0436\u0438\u0434\u0430\u043D\u0438\u0435, ' + this$.readyState;
        }
      }
       catch (e) {
        if (Kotlin.isType(e, Exception)) {
          window.alert(e.toString());
          tmp$_7 = 'error: ' + e;
        }
         else
          throw e;
      }
      var it_0 = tmp$_7;
      console.log(it_0);
    };
  }
  function sendXML() {
    var $receiver = fromForm(document);
    console.log($receiver);
    var $receiver_0 = new XMLHttpRequest();
    $receiver_0.onreadystatechange = sendXML$lambda$lambda$lambda($receiver_0);
    $receiver_0.open('POST', '/admin/blog/edit.xml', true);
    $receiver_0.send(toFormData($receiver));
  }
  function changeRecordButton$lambda$lambda(closure$record) {
    return function (f) {
      var $receiver = document;
      var closure$record_0 = closure$record;
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      console.log(closure$record_0);
      (tmp$_0 = $receiver.getElementById('blog_id')) != null ? set_value(tmp$_0, (tmp$ = closure$record_0['blog_id']) != null ? tmp$.toString() : null) : null;
      (tmp$_2 = $receiver.getElementById('messageTitle')) != null ? set_value(tmp$_2, (tmp$_1 = closure$record_0['messageTitle']) != null ? tmp$_1.toString() : null) : null;
      ((tmp$_4 = $receiver.getElementById('review')) != null ? tmp$_4 : null).value = (tmp$_3 = closure$record_0['review']) != null ? tmp$_3.toString() : null;
    };
  }
  function changeRecordButton$lambda(closure$record) {
    return function ($receiver) {
      set_onClickFunction($receiver, changeRecordButton$lambda$lambda(closure$record));
      $receiver.unaryPlus_pdl1vz$('\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0437\u0430\u043F\u0438\u0441\u044C');
    };
  }
  function changeRecordButton(record) {
    return button(get_create(document), void 0, void 0, ButtonType.button, 'btn btn-default', changeRecordButton$lambda(record));
  }
  function commentButton$lambda$lambda(closure$blog_record_id) {
    return function (f) {
      var tmp$;
      var $receiver = Kotlin.isType(tmp$ = document.getElementById('input_form'), HTMLIFrameElement) ? tmp$ : Kotlin.throwCCE();
      var closure$blog_record_id_0 = closure$blog_record_id;
      var tmp$_0;
      (tmp$_0 = get_document($receiver).querySelector('input[name=blog_id]')) != null ? set_value(tmp$_0, closure$blog_record_id_0.toString()) : null;
      $receiver.style.visibility = 'visible';
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
  function main(args) {
  }
  function toBoolean($receiver) {
    if (Kotlin.equals($receiver, 'true'))
      return true;
    else if (Kotlin.equals($receiver, 'false') || $receiver == null)
      return false;
    else
      return false;
  }
  function checkLogin$lambda$lambda(this$, closure$login) {
    return function (it) {
      var tmp$;
      if (this$.readyState === XMLHttpRequest.DONE && this$.status === Kotlin.toShort(200)) {
        var $receiver = this$.response;
        console.log($receiver);
        var tmp$_0;
        if ((tmp$ = this$.response) != null) {
          var tmp$_1;
          tmp$_0 = typeof (tmp$_1 = tmp$) === 'string' ? tmp$_1 : Kotlin.throwCCE();
        }
         else
          tmp$_0 = null;
        if (toBoolean(tmp$_0)) {
          return window.alert('\u041B\u043E\u0433\u0438\u043D: [' + closure$login + '] \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!');
        }
         else {
          return window.alert('\u041B\u043E\u0433\u0438\u043D\u0430: [' + closure$login + '] \u0435\u0449\u0435 \u043D\u0435\u0442');
        }
      }
       else
        return this$.status.toString();
    };
  }
  function checkLogin(login) {
    var $receiver = new XMLHttpRequest();
    $receiver.onreadystatechange = checkLogin$lambda$lambda($receiver, login);
    $receiver.open('POST', '/checkLogin', true);
    var $receiver_0 = new FormData();
    $receiver_0.append('login', login);
    $receiver.send($receiver_0);
  }
  function hideIframe() {
    var tmp$, tmp$_0, tmp$_1;
    (tmp$_1 = (tmp$_0 = (tmp$ = window.parent.document.getElementById('input_form')) != null ? tmp$ : null) != null ? tmp$_0.style : null) != null ? (tmp$_1.visibility = 'hidden') : null;
  }
  function changeRecordButtons() {
    var $receiver = allRows();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.appendChild(changeRecordButton(getDataFromRow(element)));
    }
    return $receiver;
  }
  function addButtonForEachRow() {
    var $receiver = allRows();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = element.firstChild) != null ? tmp$_0.textContent : null) != null ? toInt(tmp$_1) : null) != null ? element.appendChild(commentButton(tmp$_2)) : null) != null ? tmp$_3 : window.alert('problem with blog record id');
    }
    return $receiver;
  }
  function appendCommentToBlog(blogId, comment) {
    var tmp$;
    var $receiver = asList(window.parent.document.getElementsByTagName('tr'));
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        var tmp$_1, tmp$_2, tmp$_3, tmp$_4;
        if ((tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = firstOrNull(asList(element.getElementsByTagName('td')))) != null ? tmp$_1.textContent : null) != null ? toIntOrNull(tmp$_2) : null) != null ? Kotlin.equals(tmp$_3, blogId) : null) != null ? tmp$_4 : false) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return (tmp$ = firstOrNull$result) != null ? tmp$.insertAdjacentHTML('afterend', comment) : null;
  }
  function allRows() {
    return drop(asList(document.getElementsByTagName('tr')), 1);
  }
  function rowById(id) {
    var $receiver = allRows();
    var first$result;
    first$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
        var tmp$_5;
        if ((tmp$_1 = (tmp$_0 = element.firstChild) != null ? tmp$_0.textContent : null) != null) {
          console.log('blog_id: ', tmp$_1);
          tmp$_5 = tmp$_1;
        }
         else
          tmp$_5 = null;
        if ((tmp$_4 = (tmp$_3 = (tmp$_2 = tmp$_5) != null ? toInt(tmp$_2) : null) != null ? Kotlin.equals(tmp$_3, id) : null) != null ? tmp$_4 : false) {
          first$result = element;
          break first$break;
        }
      }
      throw new Kotlin.kotlin.NoSuchElementException('Collection contains no element matching the predicate.');
    }
     while (false);
    return first$result;
  }
  function getDataFromRow(tr) {
    var $receiver = tr.children;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    return json([to('blog_id', (tmp$ = $receiver[0]) != null ? tmp$.textContent : null), to('date', (tmp$_0 = $receiver[1]) != null ? tmp$_0.textContent : null), to('messageTitle', (tmp$_1 = $receiver[2]) != null ? tmp$_1.textContent : null), to('imagePath', (tmp$_3 = (tmp$_2 = $receiver[3]) != null ? tmp$_2.querySelector('img') : null) != null ? tmp$_3.getAttribute('src') : null), to('review', (tmp$_4 = $receiver[4]) != null ? tmp$_4.textContent : null)]);
  }
  function set_value($receiver, value) {
    $receiver.setAttribute('value', value != null ? value : 'null');
  }
  function get_document($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_1 = (tmp$_0 = $receiver.contentDocument) != null ? tmp$_0 : (tmp$ = $receiver.contentWindow) != null ? tmp$.document : null;
    if (tmp$_1 == null) {
      throw new UnsupportedOperationException("can't get document of the iframe");
    }
    return tmp$_1;
  }
  function BlogRecord(id, date, title, imagePath, review, file) {
    if (date === void 0)
      date = null;
    if (imagePath === void 0)
      imagePath = null;
    if (file === void 0)
      file = null;
    this.id = id;
    this.date = date;
    this.title = title;
    this.imagePath = imagePath;
    this.review = review;
    this.file = file;
  }
  BlogRecord.$metadata$ = {kind: Kotlin.Kind.CLASS, simpleName: 'BlogRecord', interfaces: []};
  BlogRecord.prototype.component1 = function () {
    return this.id;
  };
  BlogRecord.prototype.component2 = function () {
    return this.date;
  };
  BlogRecord.prototype.component3 = function () {
    return this.title;
  };
  BlogRecord.prototype.component4 = function () {
    return this.imagePath;
  };
  BlogRecord.prototype.component5 = function () {
    return this.review;
  };
  BlogRecord.prototype.component6 = function () {
    return this.file;
  };
  BlogRecord.prototype.copy_kf36l0$ = function (id, date, title, imagePath, review, file) {
    return new BlogRecord(id === void 0 ? this.id : id, date === void 0 ? this.date : date, title === void 0 ? this.title : title, imagePath === void 0 ? this.imagePath : imagePath, review === void 0 ? this.review : review, file === void 0 ? this.file : file);
  };
  BlogRecord.prototype.toString = function () {
    return 'BlogRecord(id=' + Kotlin.toString(this.id) + (', date=' + Kotlin.toString(this.date)) + (', title=' + Kotlin.toString(this.title)) + (', imagePath=' + Kotlin.toString(this.imagePath)) + (', review=' + Kotlin.toString(this.review)) + (', file=' + Kotlin.toString(this.file)) + ')';
  };
  BlogRecord.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.date) | 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    result = result * 31 + Kotlin.hashCode(this.imagePath) | 0;
    result = result * 31 + Kotlin.hashCode(this.review) | 0;
    result = result * 31 + Kotlin.hashCode(this.file) | 0;
    return result;
  };
  BlogRecord.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.date, other.date) && Kotlin.equals(this.title, other.title) && Kotlin.equals(this.imagePath, other.imagePath) && Kotlin.equals(this.review, other.review) && Kotlin.equals(this.file, other.file)))));
  };
  function toFormData($receiver) {
    var $receiver_0 = new FormData();
    $receiver_0.append('id', Kotlin.toString($receiver.id));
    $receiver_0.append('title', Kotlin.toString($receiver.title));
    $receiver_0.append('imagePath', Kotlin.toString($receiver.imagePath));
    $receiver_0.append('review', Kotlin.toString($receiver.review));
    $receiver_0.append('image', $receiver.file);
    return $receiver_0;
  }
  function toBlogRecord($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9;
    return new BlogRecord((tmp$_1 = (tmp$_0 = (tmp$ = $receiver.getElementsByTagName('Id')[0]) != null ? tmp$.firstChild : null) != null ? tmp$_0.nodeValue : null) != null ? toInt(tmp$_1) : null, (tmp$_3 = (tmp$_2 = $receiver.getElementsByTagName('Date')[0]) != null ? tmp$_2.firstChild : null) != null ? tmp$_3.nodeValue : null, (tmp$_5 = (tmp$_4 = $receiver.getElementsByTagName('MessageTitle')[0]) != null ? tmp$_4.firstChild : null) != null ? tmp$_5.nodeValue : null, (tmp$_7 = (tmp$_6 = $receiver.getElementsByTagName('ImagePath')[0]) != null ? tmp$_6.firstChild : null) != null ? tmp$_7.nodeValue : null, (tmp$_9 = (tmp$_8 = $receiver.getElementsByTagName('Message')[0]) != null ? tmp$_8.firstChild : null) != null ? tmp$_9.nodeValue : null);
  }
  function updateRow($receiver, tr) {
    var $receiver_0 = tr.children;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var tmp$_5;
    (tmp$_0 = $receiver_0[0]) != null ? (tmp$_0.textContent = (tmp$ = $receiver.id) != null ? tmp$.toString() : null) : null;
    (tmp$_1 = $receiver_0[1]) != null ? (tmp$_1.textContent = $receiver.date) : null;
    (tmp$_2 = $receiver_0[2]) != null ? (tmp$_2.textContent = $receiver.title) : null;
    var tmp$_6;
    if ((tmp$_4 = (tmp$_3 = $receiver_0[3]) != null ? tmp$_3.querySelector('img') : null) != null) {
      var tmp$_7;
      tmp$_4.setAttribute('src', (tmp$_7 = $receiver.imagePath) != null ? tmp$_7 : 'null');
      tmp$_6 = tmp$_4;
    }
     else
      tmp$_6 = null;
    if (tmp$_6 == null) {
      $receiver_0[3];
    }
    (tmp$_5 = $receiver_0[4]) != null ? (tmp$_5.textContent = $receiver.review) : null;
    return $receiver_0;
  }
  function fromForm($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    tmp$_0 = ((tmp$ = $receiver.getElementById('blog_id')) != null ? tmp$ : null).value;
    tmp$_2 = ((tmp$_1 = $receiver.getElementById('messageTitle')) != null ? tmp$_1 : null).value;
    var tmp$_9;
    if ((tmp$_3 = $receiver.getElementById('imagePath')) != null) {
      var tmp$_10;
      tmp$_9 = Kotlin.isType(tmp$_10 = tmp$_3, HTMLInputElement) ? tmp$_10 : null;
    }
     else
      tmp$_9 = null;
    var tmp$_11;
    if ((tmp$_6 = (tmp$_5 = (tmp$_4 = tmp$_9) != null ? tmp$_4.files : null) != null ? tmp$_5[0] : null) != null) {
      console.log(tmp$_6);
      tmp$_11 = tmp$_6;
    }
     else
      tmp$_11 = null;
    tmp$_7 = tmp$_11;
    return new BlogRecord(tmp$_0, void 0, tmp$_2, void 0, ((tmp$_8 = $receiver.getElementById('review')) != null ? tmp$_8 : null).value, tmp$_7);
  }
  _.send_xml = sendXML;
  _.changeRecordButton_qk3xy8$ = changeRecordButton;
  _.commentButton_za3lpa$ = commentButton;
  _.main_kand9s$ = main;
  _.toBoolean_5cw0du$ = toBoolean;
  _.check_login = checkLogin;
  _.hideIframe = hideIframe;
  _.change_record_buttons = changeRecordButtons;
  _.add_button_for_each_row = addButtonForEachRow;
  _.append_comment_to_blog = appendCommentToBlog;
  _.allRows = allRows;
  _.rowById_za3lpa$ = rowById;
  _.getDataFromRow_2rdptt$ = getDataFromRow;
  _.set_value_ccelyn$ = set_value;
  _.get_document_k381sx$ = get_document;
  _.BlogRecord = BlogRecord;
  _.toFormData_bx5hb0$ = toFormData;
  _.toBlogRecord_4wc2mh$ = toBlogRecord;
  _.updateRow_gu7dy5$ = updateRow;
  _.fromForm_4wc2mh$ = fromForm;
  main([]);
  return _;
}(typeof frontend_main === 'undefined' ? {} : frontend_main, kotlin, this['kotlinx-html-js']);
