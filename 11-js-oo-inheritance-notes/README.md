# Object-Orientation: Inheritance 

## Objectives

- [ ] Define a class which inherits from another class using the `extends` keyword
- [ ] Use the `super` keyword to extend class
- [ ] Understand how inheritance can be used to reuse code, and provide new ways to use existing code.

## Outline

```txt
5 min - Activation - Person/Teacher/Student behavior outline. What behavior is shared? Specific to the object?
15 min - Demonstration - Inheritance using extends
15 min - Check for understanding - extends with empty constuctor
5 min - Activation - How does actually extend child class functionality?
10 min - Demonstration - Inheritance using super
10 min - Check for understanding - using super to add further propities and functionality to a child class
---
60 min
```

## Person | Teacher | Student: Similarities and Differences

Class discussion on these objects, focusing on behavior and properties that can be shared across all, some, or none.

```js
const person = {
    name: string,
    age: number,
    greet: fn
}
const teacher = {
    subject: string,
    school: string,
    lecture: fn
}
const student = {
    gradeLvl: number,
    school: string,
    gpa: number,
    study: fn
}
```

## Inheritance using extends

Demonstration

```js
class Person {
    constructor(name, age){
        this.name = name
        this._age = age
    }

    greet(){
        return `Hi! My name is ${this.name}.`
    }
}

class Student extends Person {
   
    study(){
        return `${this.name} is hitting the books!`
    }
}
```

## Check for understanding

How does a class extend another class? Build a child class (Teacher) with no constructor and one instance menthod

```js
class Teacher extends Person {

    lecture(){
        return `${this.name} is explaining a concept.`
    }
}
```

## Discussion: How will we add more behavior and different properties to our child class?

## Using the Super keyword

Demo using super to add additional properties to an object of child class - inside constructor
<!-- Use super obj outside constructor to add additional functionality to another instance method [required explanation and use of setters/getters] -->

```js
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
```

## Check for understanding

Ask students to add unique properties to Teacher using super in its constructor

```js
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
```

Time permitting, do some Class driven development. Create a new parent/child relationship?
