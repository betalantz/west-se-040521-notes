# Data Structures 
## Objectives 

- Use different Data Structure in JS
    - Array
    - Objects 

- Access and iterate through different Data Structure
    - Arrays
        - Index in array
        - Access single element in array and objects
        - Object.keys()
        - Object.values()
        - Iterate through Array
        - .map()
        - .forEach()
        - .filter()
        - .find()
        - .findIndex()
        - .reduce()
        - for…of
    - Objects
        - dot notation 
        - bracket notation
        - Object.keys()
        - Object.values()
        - Object.entries()
        - Iterate through Object
        - for…in

- Understand how to use loops
    - for statement
    - do…while statement
    - while statement
    - break statement
    - continue statement
        
- Use conditional statements
    - if statements
    - if…else statement
    - else if statement
    - Ternary operator
    - switch…case statement

## Outline
```txt
5 min - The Set up
3 min - Arrays and Objects 
2 min - Access array values
5 min - Access object properties 
5 min - Nested data 
15 min - Loops for, do, while 
15 min - for...in and for...of 
10 min - Demo callbacks and higher order functions
15 min - Array Methods
10 min - Conditionals
---
85 min
```
### The Set up - (3 minutes)
Lightly review how our JavaScript file is being rendered by our script tag in our index.html. We went over this in a previous lecture and will do a deeper dive on it soon so this can be a quick review.

###  Arrays and Objects - (3 minutes)
Cover the similarities and differences between Arrays and Objects with emphasis on Objects, as Arrays were covered yesterday. Dive as deep as you feel is necessary but here are some key points.
 
Objects are an abstract representation of something. It consists of properties, which are key-value pairs. To add a new property to an object you assign it a new key, with a value. A cakeOrder is an object with the properties id, flavor, size, amount, and price. 

Arrays are object-like with some very important differences.  An array is a list of elements. The elements are stored at a specific index location in an array. Elements can be pushed things to the end of the list and pop them off. Elements can be added to the start of the list by shifting everything down or removed from the front by unshifting all the elements up. You can reassign a value at a given index.    

```javascript
// Array
let cakeNames = ['Chocolate Porter', 'Earl Grey', 'Salted Carmel', 'Vanilla', 'Carrot', 'Lemon Cream', 'Rose', 'Pink Champagne', 'Raspberry Cardamon Rose']

//Plain Old JavaScript Object
let cakeOrder1 = {
    id: 1,
    flavor: 'Earl Grey',
    size: 'cup cake',
    amount: 12,
    price: 18.00
}

```

### Access array values - (2 minutes)
Quickly review this topic which was covered yesterday
An array’s elements can be accessed through bracket notation, they can be read or resigned new values. push() adds elements to the end of an array, while pop() removes them. unshift() adds elements to the front while shift() removes them from the front.
Slice and Splice can also be touched on here.

```javascript
//Access array values through index
    console.log(cakeNames[0])
    console.log(cakeNames[2])
    console.log(cakeNames[cakeNames.length-1])
// reassign index value
    cakeNames[0] = '9lb Chocolate Porter'
    console.log(cakeNames)

//push item to the end of an array
    cakeNames.push('Raspberry and Lime')
    console.log(cakeNames)
//pop item off the end of an array
    cakeNames.pop()

//unshift item to the front of the array
    cakeNames.unshift('Blueberry and Lemon')

//shift items off the front of the array
    cakeNames.shift()
```

### Access object properties  - (5 minutes)
Access object property through keys with bracket and dot notation. All of the object keys and values can also be grabbed and returned in an array through Object.keys, Object.values and Object.entries

```javascript
//Access object property through key
console.log(cakeOrder1['flavor'])
console.log(cakeOrder1.flavor)

// reassign key value
cakeOrder1.amount = 13
console.log(cakeOrder1)

//Object.values(obj) 
//Returns an array of values
console.log(Object.values(cakeOrder1))

//Object.keys(obj)
//Returns an array of keys 
console.log(Object.keys(cakeOrder1))

//Returns a nested array of arrays
//Each array contains a key in the 0th index and the keys value in the 1st index
console.log(Object.entries(cakeOrder1))

```
### Nested data - (5 minutes)

Time to cover nested data. Build an array of objects and take a moment to check for understanding before we move on.  


```javascript
const daysOrders = [
    {
        id: 13,
        flavor: 'Vanilla',
        size: '6" cake',
        amount: 1,
        price: 40.00
    },
    {
        id: 14,
        flavor: 'Raspberry Cardamon Rose',
        size: '9" cake',
        amount: 1,
        price: 50.00
    },
    {
        id: 15,
        flavor: 'Pink Champagne',
        size: 'cup cake',
        amount: 25,
        price: 37.5
    },
    {
        id: 1,
        flavor: 'Earl Grey',
        size: 'cup cake',
        amount: 12,
        price: 18.00
    }
]
//Check for understanding 
// How do I access the price of the second cake with dot notation?
// How do I update the size of the first cake from 6" to 9"?
// How do I access just the second cake?
// How do I access all the values from the first cake at once?

```

### Loops for, do, while - (15 minutes)
Next, we will be demonstrating loops, all loops will continue to execute a blog of code based on a condition. 

Loops can be exited early with a return or break statement 

