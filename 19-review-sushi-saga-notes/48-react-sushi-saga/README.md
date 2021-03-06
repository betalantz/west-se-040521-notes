# Mod 4 Practice Code Challenge: Sushi Saga

Welcome to Sushi Saga, where your journey to sushi is only just beginning!

We've had a bit of trouble with our patented Sushi Saga conveyor belt system, so before you can eat, you're going to have to help us get it working.

**Here's what it should look like:**

![Sushi Saga](https://raw.githubusercontent.com/learn-co-curriculum/React-Practice-Code-Challenge/master/sushi-saga-demo.gif)

**Doesn't that look delicious?!**

## Setup

### Server

To get you going, we've got a backend just chock full of sushi just waiting to be eaten! To get get these guys, you're going to have to do the follow:

1. Navigate to `sushi-saga-client` and run `json-server --watch db.json`
2. Navigate to `http://localhost:3000/sushis` to confirm delivery of sushi!


### Client

Just as all good sushi needs a firm base of delicious rice, we've given you quite a bit of code to start off your frontend!

This will be located within the `sushi-saga-client` directory of this repo. Inside are all the components you'll need, as well as instructions as to where and how to render those components properly.

The component hierarchy should be as follows:

- `App` is parent to both `SushiContainer` and `Table`
- `SushiContainer` is parent to both `Sushi` and `MoreButton`

Be sure to read all of the notes in the all of the components before getting started! They will give you clues as to how and where to manage `state` and `props`

## Deliverables

Inspectors will be coming by to check that our patented Sushi Saga conveyor belt is working properly! Oh no! They will be checking the following:

[x] 1. Sushi list is properly received from the server
  - fetch in componentDidMount
  - keep in state
[x] 2. Only 4 sushi are rendered at a time
  - first render all sushis, then figure out how to limit
  - what should go in state? a 2nd array? an index?
[X] 3. Clicking the "More Sushi!" button shows the next set of 4 sushi in the list. For this assignment, you don't have to be concerned about what happens when you reach the end of the sushi list.
  - a cb function passed down to the button
  - will update something in state (?)
[x] 4. Clicking a sushi on a plate will eat the sushi, causing it to be removed from its plate and an empty plate to appear on the table.
  - sushis displayed based on some eaten attribute
  - where to keep that attribute? state? on sushi obj?
  - Table expects an array of eaten sushi
[x] 5. We need to make money! Whenever a sushi is eaten, customers should be automatically charged! Based on a budget decided by you, the developer, the amount of money remaining should go down by the cost of the sushi that was eaten. There is a spot to display this number in the `Table` component
  - initialize state with a money amt
  - update my eatSushi fn to also reduce money in state
[x] 6. No free meals! Customers cannot eat any sushi that exceeds the amount of money remaining in their balance
  - a further update to eatSushi fn: adds a conditional

### Bonus

If and only if you have time, you may work on the following:

[x] 1. SushiWallet! Add a form for customers to add more money to their balance
 - a new function that lives where state.money lives
 - needs to be a form or just an alert?
[x] 2. Full rotation! When the end of the line of sushi is reached, the conveyor belt should start from the beginning. Sushi that have already been eaten should remain eaten. It would be creepy if they reappeared!
 - adds a conditional to the nextFour fn
 - 'remain eaten' also argues for 'eaten' being a property of each sushi object
3. Anything else!

**Note:** If at the end of the challenge you have achieved all the functionality required but the style looks off, this is okay!


{
      "id": 1,
      "name": "Maguro Magic",
      "img_url": "./sushi/maguro.png",
      "price": 20,
      "created_at": "2018-07-27T18:53:16.241Z"
    },