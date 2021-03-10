function MostOftenRepetition(arr){
    let duplicates = new Array();//список повторів
    let sp= [];//к-ть повторів

    for (let i = 0; i < arr.length; i++) {

        // Отримуємо значення для порівняння
        let value = arr[i];
        
            
        if (duplicates.indexOf(value)!=-1){
            sp[duplicates.indexOf(value)]++;
        }
        else{
            duplicates.push(value);
            sp.push(1);
        }
         
            
    }
    max_index=duplicates[sp.indexOf(Math.max(...sp))];
    return  max_index;

}

arr1=[1,1,1,2];
arr2=['a','a','c','b','e','d','c','c']
a=MostOftenRepetition(arr1);
console.log("Елемент із найбільшою частотою повторень з ", arr1, "це:", a);
a=MostOftenRepetition(arr2);
console.log("Елемент із найбільшою частотою повторень з ", arr2, "це:", a);