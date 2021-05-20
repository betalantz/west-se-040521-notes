require 'pry'
require_relative './tweet'
require_relative './user'


coffee_dad = User.new("coffee_dad")
tea_aunt = User.new("tea_aunt")

tweet1 = Tweet.new("great coffee", coffee_dad)
tweet2 = Tweet.new("mmm cuppa joe", coffee_dad)
tweet3 = Tweet.new("oooo oolong", tea_aunt)
tweet4 = Tweet.new("peppermint so wintry", tea_aunt)

binding.pry