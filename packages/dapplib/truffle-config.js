require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area fringe speak guard render remind evil hidden enter outer gesture'; 
let testAccounts = [
"0x991eb1978af07cfb33c80a932477859e4bc61a60f079dd988221faecc9104559",
"0x10866188b9fe7a8343846ec9d7ac21ebea6fd2161e0360c7eb3e88f8c42b4ae2",
"0xbebf67289dc22df966afcb4f9de904a02c42b8c06fb07e5e58697442aed3a2d4",
"0xb6a8191b67692247c6702ecda6be9f8d575dde2b1dc4d2528e9494c527ee1af5",
"0xa926c3a17c3e0a4da72aa9925612f21bd2f6f3c104fbd2a694eea8261aeb446d",
"0x25a0815b221b86bcec4064c2021d57ae448a9d9529f677df8b30f9d30b59adc0",
"0x869f81c0b66568bbaf8c202fffd900e35d6d7b7e5d2acb149960789a136e88fc",
"0xef5f7933eee503a30f7a63a6b95db0ff0fa994bd650df5f167b8ae695e3fb3ee",
"0x8088422f545de0da3778132b4495fa779da3d72769534b56c8329ec2808943b4",
"0x1cc86b991cf686dcbe48750aeb74e68e70bbdaf9df6c20f1dbfe8c67806032cf"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


