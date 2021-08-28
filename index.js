

// https://api.telegram.org/bot1963725285:AAGkr_0BXtcu48NbkwB2v0Duh6neuSWM38w/sendMessage?chat_id=695680789&text=hahahhaha

// https://api.telegram.org/bot1963725285:AAGkr_0BXtcu48NbkwB2v0Duh6neuSWM38w/getUpdates

document.querySelector('button').onclick = function() {
    let messaage = document.querySelector('.message').value;
    let token = '1963725285:AAGkr_0BXtcu48NbkwB2v0Duh6neuSWM38w';
    let chat_id = "695680789";
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=`;
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", url + message, true);
    xhttp.send();

}