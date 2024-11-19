const body = document.body;
const button = document.getElementById("ModoNoturnoBtn");

function ModoNoturno() {
    if (body.classList.contains("modo-noturno")) {
        body.classList.remove("modo-noturno");
        button.innerText = "🌑";
    } else {
        body.classList.add("modo-noturno");
        button.innerText = "☀️";
    }
}

function validateForm(event) {
    event.preventDefault();

    const name = document.getElementById("nameTxt").value.trim();
    const email = document.getElementById("emailTxt").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const notRobot = document.getElementById("notRobotTxt").checked;

    if (name === "") {
        alert("Por favor, digite seu nome antes de enviar.");
    } else if (email === "") {
        alert("Por favor, digite seu email antes de enviar.");
    } else if (!email.includes("@") || !email.includes(".")) {
        alert("Por favor, digite um email válido.");
    } else if (!gender) {
        alert("Por favor, selecione seu gênero.");
    } else if (!notRobot) {
        alert("Por favor, confirme que você não é um robô.");
    } else {
        alert(`Mensagem enviada com sucesso!!! Obrigado, ${name}.`);

        document.getElementById("myForm").reset();
    }
}