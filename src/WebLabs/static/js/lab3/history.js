window.addEventListener('load', function () {
    setUpTables();
});

function setUpTables() {
    document.getElementById('tableDestination').appendChild(
        wrapTable('История за все время', generateTableForLocalStorage()));

    document.getElementById('tableDestination').appendChild(
        wrapTable('История текущего сеанса', generateTableForCookie()));
}


function wrapTable(title, table) {
    var div = document.createElement('div');
    var h4 = document.createElement('h4');

    div.className = 'table-responsive';
    h4.textContent = title;

    div.appendChild(h4);
    div.appendChild(table);
    return div;
}

function generateTableForCookie() {
    if (document.cookie == '') {
        alert('ваш браузер съел все печеньки :(');
    }

    var table = document.createElement('table');
    table.className = 'table table-bordered table-condensed';

    table.appendChild(generateHeadRow());
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var entry = ca[i].split('=');
        var key = entry[0];
        var value = entry[1];

        var row = document.createElement('tr');
        var data = document.createElement('td');

        // data.textContent = key.match(/\w+\.html.*/);
        // console.log(key);
        data.textContent = key.match(/http:.*\w+.*/);
        if (data.textContent == '') {
            continue;
        } else {
            data.textContent = key.match(/\w*$/);
            if (data.textContent == '') continue;
        }

        row.appendChild(data);

        data = data.cloneNode(true);
        data.textContent = value;
        row.appendChild(data);

        table.appendChild(row);
    }

    return table;
}


function generateTableForLocalStorage() {
    var table = document.createElement('table');
    table.className = 'table table-bordered table-condensed';
    table.appendChild(generateHeadRow());

    for (var key in localStorage) {
        var row = document.createElement('tr');
        var data = document.createElement('td');

        // data.textContent = key.match(/\w+\.html.*/);
        // console.log(key);
        data.textContent = key.match(/http:.*\w+.*/);
        if (data.textContent == '') {
            continue;
        } else {
            data.textContent = key.match(/\w*$/);
            if (data.textContent == '') continue;
        }

        row.appendChild(data);

        data = data.cloneNode(true);
        data.textContent = localStorage.getItem(key);
        row.appendChild(data);

        table.appendChild(row);
    }

    return table;
}

function generateHeadRow() {
    var headRow = document.createElement('tr');
    const headerName = ['Название страницы', 'Количество посещений'];

    for (var i in headerName) {
        var data = document.createElement('th');
        data.textContent = headerName[i];

        headRow.appendChild(data);
    }

    return headRow;
}


function setCookie(name, value, days) {
    var expires = '',
        date = new Date();
    if (days) {
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = `${name}=${value}${expires}`;
}

function getCookie(cookieName) {
    var name = cookieName + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    return "";
}