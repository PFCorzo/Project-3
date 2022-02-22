// npm run test is used to initialize test

// Import with the require keyword const 
const Block = require('./block');  // Tell the require function what js file is needed.
const { GENESIS_DATA } = require('./config'); // From config file import GENESIS data class
// Set up a class that can be tested by jest 
describe('Block', () => { // describe() is used to describe what object is being tested
			// () => { is a function that allows you to invoke another function
	
	const timestamp = '12-01-2012';	// Calling on INSTANCES of the class 
	const lastHash = 'foo-hash';
	const hash = 'bar-hash';
	const data = ['blockchain', 'data'];
	const block = new Block({timestamp, lastHash, hash, data}); // Js can automatically 
								// Key:value pairs IF	
								//there is already a key
	
	it('Has a hash, timestamp, data, lastHash', () => {
		expect(block.timestamp).toEqual(timestamp); // Expect function takes 
		expect(block.lastHash).toEqual(lastHash);  // arguments of what object 
		expect(block.hash).toEqual(hash);	  // is tested. toEqual is objet 
		expect(block.data).toEqual(data);        // in .test file  mimicing the 
	});					// expected object
	
	describe('genesis', () => {
		const genesisBlock = Block.genesis(); // using var decleration 2 call the block 
						     // but the Block class itself

		it('Returns an instance of the of the collection of specs in the describe', () => {
			expect(genesisBlock instanceof Block).toBe(true); // instance of expects the first statement and
									// and second statement to be the same data
								       // the same data type 
	});
		it('Returns the genesis data', () => {
			expect(genesisBlock).toEqual(GENESIS_DATA)
	});

	});
});

