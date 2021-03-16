const mod = require('./custom_module');

//Додавання планети в коекцію
let pl1 = mod.AddPlanete("Меркурій");
let pl = mod.AddPlanete("Земля");
let Mars = mod.AddPlanete("Марс");
let pl4 = mod.AddPlanete("Плутон");

//let list1 = mod.global_planet_list;
mod.GetPlanetList();

//Редагування планети в колекції
console.log("Редагування планети в колекції");
mod.EditPlanet("Меркурій", "Венера");
mod.GetPlanetList();

//Видалення планети з колекції 
console.log("Видалення планети Плутон з колекції ");
mod.DeletePlanet("Плутон");
mod.GetPlanetList();

//Пошук планет
let search_Neptune = mod.FindPlanete("Нептун");
console.log(`Пошук планети Нептун: ${search_Neptune !== -1 ? "знайдено" : "не знайдено"}`);
let search_Venera = mod.FindPlanete("Венера");
console.log(`Пошук планети Венера: ${search_Venera !== -1 ? "знайдено" : "не знайдено"} \n`);

//Додавання нової станції
console.log("Додавання станцій");
let stn1 = mod.AddStation("Станція 1", Mars);
let st2 = mod.AddStation("Станція 2", Mars);
let st3 = mod.AddStation("Станція 3", Mars);
mod.GetStationList(Mars);

//Редагування станції
console.log("Редагування Станції 2");
mod.EditStation("Станція 2", Mars, "Нова станція2");
mod.GetStationList(Mars);

//Видалення станції
console.log("Видалення станції 'Станція 3' ");
mod.DeleteStation("Станція 3", Mars);
mod.GetStationList(Mars);

//Пошук станції
let search_st1= mod.FindStation("Новітня Станція", Mars );
console.log(`Пошук станції "Новітня Станція":  ${search_st1 !== -1 ? "знайдено" : "не знайдено"}`);
let search_st2= mod.FindStation("Нова станція2", Mars );
console.log(`Пошук станції "Нова станція2": ${search_st2 !== -1 ? "знайдено" : "не знайдено"} \n`);

//Додавання вантажу
console.log("Додавання вантажу");
mod.AddCargo("Вантаж 1", stn1);
mod.AddCargo("Вантаж 2", stn1);
mod.GetCargoList(stn1);

//Редагування вантажу
console.log("Редагування вантажу");
mod.EditCargo("Вантаж 2", stn1, "Важливий вантаж");
mod.GetCargoList(stn1);

//Видалення вантажу
console.log("Видалення вантажу");
mod.DeleteCargo("Вантаж 1", stn1);
mod.GetCargoList(stn1);

