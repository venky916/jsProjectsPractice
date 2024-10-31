const qrContainer = document.querySelector(".qr-container");
const qrTextInput = document.querySelector(".qr-text");
const generateQrCodeBtn = document.querySelector(".generate-qr-code-btn");
const errorMessageText = document.querySelector(".error-message-text");

generateQrCodeBtn.addEventListener("click", () => {
    validateInputField();
})


function validateInputField() {
    console.log(qrTextInput.value)
    if (qrTextInput.value.length > 0) {
        generateQrCode()
    } else {
        qrContainer.innerHTML = "";
        errorMessageText.textContent = "Enter text and use some url to generate QR Code"
    }
}

function generateQrCode() {
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: qrTextInput.value,
        height: 400,
        width: 400,
        colorLight: "#fff",
        colorDark: "#000"
    })

    qrTextInput.value = "";
    errorMessageText.textContent = "";
}