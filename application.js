$(document).ready(function(){

})


// CLASSES 
// cookies
// ovens
// 

// cookies 

function Cookie (name, bake_time){
			this.name = name
			this.bake_time = bake_time
}

Cookie.prototype.bake = function(current_time){
	var bake_time = this.bake_time 
	if (current_time < (bake_time*.2))
		return 'raw'
	else if (current_time < (bake_time*.4))
		return 'still gooey'
	else if (bake_time == current_time)
		return 'just right'
	else if (current_time < bake_time)
		return 'crispy'
	end 
}
