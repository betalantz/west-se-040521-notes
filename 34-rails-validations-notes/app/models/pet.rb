class Pet < ApplicationRecord


    SPECIES = ["cat", "dog", "fish"]

    validates(:name, {presence: true, uniqueness: true})
    validates :species, inclusion: {in: SPECIES, message: "%{value} is not a valid species"}
    validates :year_of_birth, numericality: {less_than_or_equal_to: Date.current.year}

    def age
        Date.current.year - self.year_of_birth
    end

    def to_s # this method monkey-patches Ruby's built-in to_s method, so that if you try to render a whole object in a substitution tag in a view <%= @pet %>, Rails will implicitly invoke this method
        "#{self.name} #{self.age}"
    end

end
