# Intro to OOJS

## Objectives
  By the end of this lesson, SWBAT:
- [ ] create a Class in JavaScript using ES6 syntax
- [ ] instantiate a new instance of a Cat class
- [ ] write and execute an instance method 

## Outline (Suggested Time: 60 Minutes)

```txt
  Why POJOs Are Not Enough (10 Minutes)
  Naming the Parts (15 Minutes)
  BREAK (5 Minutes)
  Intro to This (20 Minutes)
  Activty (10 Minutes)
```


## Why POJOs Are Not Enough (10 Minutes)

Start by reviewing the code inside the `index.js`. There should be 3 Plain Old JavaScript Objects (POJO) that each represent a cat. Open up the `index.html` on the browser and then, open up the console. Play around with the cats, calling on their names and having them introduce themselves. Display the breeds of the two cats and feign surprise when we call `keyboardCat.breed` and get back `undefined`. Ask students to identify why we can't access the breed for `keyboardCat`.

> While we as humans can intuitively group all these objects as cats in our mind, there isn't anything special about the name of "Garfield" or "Hello Kitty" that allows a computer to identify these objects as all being cats. In other words, JavaScript treats these three objects independently, even though all three can meow and introduce themselves. And ultimately, inconsistent behavior across objects that should be similar is a big reason on why POJOs sometimes aren't enough. If we want all the cats in our program to hold similar data and be able to do similar things, we need a way to group all the cats together in a consistent manner. 

After the explanation, comment out the three cat POJO and write: 

```js
  class Cat{

  }
```
Go back to the console and show that you have a `Cat` variable in the console. Ask students on what the datatype of `Cat` is and how they can verify their hypotheses (`typeof`). After the discussion, run `typeof Cat` on the console will return and show the students that it is actually a `"function"`. Naturally, the next step is to try and run that function `Cat()`. The error that you get will be:

```txt
Uncaught TypeError: Class constructor Cat cannot be invoked without 'new'
```

At this point, have students read the error and try to get them to intepret what the problem is or how to solve that problem. Facilitate the discussion until students realize that they need this 'new' keyword, as mentioned in the error message, in order to invoke the `Cat` function. Run `new Cat()` in the console and show that the return value of that function is an Cat object. Explain that you're saving the return value into a variable and in your `index.js`, re-create the three cats from the beginning of the lecture.

```js
  class Cat{

  }

  let helloKitty = new Cat()
  let garfield = new Cat()
  let keyboardCat = new Cat()
```

## Name the Parts (15 Minutes)

After creating the three Cat objects, go back to the console and show them the value for `helloKitty`, `garfield`, and `keyboardCat`. All three will be an empty `Cat {}`, but run some comparisons in the console. 

```js
helloKitty === garfield // -> FALSE
garfield === keyboardCat // -> FALSE
helloKitty === Cat // -> FALSE
Cat === keyboardCat // -> FALSE
```

At this point, it's a good time to bring up the idea of "Pass by Reference vs Pass by Value".

> A common problem that new developers often struggle with in JavaScript is when we're dealing with object comparison. When we're dealing with primitives (like numbers, booleans, strings), it's relatively easy to compare those value because what you see is oftentimes what you get. The number 7 is threequal to the number 7 because they both have the value of 7; `true` threequals `true` because both are valued to be `true`. However, when we're dealing with objects (non-primitives), we can't just look at the key-value pairs in the objects. A good litmus test for equality is changing a key-value pair in one object and seeing if it changes the other object the same way. If both objects are changed, then we know the two objects are equal to each other and if only one is changed, then the two objects, as far as JavaScript is concerned, are not equal. This is because objects in JavaScript are passed by their reference and you can think of this as being the memory where the object is stored.

> Specifically for our `Cat` example, we created three separate cat object by running the function three separate times and saving each of the return value to its own variable. In programming, we would call the `Cat` to be the class and that can create individual cats, better known as instances. We can think of the `Cat` as being a blueprint and the instances of the `Cat` being the buildings built from those blueprints. While there's only one physical blueprint that lays out what rooms a building has, multiple building can be made from that same blueprint in different places. That's similiar to what JavaScript is doing when we're using the `new` keyword with the `Cat` class - We're telling our computer to build three buildings from the one `Cat` blueprint.

