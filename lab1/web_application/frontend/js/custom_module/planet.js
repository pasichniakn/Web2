// Необхідні змінні
let last_planet_id = 0;
let planet_list = new Array();

// Клас - лікарня
class Planet {

    constructor (name,  id) {
    
        this.id = id;
        this.name = name;
        
        if (id === "" ||
            typeof id      === 'undefined') { this.id      = ++last_planet_id; }
        if (name === "" ||
            typeof name    === 'undefined') { this.name    = "Невідома планета"; }
        
   
    }
}

// ...............................................................................................

// Додавання нової лікарні
function add_planet (name,  id) {

    let planet = new Planet(name,  id);
    Planet_list.push(planet);

    return planet;

}

// Видалення лікарні з колекції
function remove_planet (id) {

    for (let z = 0; z < planet_list.length; z++) {

        let planet = planet_list[z];
        if (planet.id === id) { planet_list.splice(z, 1);
                                  return 1; }

    }

    return -1;

}

// ...............................................................................................

// Повертаємо список усіх лікарень
function get_planet_list()
    { return planet_list; }

// Задаємо список усіх лікарень
function set_planet_list (data) {

    if (!data || data.length < 1) { return; }

    for (let element of data) {
        add_planet(element.name,
                     element.id);
    }
}

// Повертає лікарню по її id
function get_planet_by_id (id) {

    for (let z = 0; z <planet_list.length; z++) {

        let planet = planet_list[z];
        if (planet.id === id) { return planet; }

    }

    return -1;

}

// ...............................................................................................

// Редагувати лікарню в колекції
function edit_planet (id, new_name) {

    for (let z = 0; z < planet_list.length; z++) {

        let planet = planet_list[z];

        if (planet.id === id) { planet.name = new_name;
                                  return 1; }

    }

    return -1;

}

// ...............................................................................................

// Знайти лікарню в колекції
function find_planet (search) {

    let result = [];
    search = search.toLowerCase();

    for (let planet of planet_list) {

        let attributes = [ planet.name];

        for (let attr of attributes) {

            if (attr.toLowerCase().includes(search)) { result.push(planet);
                                                       break;
            }
        }
    }

    return result;

}

// ...............................................................................................

// Вивести в консоль список лікарень
function print_planet_list() {

    console.log("\n" + "Список усіх планет:");

    for (let z = 0; z < planet_list.length; z++) {

        let planet = planet_list[z];
        console.log("\t" + "Назва: "  + planet.name);
        console.log("\t" + "ID: "             + planet.id);

    }
}