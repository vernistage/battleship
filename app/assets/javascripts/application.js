// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var coordinates;

$(document).ready(function() {
	
	$('td').on('click', function(){ 
		var column = $(this).attr("class");
		var row = $(this).closest('tr').attr('id');
		return coordinates = [column, parseInt(row)]
	});


});










var Game = function(){


}


var Ship = function(name, length){
	this.name = name;
	this.length = length;
	this.orientation = "horizontal";
}


var patrolBoat = new Ship('patrol boat', 2)
var submarine = new Ship('submarine', 3)
var destroyer = new Ship('destroyer', 3)
var battleShip = new Ship('battleship', 4)
var aircraftCarrier = new Ship('aircraft carrier', 5)

var shipChoices = [patrolBoat, submarine, destroyer, battleShip, aircraftCarrier]



Ship.prototype.changeOrientation = function(){
	if (this.orientation == "horizontal") {
		return this.orientation = "vertical"
	} else if (this.orientation == "vertical") {
		return this.orientation = "horizontal"
	};
};

Ship.prototype.isPlaceable = function(x, y){
	if (this.orientation == "vertical"){
		if((y + this.length -1) <= 10){
			console.log('Yes, is placeable!')
			return true
		}
		else {
			console.log("Nope. Not placeable.")
			return false	
		}
	} else if (this.orientation == "horizontal"){
		x = x.charCodeAt(0) - 64;
		if((x + this.length -1) <= 10){
			console.log("Yes, is placeable!")
			return true;
		}
		else {
			console.log("Nope. Not placeable.")
			return false
		}
	}
}


























