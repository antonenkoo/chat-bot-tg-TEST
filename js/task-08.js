document.forms.publish.onsubmit = function() {
  let message = this.message.value;
  const token = '1963725285:AAGkr_0BXtcu48NbkwB2v0Duh6neuSWM38w';
  let chat_id = "695680789";
  let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=`;
  let xhttp = new XMLHttpRequest();
  if (message == '/next') {
    xhttp.open("GET", url + 'марк красавчик', true);
    xhttp.send();
  
  }
  
  return false;
};


// document.forms.publish.onsubmit = function eventForm(value) {
//   if (value == 'test') {
//     xhttp.open("GET", url + "вы ввели правельное слово", true);
//     xhttp.send();

//   }
// }




// const input = document.querySelector('#input');
// const btnAdd = document.querySelector('button');

// input.addEventListener('blur', onGetValue);
// btnAdd.addEventListener('click', onRenderSalary);

// function onGetValue(event) {
//     value.push(event.currentTarget.value.split(' '));
//     event.currentTarget.value = '';
// }



// btnAdd.addEventListener('click', function(){
//     let messaage = document.querySelector('#input').value;
//     const token = '1963725285:AAGkr_0BXtcu48NbkwB2v0Duh6neuSWM38w';
//     // let chat_id = "695680789";
//     let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=695680789&text=`;
//     let xhttp = new XMLHttpRequest();
//     xhttp.open("GET", url + message, true);
//     xhttp.send();

// })


