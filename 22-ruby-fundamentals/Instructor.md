# Intro to Ruby

## SWBATs
* [] Debug with `irb`, `pry` and `puts`
* [] Become familiar with ruby docs 
* [] Write and execute a ruby method 
* [] Access nested data from Hashes and Arrays 
* [] Read rspec test
* [] Implement each, map, find


## Outline
```text
  - 05m Welcome to Ruby, lets talk about pry
  - 10m Ruby vs JavaScript data types
  - 10m writing methods
  - 30m Hashketball Demo
===
  - 55m Total
```

## Demo

### Welcome to Ruby, lets talk about pry
Use this time to introduce students to their new debugging tools irb, puts and pry.

irb is an environment, given to us by ruby, that will take our input, evaluate it and return it to us. 

This can also be done with the pry gem. 
Explain the similarities between gems and npm packages 
`gem install pry`

```ruby
irb

1+1

pry

'cat' == 'cat'

exit  

ruby hashketball.rb

#in hashketball.rb
require 'pry'

binding.pry
'Welcome to ruby!'

```

### Ruby vs JS
Since students know programing with JavaScript, utilize their past knowledge to draw connections to the new ruby syntax.

Ask questions like, `How did we make variables in JavaScript?`

Then, reivew some of the major diffrences. 
Our Variables in Ruby don't require an identifier. 
Constants in Ruby are identify with capital letters, however unlike JS ruby will not prevent it from assigned a new value. 
```ruby

name = 'rose'

INSTRUCTOR = 'ix'

INSTRUCTOR = 'adam'

puts INSTRUCTOR

```

Ask, `What were our Data Types in JavaScript?`

Then review Data Types in Ruby
* Numbers (Ints/floats)
* Booleans
* String
* Hashes 
* Arrays
* Symbols 


```ruby
1.class

9.99.class

:name.class

'cat'.class

{}.class

[].class

```

Touch on some of the major diffrences. 

- There are now two kinds of numbers integer and float

- Students might ask about [Symbols in ruby](https://www.rubyguides.com/2018/02/ruby-symbols/) and[Symbols in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol). Symbols are identifiers, they are a name and a unique id.
They are good for Hash keys, methods and instance variables.

- Hashes are not quite like JS objects. Hash properties are accessed with `[]` bracket notation instead of dot notation. Let students know they will see objects again soon. Hash keys can be strings with the use of a `=>` or symbols

```ruby
my_hash = {name:'cat'}
my_hash_rocket = {'food' => 'cookie'}

puts  my_hash[:name]
puts my_hash_rocket["food"]

```


### Writing Methods
All functions in Ruby are Methods. Start by writing a JavaScript function. 

Follow up with a ruby method and ask students to identify the major diffrences between the two.

- no {}
- no function keyword or => 
- no return
- no ()

```ruby
def printName name
    name
end 

printName 'ix'

# Will still work with ()

def printName(name)
    name
end 

printName('ix')

```

### Hashketball demo
For this demo we will build out Hashketball or another nested data lab with the cohort. You'll use this opportunity to walk through rspec tests and ruby Enumerables. Walk through the solution step by step, while demonstrating how to read errors and test the code. 

***Given the nested hash in hashketball.rb***
- Access the away or home team
- Acess players
- Write a method call get_players that will return all of the players from both the away and home team. 
> Note: if students don't know show them how to google for the answer in ruby

```ruby
def get_players 
    game_hash[:away][:players] += game_hash[:home][:players]
end 

```

***Write a method to find a given team***
- Remind students of Object.values, ruby has a method like that as well .values 
- Remind students of find and introduce [Enumerables](https://ruby-doc.org/core-3.0.0/Enumerable.html) 

```ruby
def find_team team
    game_hash.values.find{|hash| hash[:team_name] == team}
end 

```

***Introduce rspec tests***
- Ask the cohort, `How did mocha tests work?`
- Walk through hashketball_spec.rb 
- Point out the `describe` and `it` blocks
- Run `rspec --f-f`
- Walk through how to read the error
- What's a NoMethodError, what where can the find this test to inspect it. 
- Fix the error

```ruby
 1) hashketball #num_points_scored knows the number of points scored by each player
     Failure/Error: expect(num_points_scored("Jeff Adrien")).to eq(10)
     
     NoMethodError:
       undefined method `num_points_scored' for #<RSpec::ExampleGroups::Hashketball::NumPointsScored:0x00007fca14367398>
     # ./spec/hashketball_spec.rb:29:in `block (3 levels) in <top (required)>'
```
```ruby
# in hashketball.rb

def num_points_scored 
end 

```

- We get a new error, dig into the test and decode what the test is actually looking for.

- The test is calling the method num_points_scored and giving it a argument of a player name

- It wants the score of that player returned. 
Lets just start there. Have num_points scored return 10.
- The next test asks for the stats of another player so we need to make this more dynamic.
- Add a `binding.pry` to num_points scored
- How would you find "Jeff Adrien"? We don't know if they are in away or home. Do we have a method that returns all of our players?
- Call `get_players` 
- Call `find` on `get_players`
- Now that we have the player hash, how do we get the points?
- Run the test to show it passing

```ruby

def num_points_scored name
    player = get_players.find{|player| player[:player_name] == name}

    player[:points]
end 


```

Follow this pattern for the remaining tests, compare and contrast ruby method and JS methods as the rest of the methods of built out. 
