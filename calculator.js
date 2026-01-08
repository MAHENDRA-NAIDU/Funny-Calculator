const input_bar = document.getElementById("input_bar");

function addToDisplay(value) {
    input_bar.value += value;
}

function calculate() {
    input_bar.value = "Idk bro, leave me alone :(";
}

function clearDisplay() {
    input_bar.value = "";
}

function backSpace() {
    input_bar.value = input_bar.value.slice(0, -1);
}
