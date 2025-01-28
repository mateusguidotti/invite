const input_1 = document.querySelector('#input-1');
const input_2 = document.querySelector('#input-2');
const input_3 = document.querySelector('#input-3');
const input_4 = document.querySelector('#input-4');
const sendButton = document.querySelector('#send-btn');

sendButton.addEventListener('click', function () {
    const values = getValue();

    if (input_1.value != '' && input_2.value != '') {
        sendMessage(values);
    } else {
        alert('Preencha os dois primeiros campos');
    }
});

const getValue = () => {
    const inputValue_1 = input_1.value;
    const inputValue_2 = input_2.value;
    const inputValue_3 = input_3.value;
    const inputValue_4 = input_4.value;

    return {
        inputValue_1,
        inputValue_2,
        inputValue_3,
        inputValue_4
    }
}

const sendMessage = (values) => {
    const message = verifyInputFields(values);

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = "5553984530184";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
}

const verifyInputFields = (obj) => {
    const date = obj.inputValue_1;
    const data = formatarDataBR(obj.inputValue_2);
    const horario = obj.inputValue_3;
    const observacao = obj.inputValue_4;
    let message = ''

    if (horario != '') {
        message = `Convite Aceito! Aqui estão as informações do nosso date:\n\n- Tipo: ${date}\n- Data: ${data}\n- Horário: ${horario}`
        if (observacao != '') {
            message = `Convite Aceito! Aqui estão as informações do nosso date:\n\n- Tipo: ${date}\n- Data: ${data}\n- Horário: ${horario}\n- Observações: ${observacao}`
        }
    } else if (observacao != '') {
        message = `Convite Aceito! Aqui estão as informações do nosso date:\n\n- Tipo: ${date}\n- Data: ${data}\n- Observações: ${observacao}`
    }

    else {
        message = `Convite Aceito! Aqui estão as informações do nosso date:\n\n- Tipo: ${date}\n- Data: ${data}`
    }
    return message
}

function formatarDataBR(dataISO) {
    if (!dataISO) return ""; 
    const partes = dataISO.split("-");
    return `${partes[2]}/${partes[1]}/${partes[0]}`;
  }