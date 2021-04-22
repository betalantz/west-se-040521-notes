class Student extends Person {
    constructor(name, age, gradeLvl, school, gpa){
        super(name, age)
        this.gradeLvl = gradeLvl
        this.school = school
        this.gpa = gpa
    }

    study(){
        this.gpa += .5
        return `Your gpa is now ${this.gpa}`
    }

}