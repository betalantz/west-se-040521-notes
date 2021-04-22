class Person {
    constructor(name, age){
        this.name = name
        this._age = age
    }

    greet(){
        return `Hi! My name is ${this.name}.`
    }
}