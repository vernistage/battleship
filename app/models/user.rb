class User < ApplicationRecord
  has_many :user_games
  has_many :games, through: :user_games
  validates :email, uniqueness: true
  validates :email, :encrypted_password, presence: true
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
