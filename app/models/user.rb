class User < ApplicationRecord
    has_many :reservations

    include Gender

    validates :name, presence: true
    validates :phone, presence: true
    validates :email, presence: true

end
