var numbers = ["1", "2", "2a", "2b", "2bc", "3", "3a", "4"];
var prices = [1000, 1500, 800, 1111, 2222, 123, 432, 1235];

function generateInputForms() {
    var mainDiv = document.getElementById("manyForms");
    var numbersSize = document.getElementById("numbers").value;

    mainDiv.innerHTML = "";
    var instance = generateOneInstance();

    for (var i = 0; i < numbersSize; i++) {
        mainDiv.appendChild(instance.cloneNode(true));
    }
}

function setTotalSum() {
    document.getElementById("totalSum").value = calculateTotalSum();
}

function calculateTotalSum() {
    var mainDiv = document.getElementById("manyForms");

    var numbersSize = document.getElementById("numbers").value;
    var dayNumber = document.getElementById("dayNumbers").value;
    var sum = 0;

    var children = document.getElementsByTagName("select");

    for (var i = 0; i < mainDiv.children.length; i++) {

        // alert(i + " " + mainDiv.children.length + " " + mainDiv.children[i].value + " " + numbers.indexOf(mainDiv.children[i].value));
        sum += prices[numbers.indexOf(mainDiv.children[i].value)];
        console.log(mainDiv.children[i]);
        if (numbers.indexOf(mainDiv.children[i].value) != -1) {
        } else {
        }
        // sum += prices[numbers.indexOf(children.value)];
        // if (mainDiv.children[i].class == "form-control") {
        //
        // }
    }

    sum *= dayNumber;
    return sum;
}

function generateOneInstance() {
    var instanceExample = document.createElement("div");
    instanceExample.class = "form-group";

    var selectInstance = document.createElement("select");
    selectInstance.class = "form-control";

    var optionInstance = document.createElement("option");

    for (var i = 0; i < numbers.length; i++) {
        optionInstance.innerHTML = numbers[i];
        optionInstance.value = numbers[i];

        selectInstance.appendChild(optionInstance.cloneNode(true));
    }

    instanceExample.appendChild(selectInstance);

    return instanceExample;

    // return selectInstance;
}
