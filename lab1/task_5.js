function NumberDaysFromBeginningYear (year) {
    let now = new Date();
    if (typeof year === 'undefined') {
         year = now.getFullYear(); // задаємо теперерішній рік, якщо його не задано
        }

    let date_old = new Date(year, 0, 1, 0, 0, 0, 0); //задаємо початок року

    let milliseconds_passed = now.getTime() - date_old.getTime();

    let result = milliseconds_passed / 1000 / 60 / 60 / 24;// Переводимо мілісекунди в дні

    return Math.floor(result);

}

console.log(`Від початку 2012 року минуло ${NumberDaysFromBeginningYear(2012)} днів`);
console.log(`Від початку 2000 року минуло ${NumberDaysFromBeginningYear(2000)} днів`);
console.log(`Від початку цього року минуло ${NumberDaysFromBeginningYear()} днів`);