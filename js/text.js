const textContainer = document.getElementById("helloisalih");
const text = "Merhaba, Ben Salih!";
let index = 0;

function addLetter() {
    textContainer.textContent += text[index];
    index++;
    if (index < text.length) {
        setTimeout(addLetter, 150);
    }
}

addLetter();
