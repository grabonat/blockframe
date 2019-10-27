const Image = artifacts.require('contracts/Image.sol')

require('chai')
    .use(require('chai-as-promised'))
    .should()

contract('Image', (accounts) => {
    let contract

    // "describe" is a container for all test examples
    // "async" testing contracts is asynchronous
    describe('deployment', async() => {

        // before hook to make the contract variable accessible throughout testing
        // runs *before* it-functions
        before (async() => {
            contract = await Image.deployed()      
        })
        
        // "it" contains test examples
        it('deploys successfully', async() => {
            // write test to see if it deployed successfully
            // stores a copy of the deployed contract inside the variable contract
            const address = contract.address
            // console.log(address)
            assert.notEqual(address, '')
            assert.notEqual(address, 0x0)
            assert.notEqual(address, null)
            assert.notEqual(address, undefined)
        })

        it('has a name', async() => {
            const name = await contract.name()
            assert.equal(name, 'Image')
        })

        it('has a symbol', async() => {
            const symbol = await contract.symbol()
            assert.equal(symbol, 'IMAGE')
        })
    })
})