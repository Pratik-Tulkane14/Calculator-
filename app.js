let screen = document.getElementById("outputscreen");
let buttonTxt = document.querySelectorAll("button");
let screenValue = "";
for (item of buttonTxt) {
    item.addEventListener("click", (e) => {
        buttonTxt = e.target.innerText;
        // console.log("Button Text is ", buttonTxt);
        if (buttonTxt == "X") {
            buttonTxt = "*";
            screenValue += buttonTxt;
            screen.value = screenValue;
        } else if (buttonTxt == "CL") {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonTxt == "=" || buttonTxt == "ANS") {
            screen.value = eval(screenValue);
        } else if (buttonTxt == "DEL") {
            screenValue = screenValue.slice(0, -1);
            screen.value = screenValue;
        } else {
            screenValue += buttonTxt;
            screen.value = screenValue;
        }
        // console.log(screenValue);
    });
}