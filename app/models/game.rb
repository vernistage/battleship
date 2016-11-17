class Game < ApplicationRecord
  has_many :user_games
  has_many :users, through: :user_games
  # validates :winner, presence: true
  validate :only_two_players

  private

  def only_two_players
    self.users.length === 2
  end
end