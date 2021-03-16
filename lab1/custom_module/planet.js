class Planet {

    constructor (name) {
    
        this.name = name;
        this.station_list = new Array();
    
        if (typeof name === 'undefined') {

             this.name = "Невідома планета"; 

            }
    
    }
    
}

// Список усіх планет
let global_planet_list = new Array();

// Знайти планету 
function FindPlanete (name) {

    for (let id = 0; id < global_planet_list.length; id++) {

        let planet = global_planet_list[id];

        if (name === planet.name ) { 

            return planet; 

        }

    }
    return -1;

}

// Додавання нової планети
function AddPlanete (name) {

    let planet= new Planet(name);
    global_planet_list.push(planet);

    return planet;

}

// Видалення планети
function DeletePlanet (name) {

    let planet = FindPlanete(name);

    if (planet=== -1) {

         return -1; 

        }
        

    let id = global_planet_list.indexOf(planet);
    global_planet_list.splice(id, 1);

    return 1;

}

// Редагувати планету
function EditPlanet (name, new_name) {

    let planet= FindPlanete(name);

    if (planet === -1) {

         return -1; 

        }

    let id = global_planet_list.indexOf(planet);
    
    global_planet_list[id].name = new_name;

    return 1;
}

//список планет
function GetPlanetList() {

    console.log("Список планет");

    for (let id = 0; id < global_planet_list.length; id++) {

        let plan = global_planet_list[id];
        console.log("Назва:", plan.name);

    }

    console.log();
    
    return global_planet_list;

}

exports.FindPlanete   = FindPlanete;
exports.AddPlanete    = AddPlanete;
exports.DeletePlanet  = DeletePlanet;
exports.EditPlanet    = EditPlanet;
exports.GetPlanetList = GetPlanetList;
exports.global_planet_list = global_planet_list;