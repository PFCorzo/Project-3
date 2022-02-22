// Hardcode and global values go here
	// RULES: Sense everything in this folder contain hardcoded values, use screen 
       // case syntax 
// Create the origin of the blockchain  
const GENESIS_DATA = { 
	timestamp: 1, 
	lastHash: 'genesis',
	hash: 'hashbrown', 
	data: [] // Empty array to store data because an array is open space in memory
		// Remember that all blocks on the neetwork contain information
	       // of every transaction on the ledger
};

// Make the genesis block exportable sense it contains the information that needs to go into 
// the block class located at block.js 
module.exports = { GENESIS_DATA }; // Share the object 
				// The object being shared is Genesis Data

