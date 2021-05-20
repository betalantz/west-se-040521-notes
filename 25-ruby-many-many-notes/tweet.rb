class Tweet
  attr_reader :message, :user

  @@all = []

  def initialize(message, user)
    @message = message
    @user = user
    @@all << self
    # @likes = 0
  end

  def self.all
    @@all
  end

  def username
    user.username
  end

  def likes
    Like.all.select do |like|
        # like.tweet.message == self.message # this works, but its extra
        like.tweet == self # self in an instance method refers to that instance
    end
  end


  def like_count
    # current_likes = Like.all.select do |like|
    #   like.tweet == self
    # end
    # current_likes.count
    likes.count
  end

  def likers
    # return an array of all the users who have liked this tweet
    likes.map do |like|
      like.user
    end
  end
end
