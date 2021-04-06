// Open up the browser and test out some code in the console!
// Lets build an app for a FlatIron Podcast
//JavaScript Functions 
    //Define a function 
function introduction(){
     console.log(`Thanks for tuning in to the Flatiron Podcast, where we talk about techniques for learning coding`)
} 

//console.log(introduction) //reference
//console.log(introduction()) //invocation


    //Now with Arrow Function syntax! 
let guestAppearance = () => {
    let guest = prompt('Welcome to the Flatiron Podcast, what is your name?');
    //The return value here will be passed on 
    return guest
}

    //One Line implicit returns
let sayHi = () => console.log('Hello, happy to be here thanks for inviting me to come on your podcast')
 

//Defining parameters and passing arguments

    //Location is a parameter
    //Arrow functions do not need () if they are passed a single param
let whereToListen = location => console.log(`To hear more episodes go to ${location}`)

    //spotify is the argument
//whereToListen('spotify')
    
    //week and topic are parameters
let thisWeeksSubject = (week, topic) => console.log(`It's week ${week} and this weeks topic will be...${topic}`)


    //'one' and 'Functions and Variables in JS are arguments are arguments' 
//thisWeeksSubject('one', 'Functions and Variables in JS')



//Scope 
//host is in global Scope 
let host = 'Rose'

function recordShow(){
    //epName is in local scope  
    let epName = 'ep2. JavaScript Scope'
    console.log(`${epName} with ${host}`)
    introduction()
}

//recordShow()
//console.log(host)
//console.log(epName)

if('cat'=='cat'){
    //this is block scope
    var cookie = 'peanut butter'
    let cookie2 = 'snickerdoodle'
} 

// console.log(cookie)
// console.log(cookie2)


//Const variables can not be overwritten 
const producer = 'Paul'
//producer = 'bill'


//The Call Stack
function twoThree(){
    return `${testingOne()}, two three`
}

function testingOne(){
    return `Testing one`
}

console.log(twoThree())

function preShowCheck(){
    console.log('begin pre-show check')
    micCheck()
    console.log('done with preShowCheck')
    return
}

function micCheck(){
    console.log('testing one two three')
    soundCheck()
    console.log('done with mic Check')
    return
}

function soundCheck(){
    console.log('can you hear the beep?')
    recordingCheck()
    console.log('done with sound check')
    return
}

function recordingCheck(){
    console.log('playing back recording... sounds like everything is fine')
    console.log('done with recording check')
    return 
}

preShowCheck()

// Arrays

let episodes = ['Are Arrays Objects?', 'Why 3 Variable types?', 'Forms and Requests Methods', 'All about GraphQL']

//Access array values through index
console.log(episodes[0])
console.log(episodes[2])
console.log(episodes[episodes.length-1])
// reassign index value
episodes[0] = 'Adventures in the DOM'
console.log(episodes)

//push item to the end of an array
episodes.push('Handling CORS')
console.log(episodes)
//pop item off the end of an array
episodes.pop()

//unshift item to the front of the array
episodes.unshift('Event Listeners')

//shift items off the front of the array
episodes.shift()

//Check for understanding 
//Draw out the call stack for the following 

function runTheShow(week, subject){
    recordShow()
    // welcomeGuest(guestAppearance)
    sayHi()
    thisWeeksSubject(week,subject)
    // payGuest(100)(1)
}
runTheShow('one','intro to js')


// //Higher order functions and callbacks
// function welcomeGuest(callback){
// // console.log('From Inside of Higher Order')
// // The return value of the callback will be passed to this console.log 
// console.log(`Please help us welcome our guest! ${callback()}!`)
// }
// // This is a callback with a named function
// //console.log(welcomeGuest(guestAppearance))
// // This is one with an inline anonymous function
// //console.log(welcomeGuest(() => prompt('Welcome Back to the Flatiron Podcast, remind us what your name was?')))

// function payGuest(base) {
// //anonymous function
// //defined and invoked 
// //debugger 
// return function(numOfAppearance) {
//     //debugger
//     console.log('guest pay: ' + numOfAppearance * base)
// }
// }