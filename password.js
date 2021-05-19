let Passlength = 18;
let myPassword = "";
let symbols = document.getElementById("symbols");
let numbers = document.getElementById("numbers");
let uAlpha = document.getElementById("uAlpha");
lengthHandler = () => {
  rangeVal = document.getElementById("rangeVal"); //Div where Id show range value
  Passlength = document.getElementById("Passlength").value;
  rangeVal.innerText = Passlength;
};

generatePassword = () => {
  myPassword = "";
  let mySym = "!@#$^&*()_+=<>?/;':,.{}[]";
  let myLAlpha = "abcdefghijklmnopqrstuvwxyz";
  let myUAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let myNum = "1234567809";
  i = 0;
  while (i < Passlength) {
    if (symbols.checked && numbers.checked && uAlpha.checked) {
      myvars = myLAlpha + myUAlpha + myNum + mySym;
    } else if (symbols.checked && numbers.checked) {
      myvars = mySym + myLAlpha + myNum;
    } else if (symbols.checked) {
      myvars = mySym + myLAlpha;
    } else if (numbers.checked) {
      myvars = myLAlpha + myNum;
    } else if (uAlpha.checked) {
      myvars = myUAlpha + myLAlpha;
    } else {
      myvars = myNum + myLAlpha;
    }
    myPassword += myvars[Math.floor(Math.random() * myvars.length)];
    i++;
  }
  dispPass();
};

dispPass = () => {
  genPass = document.getElementById("genPass");
  genPass.value = myPassword;
};

copytoclipboard = () => {
  let copyText = document.getElementById("genPass");
  copyText.select();
  document.execCommand("copy");
};
