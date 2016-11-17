class UserGame < ApplicationRecord
  validates :game_id, :user_id, presence: true
end