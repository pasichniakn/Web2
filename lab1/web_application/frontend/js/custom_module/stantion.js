// Необхідні змінні
let last_stantion_id = 0;
let stantion_list = new Array();

// Клас - лікар
class Stantion {

    constructor (name, planet, id) {
    
        this.id = id;
        this.name = name;
        this.planet = planet;
        
        if (id === "" ||
            typeof id       === 'undefined') { this.id       = ++last_stantion_id;  }
        if (name === "" ||
            typeof name     === 'undefined') { this.name     = "Невідома станція"; }
        if (planet === "" ||
            typeof planet === 'undefined') { this.planet = "Не встановлено";  }
    
    }
}

// ...............................................................................................

// Додавання нового лікаря
function add_stantion (name,  planet, id) {

    let stantion = new Stantion(name,  planet, id);
    stantion_list.push(stantion);

    return stantion;

}

// Видалити лікаря з колекції
function remove_stantion (id) {

    for (let z = 0; z < stantion_list.length; z++) {

        let stantion = stantion_list[z];
        if (stantion.id === id) { stantion_list.splice(z, 1);
                                return 1; }

    }

    return -1;

}

// ...............................................................................................

// Повертаємо список усіх лікарів
function get_stantion_list()
    { return stantion_list; }

// Задаємо список усіх лікарів
function set_stantion_list (data) {

    if (!data || data.length < 1) { return; }

    for (let element of data) {
        add_stantion(element.name,
                   element.planet,
                   element.id);
    }
}

// Повертає лікаря по його id
function get_stantion_by_id (id) {

    for (let z = 0; z <stantion_list.length; z++) {

        let stantion = stantion_list[z];
        if (stantion.id === id) { return stantion; }

    }

    return -1;

}

// ...............................................................................................

// Редагувати лікаря в колекції
function edit_stantion (id, new_name, new_planet) {

    for (let z = 0; z < stantion_list.length; z++) {

        let stantion = stantion_list[z];

        if (stantion.id === id) { 
            stantion.name = new_name;
            stantion.planet = new_planet;
                                return 1; }

    }

    return -1;

}

// ...............................................................................................

// Знайти лікаря в колекції
function find_stantion (search) {

    let result = [];
    search = search.toLowerCase();

    for (let stantion of stantion_list) {

        let attributes = [ stantion.name,
            stantion.planet ];

        for (let attr of attributes) {

            if (attr.toLowerCase().includes(search)) { result.push(stantion);
                                                       break;
            }
        }
    }

    return result;

}

// ...............................................................................................

// Вивести в консоль список лікарів
function print_stantion_list() {

    console.log("\n" + "Список усіх станцій:");

    for (let z = 0; z < stantion_list.length; z++) {

        let stantion = stantion_list[z];
        console.log("\t" + "Назва: " + stantion.name);
        console.log("\t" + "Планета: "       + stantion.planet);
        console.log("\t" + "ID: "            + stantion.id);

    }
}