At this point, ask the students what's one limitation of our code at the moment. Allude to the fact that your POJO cats have relevant key-value pairs that contain information about each of the cats, like their names and breed while your Cat instances are void of any key-value pairs. Since `Cat` is a function, ask them what is a way to pass in outside information into a function invocation (arguments). 

Pass in the appropriate names and breed in for the cats, and now your code should look like this:

```js
  class Cat{

  }

  let helloKitty = new Cat("Hello Kitty", "Cartoon")
  let garfield = new Cat("Garfield", "Persian Tabby")
  let keyboardCat = new Cat("Keyboard Cat", "Meowsician")
```

Inspect the three cat instances in the console and show students that there still isn't any key-value pairs in the cats. 

> So, we passed in two arguments into this `Cat` blueprint in hopes that JavaScript knows what to do with them. But, in our `Cat` function definition, we aren't doing too much. In fact, it is a pretty boring function that doesn't have anything in it. But going back to the first error message that we saw when we tried to invoke `Cat()` without the `new` keyword (Run this again in the console), the error is saying that the Class constructor (of) Cat cannot be invoked. (Highlight the word constructor) Just like how `return` is a keyword in a plain old function, `constructor` is a keyword in a JavaScript class. The job of `constructor` is to receive _all_ the arguments being passed in with the `new` keyword and somehow associate the incoming information with the instance/building being constructed.

```js
  class Cat{

    constructor(name, breed){
      console.log("THE NAME IS:", name)
      console.log("THE BREED IS:", breed)
    }

  }

  let helloKitty = new Cat("Hello Kitty", "Cartoon")
  let garfield = new Cat("Garfield", "Persian Tabby")
  let keyboardCat = new Cat("Keyboard Cat", "Meowsician")
```

After writing the above code, show them the console and verify that six lines are being logged to the console (2 for each cat). Ask students what they should see when you inspect the `helloKitty` variable and after getting some answers, show that the `helloKitty` variable is empty. Cue the dramatic music and give the a break.

## BREAK (5 Minutes)

## Intro to This (20 minutes)

After coming back from the break, set the stage.

> Before we took the break, we talked about this new type of function that uses this `class` keyword. In order to invoke this special function, we needed to use this `new` keyword which also knew about the `constructor` keyword inside the class definition. And while we were able to log to the console the arguments that were being passed in when we created a cat instance, our cat instances weren't able to keep track of that information. So, how do we assign attributes to the instances we create? Enter another keyword - `this`.

```js
  class Cat{

    constructor(name, breed){
      console.log("THE NAME IS:", name)
      console.log("THE BREED IS:", breed)
      console.log("Hello, I am:", this)
    }

  }

  let helloKitty = new Cat("Hello Kitty", "Cartoon")
  let garfield = new Cat("Garfield", "Persian Tabby")
  let keyboardCat = new Cat("Keyboard Cat", "Meowsician")
```

Show students the console and every third line, they should see the same thing: `Cat {}`. Ask students to hypothesize exactly what they're seeing every third line and push them to use some of the new terms that was covered. After students realize that they're seeing the instances being created, ask them how they would add key-value pairs if `this` were a POJO. If it helps, provide the students with an example:

```js
let pojo = {}
// What do we do to add key-value pairs?
// ???
console.log(pojo) // We want {hello: "goodbye"}
```

After students realize that we can use the dot-notation:

```js
  class Cat{

    constructor(name, breed){
      // this -> Referring to the instance being created
      this.name = name
      this.breed = breed
    }

  }

  let helloKitty = new Cat("Hello Kitty", "Cartoon")
  let garfield = new Cat("Garfield", "Persian Tabby")
  let keyboardCat = new Cat("Keyboard Cat", "Meowsician")
```

