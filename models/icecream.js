const mongoose = require("mongoose") 
const icecreamSchema = mongoose.Schema({ flavour: {type:String,minlength:5} ,price: {type:Number,min:6,max:11} ,toppings:String}) 
 
module.exports = mongoose.model("icecream", icecreamSchema) 