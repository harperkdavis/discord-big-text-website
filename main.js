
let convertedText = "!";

function getInputValue() {
    let inputVal = document.getElementById("convert").value.toLowerCase();
    let finalString = "";

    for (let i = 0; i < inputVal.length; i++) {
        let character = inputVal.charAt(i);
        if (character != " ") {
            finalString = finalString + ":regional_indicator_" + character + ": ";
        } else {
            finalString = finalString + "   ";
        }
    }

    convertedText = finalString;
    document.getElementById("convertedText").innerHTML = finalString;
}

function copy() {
    copyToClipboard(convertedText);
}

const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};