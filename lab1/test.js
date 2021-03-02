function User(name, lastname){
    this.name=name;
    this.lastname= lastname;
}

let user1= new User('Pavlo', 'Ivanenko');
console.log(user1.lastname);