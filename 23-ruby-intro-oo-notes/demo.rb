# ******************************
# Everything is an Object in Ruby
# ******************************

# what is the data type of x?
# what is the value of x?
x = 3
puts x.class
puts x

# what happens when we run this code?
# what is split and where does it come from?
# how does Y know what to do with split?
y = "Hello world!"
puts y.methods
arr = y.split.inspect
puts arr.methods

# Methods, on a lower level, are known as “messages” in object-oriented programming. Methods are called on objects and messages are sent to objects. Objects respond to messages by doing some work. The exact work that it should do is defined on the object’s class.

# What does message_name mean here?
message_name = :+
puts x.send(message_name, 1) === x + 1
# what does send do?
# what does the argument to send specify?
# what other arguments does send take?

# most operators in Ruby are just messages sent to objects
names = [
        "Pan",
        "Harrf",
        "Megan", 
        "Carrie"
    ]
    puts names[0]
    puts names.[](3)
    # puts names.methods
    puts names.send(:[], 2)
    
# objects complain when they don't know how to respond to messages
# objects complain when they don't know how to execute methods
    # names.respond_to_an_undefined_method
    puts names.respond_to? :split

# Why is it important to remember everything is an object in ruby? Because everything can respond to a message. If you have a background in C or Java, 1.odd? seems bizarre; know that not all languages have this functionality but we get to use it in ruby.

# ******************
# What is an object?
# ******************

# Generally, an object is a copy of some class template. We can make generic objects with Object.new() and Ruby assigns this object an id to this object in the computer’s memory. Ask the students to reason through uniqueness and why each object would have an id.
    
    o = Object.new
    puts o
    puts o.object_id
    puts (o.object_id * 2).to_s(16)
    z = Object.new
    puts z.object_id == o.object_id

# *************************
# Creating our own Objects
# *************************

# Why do we want to do this? Give examples of cases where you want to repeat specific functionality about an entity, but you don’t want to write your code over and over again.

#     Remember, programming is about removing simple, repetitive decisions so that we can focus on harder, higher-order problems. Whenever you have to do something more than once, you should probably automate it.
    
#     Let’s make an object. [show slides]

    # class Car
    # Properties:
    #   - model
    #   - make
    #   - year
    #   - wheels: 4
    #   - doors
    # Methods:
    #   - window function
    #   - accelerate
    #   - decelerate
    
    # Instance => individual car object
    # audi 2 door, green
    # audi 3 door, pearl