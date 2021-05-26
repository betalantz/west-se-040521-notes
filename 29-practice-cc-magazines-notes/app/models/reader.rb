class Reader < ActiveRecord::Base

    has_many :subscriptions
    has_many :magazines, through: :subscriptions

    def subscribe(magazine, price)
        Subscription.create(reader: self, magazine: magazine, price: price)
    end

    def total_subscription_price
        self.subscriptions.sum{|s| s.price}
    end

    def cancel_subscription(magazine)
        sub = self.subscriptions.find_by(magazine: magazine)
        sub.destroy
    end
  
end