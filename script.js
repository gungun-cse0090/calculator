let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let str = "";

buttons.forEach(btn => {
    btn.onclick = function () {

        let val = btn.innerText;

        if (val == "C") {
            str = "";
            display.value = "";
        }

        else if (val == "DEL") {
            str = str.slice(0, -1);
            display.value = str;
        }

        else if (val == "=") {
            str = eval(str);
            display.value = str;
        }

        else {
            str = str + val;
            display.value = str;
        }
    };
});