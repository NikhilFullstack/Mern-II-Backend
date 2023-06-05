const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	
	i1: {
		type: String,   
		trim: true,
		
	},
	c1: {
		type:Boolean,
	},
	i2: {
		type: String,   
		trim: true,
		
	},
	c2: {
		type:Boolean,
	},
	i3: {
		type: String,   
		trim: true,
		
	},
	c3: {
		type:Boolean,
	},
	i4: {
		type: String,   
		trim: true,
		
	},
	c4: {
		type:Boolean,
	},
	i5: {
		type: String,   
		trim: true,
		
	},
	c5: {
		type:Boolean,
	},
	i6: {
		type: String,   
		trim: true,
		
	},
	c6: {
		type:Boolean,
	},
	i7: {
		type: String,   
		trim: true,
		
	},
	c7: {
		type:Boolean,
	},
	i8: {
		type: String,  
		trim: true,
		
	},
	c8: {
		type:Boolean,
	},
});

module.exports = mongoose.model("User", userSchema);
