// Необхідні змінні
let last_cargo_id = 0;
let cargo_list = new Array();
let delivered_list = new Array();

// Клас - вантаж
class Cargo {

    // Конструктор класу
    constructor (name, stantion, planet, id) {
    
        this.id = id;
        this.name = name;
        this.stantion = stantion;
        this.planet = planet;
        
        if (id === "" ||
            typeof id       === 'undefined') { this.id       = ++last_cargo_id;   }
        if (name === "" ||
            typeof name     === 'undefined') { this.name     = "Невідомий вантаж"; }
        if (stantion === "" ||
            typeof stantion   === 'undefined') { this.stantion   = "Не призначено";     }
        if (planet === "" ||
            typeof planet === 'undefined') { this.planet = "Не встановлено";    }
    
    }
}

// ...............................................................................................

// Додавання нового вантажу
function add_cargo (name, stantion, planet, id) {

    let cargo = new Cargo(name, stantion, planet, id);
    cargo_list.push(cargo);

    return cargo;

}

// Додавання нового дост вантажу
function add_delivered(name, stantion, planet, id) {

    let cargo = new Cargo(name,  stantion, planet, id);
    delivered_list.push(cargo);

    return cargo;

}

// Видалити вантаж з колекції
function remove_cargo (id) {

    for (let z = 0; z < cargo_list.length; z++) {

        let cargo = cargo_list[z];
        if (cargo.id === id) { delivered_list.push(cargo);
            cargo_list.splice(z, 1);
                                 return 1; }

    }

    return -1;

}

// Видалити дост вантаж з колекції
function remove_delivered (id) {

    for (let z = 0; z < delivered_list.length; z++) {

        let cargo = delivered_list[z];
        if (cargo.id === id) { delivered_list.splice(z, 1);
                                 return 1; }

    }

    return -1;

}

// ...............................................................................................

// Повертаємо список усіх вантажів
function get_cargo_list (cured) {

    if (cured) { return delivered_list; }
    else       { return cargo_list; }

}

// Задаємо список усіх ватажів
function set_cargo_list (data, cured) {

    if (!data || data.length < 1) { return; }

    for (let element of data) {

        if (cured) {
            add_deliveredt(element.name,
                              element.stantion,
                              element.planet,
                              element.id);
        }

        else {
            add_cargo(element.name,
                        element.stantion,
                        element.planet,
                        element.id);
        }
    }
}

// Повертає пацієнта по його id
function get_cargo_by_id (id, cured) {

    let list = cured ? delivered_list : cargo_list;

    for (let z = 0; z < list.length; z++) {

        let cargo = list[z];
        if (cargo.id === id) { return cargo; }

    }

    return -1;

}

// ...............................................................................................

// Редагувати лікаря в колекції
function edit_cargo (id, new_name, new_stantion, new_planet) {

    for (let z = 0; z < cargo_list.length; z++) {

        let cargo = cargo_list[z];

        if (cargo.id === id) { 
            cargo.name = new_name;
            cargo.stantion = new_stantion;
            cargo.planet = new_planet;
                                 return 1; }

    }

    return -1;

}

// ...............................................................................................

// Знайти лікаря в колекції
function find_cargo (search, cured) {

    let result = [];
    let list = cured ? delivered_list : cargo_list;

    search = search.toLowerCase();

    for (let cargo of list) {

        let attributes = [ cargo.name,
            cargo.stantion,
            cargo.planet ];

        for (let attr of attributes) {

            if (attr.toLowerCase().includes(search)) { result.push(cargo);
                                                       break;
            }
        }
    }

    return result;

}

// ...............................................................................................

// Вивести в консоль список пацієнтів
function print_cargo_list (cured) {

    let type = cured ? "доставлених " : "";
    let list = cured ? delivered_list : cargo_list;

    console.log("\n" + "Список усіх " + type + "вантажів:");

    for (let z = 0; z < list.length; z++) {

        let item = list[z];
        console.log("\t" + "Назва: " + item.name);
        console.log("\t" + "Станція: "           + item.stantion);
        console.log("\t" + "Планета: "         + item.planet);
        console.log("\t" + "ID: "              + item.id);

    }
}