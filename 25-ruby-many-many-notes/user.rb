class User
  attr_reader :username

  def initialize(username)
    @username = username
    # @tweets = [] # this is the idea that we will remove later
  end

  def post_tweet(message)
    Tweet.new(message, self)
  end

  # think of this as posted_tweets
  # return a collection of only the tweets that belong to this user
  def tweets
    # look through all the tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end
  end

  def like_tweet(tweet)
    Like.new(self, tweet)
  end

  def likes
    # returns an array of likes belonging to this user instance
    # binding.pry
    # look through all the likes
    Like.all.select do |like|
      like.user == self
    end
  end

  ## let students try this has-many-through first
  def liked_tweets
    # return an array of all the tweet objects a user has liked
    binding.pry
    likes.map do |like|
      like.tweet
    end
  end


end

