function GetRandom(){
    arr=['1','2','3','4','5','6','7','8','9','A','B','C','D','F'];
    roz=''
    n=Math.ceil(Math.random() * 10);// визначаємо к-сть "цифр" в числі
    for (let i = 0; i < n; i++){
        a= Math.floor(Math.random() * arr.length);//вибираємо порядковий номер елемента з масиву arr
        roz+=arr[a];
    }
    return roz
}

let number1= GetRandom();
console.log("Випадкове шістнадцяткове число: ", number1);
let number2= GetRandom();
console.log("Випадкове шістнадцяткове число: ", number2);
let number3= GetRandom();
console.log("Випадкове шістнадцяткове число: ", number3);