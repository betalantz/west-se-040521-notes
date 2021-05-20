# Many to Many Relationships

Based off of yesterday's code, we're going to add the ability to like a tweet. We describe this specific relationship between users and tweets as a many to many relationship. Meaning that a user can like many tweets and a tweet can be liked by many users!

> **Note:** This is a separate relationship from the one to many that we built before. That relationship could be called "posted tweets" whereas this relationship should be called "liked tweets".

## The world so far

* Create a User class. The class should have these methods:
  * `#initialize` which takes a username and have
  * a reader method for the username
  * `#tweets` that returns an array of Tweet instances
  * `#post_tweet` that takse a message, creates a new tweet, and adds it to the user's tweet collection
* Create a Tweet class. The class should have these methods:
  * `Tweet#message` that returns a string
  * `Tweet#user` that returns an instance of the user class
  * `Tweet.all` that returns all the Tweets created.
  * `Tweet#username` that returns the username of the tweet's user

## Objectives 
  * Implement both sides of a many to many relationship
  * Practice keeping groups of data related to classes on the class as a class variable
  * Demonstrate single source of truth by not storing collections of objects on other objects
  * Demonstrate single source of truth by not storing one object in multiple collections

## Review OO
### Passing objects to methods and initializers
```ruby
#### we used to see this
class_room = ClassRoom.new
class_room.students # ['ben', 'matt', ..]

#### now we see this!
class_room.students # [<Student @name='ben'>, <Student @name='matt'>, ...]

Student.new(name, class_room)

#### something like this....
Student.new('Alex')

#### is really this!
Student.new(String.new("Alex"))
```
### Readers and writers 
Attribute readers / writers / accessors are a way to view and modify properties of an object. Object properties are stored as instance variables.

## Intro to Many to Many
### Review One to Many

Given what we learned about has many and belongs to we can imagine building up more complex domains. But there are still some domains we cannot totally describe… I’ll draw some out using a web whiteboard.

Example:

* An Aquarium has many Exhibits / Exhibit belongs to Aquarium
* An Exhibit has many Fish / Fish belongs to Exhibit

Think about how you would translate this to code, what objects get initialized with or _depends upon_ the others:
```ruby
Exhibit.new('coral reefs', aquarium) # <- we expect aquarium to be AN INSTANCE OF the AQUARIUM class
Fish.new('nemo', exhibit) # <- we expect exhibit to be AN INSTANCE OF the EXHIBIT class
```
### Modeling more complex relationships

What about this domain, doctors and patients. _Trying to avoid the word ‘appointment’ I will propose the problem:_

**Question: We know Models are classes that store data. Where in this domain could I store the data about what time the patient is scheduled to meet the doctor? What is the realtionship between these two models?**

We are missing something – the idea of an Appointment model! Single Responsibility Principle!

* A doctor has many appointments / appointment belongs to doctor (we already know how to model this)
* A patient has many appointments / appointment belongs to patient (we already know how to model this)
* A doctor has many patients through appointments
* A patient has many doctors through appointments

**When we create an Appointment instance, what are the dependencies?**

Both the doctor and the patient. Which makes sense. It doesn’t even make sense to make an appointment before a patient exists. By the same idea how could we create a tweet without a user existing?

The ‘rule’ we can abstract from this is that the ‘belongs to’ model needs to directly know about the related model to be initialized.
```ruby
Book.new('title', author_instance)
Appointment.new(doctor, patient, time)
```

## Deliverables

* User class
  * `#like_tweet` that accepts as a tweet instance as a parameter
  * `#liked_tweets` that returns a collection of all the tweets this user has liked
* Tweet class
  * `#likers` that returns a collection of all the Users who have liked this tweet

Map out relationship of new Like model to User and Tweet on diagram

What are dependencies of Likes, i.e. what other kinds of instances does a `like` need to "know" about?

* Implement `Like` class
* Implement `User#like_tweet`
* Implment `User#likes`

## CFU: Has-Many-Through
Implement `User#liked_tweets` which will return an array  of all the tweets a user has liked. Are there any existing methods that can help with this?
Also implement `Tweet#likers` which will return an array of all the users who have liked a tweet instance.