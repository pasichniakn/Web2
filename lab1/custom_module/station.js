class Station {

    constructor (name) {
    
        this.name = name;
        this.cargo_list = new Array();
    
        if (typeof name === 'undefined'){
             this.name = "Невідома станція"; 
            }
    
    }
    
}

// Додавання нової станції
function AddStation (name, planet) {

    let st = new Station(name);
    planet.station_list.push(st);

    return st;

}

// Знайти станцію планети
function FindStation (name, planet) {

    for (let st of planet.station_list) {

        if (name === st.name) {

             return st; 

            }

    }

    return -1;

}

// Видалити станцію 
function DeleteStation (name, planet) {

    let st = FindStation (name, planet);

    if (st===-1 ) {

        return -1;

    }

    let id=planet.station_list.indexOf(st);
    planet.station_list.splice(id,1);

    return 1;

}

// Редагувати станцію 
function EditStation (name, planet, new_name) {

    for (let id = 0; id <  planet.station_list.length; id++) {

        let station =  planet.station_list[id];

        if (station.name === name ) {

            planet.station_list[id].name = new_name;
            return 1; 

        }

    }

    return -1;

}

// Отримати список станцій планети
function GetStationList(planet) {

    console.log("Список усіх станцій планети:", planet.name);

    for (let id = 0; id < planet.station_list.length; id++) {

        let space_station =planet.station_list[id];
        console.log("Назва станції:", space_station.name);

    }

    console.log();
    
    return planet.station_list;

}

exports.AddStation     = AddStation;
exports.FindStation    = FindStation;
exports.DeleteStation  = DeleteStation;
exports.EditStation    = EditStation;
exports.GetStationList = GetStationList;