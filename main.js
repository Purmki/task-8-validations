var counter=30
var myInterval;
function downTimer(){
  myOtherDiv.innerHTML=`<h1>${--counter}</h1>`
  if(counter==0){    
  clearInterval(myInterval)
  myInterval = undefined;
  validationAttempts=1
  }
}
var validationAttempts = 1;
function validation(){
  if (myInterval) 
    return false;
  if(validationAttempts==4){
    myInterval = setInterval(downTimer,1000);
    downTimer()
    myBtn.disabled=true
    return false;
}
  validationAttempts++
    var isLastNameLength = workerLast_name.value.length < 20;
var isNameUpperCase = (worker_name.value[0] == worker_name.value[0].toUpperCase());
var isOver18;
var isBellow65
isOver18 = new Date().getFullYear()-+user_age.value.substr(0, 4) >= 18
isBellow65= new Date().getFullYear()-+user_age.value.substr(0, 4) <=65
var isPhonStartWith = user_phone.value[0] == 0;
var isEmailValid = user_email.value.lastIndexOf(".com") == user_email.value.length-4;
  if (isNameUpperCase && isPhonStartWith && isOver18 && isBellow65 && isEmailValid && isLastNameLength) {
    return true;
  } else {
    if (!isLastNameLength) {
      workerLast_name.style.border = `1px solid red`;
    }
    if (!isNameUpperCase) {
      worker_name.style.border = `1px solid red`;
    }
    if (!isOver18||!isBellow65) {
      user_age.style.border = `1px solid red`;
    }
    if (!isEmailValid) {
      user_email.style.border = `1px solid red`;
    }
    if (!isPhonStartWith) user_phone.style.border = `1px solid red`;

    return false;
  }
  
}
function rightNow() {
  var myDate = new Date();
  myDiv.innerHTML = `<h1>${myDate.getHours()}</h1>`;
  myDiv.innerHTML += `<h1>${myDate.getMinutes()}</h1>`;
  myDiv.innerHTML += `<h1>${myDate.getSeconds()}</h1>`;
  var timeElements = ["Hours", "Minutes", "Seconds"];
  for (var i = 0; i < timeElements.length; i++) {
    myDiv.innerHTML += `<h1>${myDate[timeElements[i]]()}</h1>`;
  }
}
  setInterval(rightNow, 1000);


