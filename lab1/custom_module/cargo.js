class Cargo {

    constructor (name) {
    
        this.name = name;
    
        if (typeof name === 'undefined'){

             this.name = "Невідомий вантаж"; 

            }
    
    }
    
}

// Додавання нового вантажу
function AddCargo (name, station) {

    let cargo = new Cargo(name);
    station.cargo_list.push(cargo);

    return cargo;

}

// Знайти вантаж на станції
function FindCargo (name, station) {

    for (let crg of station.cargo_list) {

        if (name === crg.name ){ 
            return crg; 
        }

    }

    return -1;

}

// Видалення вантажу
function DeleteCargo (name, station) {

    let cargo = FindCargo(name, station);

    if (cargo === -1){
         return -1;
        }

    let id = station.cargo_list.indexOf(cargo);
    station.cargo_list.splice(id, 1);

    return 1;

}

// Редагувати вантаж на станції
function EditCargo (name, station, new_name) {

    let crg = FindCargo(name, station);

    if (crg === -1){

        return -1;

    }

    let id = station.cargo_list.indexOf(crg);
    
    station.cargo_list[id].name = new_name;
 

    return 1;

}

// Отримати список вантажу на станції
function GetCargoList (station) {

    console.log(`Список вантажу на станції ${station.name}:`);

    for (let id = 0; id <station.cargo_list.length; id++) {

        let cargo = station.cargo_list[id];
        console.log(`Назва вантажу: ${cargo.name}`);

    }

    console.log();
    
    return station.cargo_list;

}

exports.FindCargo    = FindCargo;
exports.AddCargo     = AddCargo;
exports.DeleteCargo  = DeleteCargo;
exports.EditCargo    = EditCargo;
exports.GetCargoList = GetCargoList;