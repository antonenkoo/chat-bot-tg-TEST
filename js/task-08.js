document.forms.publish.onsubmit = function() {
  let message = this.message.value;
  const token = '1963725285:AAGkr_0BXtcu48NbkwB2v0Duh6neuSWM38w';
  let chat_id = "695680789";
  let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=`;
  let xhttp = new XMLHttpRequest();
  if (message == 'test') {
        xhttp.open("GET", url + "вы ввели проверочное слово", true);
        xhttp.send();
    
      } else {
        xhttp.open("GET", url + message, true);
        xhttp.send();
  
      }
  return false;
};

let zhttp = new XMLHttpRequest();
url = `https://api.telegram.org/bot${token}/getUpdates`
zhttp.open('GET', url, false)
zhttp.send();




// {"update_id":381278855,
// "message":{
//   "message_id":118,
//   "from":{
//       "id":695680789,
//       "is_bot":false,
//       "first_name":"moraks",
//       "username":"morakss",
//       "language_code":"ru"
//   },
//   "chat":{
//       "id":695680789,
//       "first_name":"moraks",
//       "username":"morakss",
//       "type":"private"
//   },
//     "date":1630314954,
//     "text":"asd"
//   }
// }



// https://api.telegram.org/bot1963725285:AAGkr_0BXtcu48NbkwB2v0Duh6neuSWM38w/getUpdates



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


