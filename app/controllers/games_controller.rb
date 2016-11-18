class GamesController < ActionController::Base
	layout "game_layout"

	def index
		@games = Game.all
	end

	def new
		@game = Game.new
	end

end