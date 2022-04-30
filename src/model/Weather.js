const Weather = function(data) {
    this.data = data
    this.errors = []
} 

Weather.prototype.validateUserInput = function(){
   if(this.data == ""){
       this.errors.push("Error: Please enter the name of the city here! Without the name we cannot tell you the weather of your city. Thank you")
   }
}

module.exports = Weather