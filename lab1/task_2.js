function StringInsert(str1, str2){
    n=Math.floor(Math.random() * str1.length);
    console.log("Місце в стрічці, куди поміщаємо =", n);
    return str1=str1.slice(0,n)+str2+str1.slice(n,str1.length);
}

st1='Перша стрічка';
st2='1234';
st3='abc'
 let s1= StringInsert(st1, st2);
 console.log("Вставляємо стрічку '", st2, "' у відповідну позицію стрічки '", st1,"' :", s1);
 let s2= StringInsert(st1, st3);
 console.log("Вставляємо стрічку '", st3, "' у відповідну позицію стрічки '", st1,"' :", s2);