```javascript
function printCakeNames(arr){
    for(let i = 0; i < arr.length; i++ ){
        console.log(i)
        console.log(arr[i])
    }
}
printCakeNames(cakeNames)

// do while
function upCaseCakes(arr){
    let i = 0
    do {
        console.log(arr[i].toUpperCase())
        i++
    } while (i < arr.length)
    console.log('done with upCakeCakes')
}
upCaseCakes(cakeNames)

// while and break
function findFlavor(arr,flavor){
    let i = 0
    let found = false
    while(i !== arr.length-1){
        if(arr[i] == flavor){
            found = arr[i]
            break
        }
        i++
    }
    return found
}
console.log(findFlavor(cakeNames,'Vanilla'))
console.log(findFlavor(cakeNames,'Fish'))

```

### for...in and for...of - (10 minutes)
for...of will loop for every element in the array and for...in for every property in an object
```javascript
//for...of
function downCaseCakes(){
    for(let item of cakeNames){
       console.log(item.toLowerCase())
    }
    return cakeNames
}
downCaseCakes()

//for...in
function printObjProps(){
    for(let key in cakeOrder1){
        console.log(key)
        console.log(cakeOrder1[key])
    }
  
}
printObjProps()
```

### Demo callbacks and higher order functions - (10 minutes)
We will be passing our first callback so now is a great time to cover what makes JavaScript functions first-class.

What makes functions first-class objects is their ability to be passed as arguments and returned by other functions like any other variable. 

Lets define a function that bakes a cake and pass it our bake function. Lets demo a different HOF with the same callback. 

bakeCake here is our Higher Order function as the one taking the callback as an argument, while bake and our anonymous function are both examples of callbacks 

<!-- As our last example lets build a function to payGuest that takes a base pay. This time we will define and return the function within the functional scope of payGuest -->
```javascript
//Higher order functions and callbacks

// higher order function (HOF)
function bakeCake(callback){
    // console.log('From inside of the HOF')
    // in this case the HOF will return what the callback returns
    return callback('cake')
}
const bakePudding = cb => cb('pudding')
// callback

const bake = str => {
    return `Hello Bakers today we will be baking ${str}`
}

bakeCake(bake)

// function buyCake(price) {
//      //anonymous function
//     //defined and invoked 
//     return function(amount) {
//         console.log('Your total is: ' + amount * price)
//     }
// }

```

### Array Methods - (15 minutes)

Check for students’ understanding of callbacks and higher-order functions. A brief review may be necessary before diving into these array methods. 

.forEach is an Array method that takes a callback and will invoke the callback for every item in the array. It returns undefined 

```javascript
//.forEach()
daysOrders.forEach(cake => console.log(cake))
```

.map is an Array method that takes a callback, it will invoke the callback for every element in the array but this time it will return a new array with each element now being the return value from the callback.

```javascript
//.map()
let justCake = daysOrders.map(() => 'cake')
let cakePrices = daysOrders.map(cake => cake.price)
console.log(justCake)
console.log(cakePrices)

```

.filter will take a callback that returns true or false. It invokes the callback for every element in the array. It will return a new array fill of elements that returned true. It returns an empty array if nothing returns true.
 

```javascript
//.filter() 
let cupcakes = daysOrders.filter(cake => cake.size == 'cup cake')
console.log(cupcakes)
```

.find is like filter but for one element. It takes a callback, and invokes it for every element in the array but will return the first element that meets the test defined by the callback. If that test is never passed undefined is returned.

.findIndex has the same behavior as .find but it returns the index of the found element instead of the value. 

```javascript
//.find()
let expensiveCake = daysOrders.find(cake => cake.price > 45 )
console.log(expensiveCake)

//.findIndex()
let pinkChampagneIndex = daysOrders.findIndex(cake => cake.flavor == 'Pink Pink Champagne')
```

.reduce() needs a special callback called a reducer, it will invoke the reducer on every element in the array and return a single output. The reducer has an accumulator and a current value. It can also take an initial value as a second parameter.

```javascript
let daysTotal = daysOrders.reduce((a,b) => { 
    return a + b.price
},0)
console.log(daysTotal)

let oneString = cakeNames.reduce((a,b) => { 
    return a + b
},'')
console.log(oneString)
```


### Conditionals - (10 minutes)
Students should be familiar with ifs, if else but it doesn’t hurt to do a quick review or check for understanding

```javascript
function checkFlavor(flavor){
    let cake = cakeNames.find(cake => cake.flavor == flavor)
    if(!cake){
        return 'sorry we don\'t have that flavor'
    } 
}

function checkSize(size){
    let cakeSize = pricePerSize.find(obj => obj.size == size)
    if(cakeSize){
        return cakeSize
    } else if(size == 'secret size') {
       return '100" cake'
    } else {
        return 'sorry we don\'t have that size' 
    }
}
```

Switch statements evaluate an expression and match its value to possible cases. If none of the cases are true it can run a default case. 

```javascript
function totalPrice(amount, size){
    switch(size){
        case 'cup cake':
            return 1.50 * amount
        case '9" cake':
            return 50 * amount
        case '6" cake':
            return 40 * amount
        case '100" cake':
            return 1000 * amount
        default:
            return 'we do not have that size'
    }
}
```

### Check for understanding - (5 minutes)
Finish everything off with a check for understanding or an exit ticket. 

