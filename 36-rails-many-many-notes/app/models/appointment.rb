class Appointment < ApplicationRecord
  belongs_to :doctor
  belongs_to :patient

  validates :time, uniqueness: {scope: :doctor}
  validate :not_in_past

  def not_in_past
    if time.present? && time < Date.today
      errors.add(:time, "can't be in the past")
    end
  end
  
end