Inspecting the cat instances in the console, students should see that each cat object now has the appropriate key-value pairs. 

> In using a JavaScript class to create cat objects, we've made it easier for us to be consistent across the board. When we construct/instantiate/invoke the `Cat` class to create the instances, we only have to pass in the values of what we want and let one definition handle the key assignment for all the cats. This lends itself to our code being less repetitive, which in turn, helps it be less prone to human error. However, one side-effect of using the class syntax to standardize our objects is that we have to rely on using certain keywords to build out the classes and the instances, such as `this`, `new`, and `class`.

> But right now, our cat instances can only hold data. We haven't talked at all about our cats being able to run some functions and behave on that data. Going back to when we just had the POJOs, each cat had an introduce function that we could call that would return the cat's name and breed in a nicely formatted string. Remember that the major benefit of using classes is the consistency that comes with using it, so there has to be a way to standardize functions and methods as well. Going back to the idea of callbacks, having function definitions inside a function definition is nothing too crazy for JavaScript to compile and we can use that idea to define methods for all the cat instances in our class definition.

```js
  class Cat{

    constructor(name, breed){
      // this -> Referring to the instance being created
      this.name = name
      this.breed = breed
    }

    introduce(){
      console.log(this)
    }

  }

  let helloKitty = new Cat("Hello Kitty", "Cartoon")
  let garfield = new Cat("Garfield", "Persian Tabby")
  let keyboardCat = new Cat("Keyboard Cat", "Meowsician")
```

Have the students notice the lack of the keyword `function` in the function definition for `introduce`. Whenever you are defining an instance method, you do not need the `function` keyword because the `class` keyword is making some assumptions about the code that you're writing inside of it.

Similar to what we did before with `constructor`, inside the `introduce` method, console.log the `this` keyword and have students hypothesize what `this` is referring to. Then, in the console, run the `helloKitty.introduce()` method and show that `this` is the `Cat {...}` instance. Have the students talk you through of what needs to be written in order to return the name of the cat with a description of its breed.

```js
  class Cat{

    constructor(name, breed){
      // this -> Referring to the instance being created
      this.name = name
      this.breed = breed
    }

    introduce(){
      // this -> Referring to the instance calling the introduce method 
      return `Meow, my name is ${this.name} and I'm a ${this.breed}.`
    }

  }

  let helloKitty = new Cat("Hello Kitty", "Cartoon")
  let garfield = new Cat("Garfield", "Persian Tabby")
  let keyboardCat = new Cat("Keyboard Cat", "Meowsician")
```


## Activity (10 Minutes)

In breakout rooms or in small groups, have the students define a new attribute and a method for a Cat. 

> A Cat now has a weight attribute associated with it. Like the name and the breed of the cat, the weight of the cat will be provided when it's being created and we want the instance to hold onto that information. We also want a new method called `eat` that will increase the weight attribute of the cat to be 10 higher than what it was before and the method should also take in a string of a food. The method should return the string: `Yum, thanks for the ${FOODNAME}. I now weigh ${NUMBER} pounds` where FOODNAME is the food passed in and the NUMBER is the new weight. In your groups, think about how you would change the class of this cat to accomodate these two new features.

```js
  class Cat{

    constructor(name, breed, weight){
      // this -> Referring to the instance being created
      this.name = name
      this.breed = breed
      this.weight = weight
    }

    introduce(){
      // this -> Referring to the instance calling the introduce method 
      return `Meow, my name is `${this.name}` and I'm a ${this.breed}.`
    }

    eat(foodName){
      this.weight += 10
      return `Yum, thanks for the ${foodName}. I now weigh ${this.weight} pounds.`
    }

  }

  let helloKitty = new Cat("Hello Kitty", "Cartoon", 100)
  let garfield = new Cat("Garfield", "Persian Tabby", 90)
  let keyboardCat = new Cat("Keyboard Cat", "Meowsician", 105)
```

After students work in groups, call them back and ask for volunteers or use each group as the exit ticket.
