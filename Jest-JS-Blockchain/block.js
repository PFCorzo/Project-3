// Import the genesis data so that it can be  

const { GENESIS_DATA } = require('./config'); 

// Create a class that contains the four essentials  that constitute a block

class Block {
	constructor({ timestamp, lastHash,  hash, data }) { 		       	
		this.timestamp = timestamp;   	
		this.lastHash = lastHash; 
		this.hash = hash;  
		this.data = data; 
	}
	static genesis() {
		return new Block(GENESIS_DATA);
	}
}
module.exports = Block; 

