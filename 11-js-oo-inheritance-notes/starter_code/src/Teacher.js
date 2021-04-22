class Teacher extends Person {

    constructor(name, age, subject, school){
        super(name, age)
        this.subject = subject
        this.school = school
    }

    lecture(){
        return `${this.name} is explaining a concept.`
    }
}