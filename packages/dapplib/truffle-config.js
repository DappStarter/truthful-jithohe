require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner neck fringe speak guard render remember essay inner drop sure sleep'; 
let testAccounts = [
"0x495f25e1aa2e6d8c3e875a489db0259a755c3ace74dc48a73cd93b1cceaf5a04",
"0x658ff1490a241a7a556b1367d58e5591b04c211a93de163eda08271d7ce667f9",
"0xff0e0f77d0bcbbceddee857e5425d3e306d0d5f9859a820e5390b6136b187a73",
"0x6737d1f325b4b49adc0323b40c23e5ed99dce3326805f129aff165d63b6fc579",
"0x429c3d193102db37088ca1b2bd04aa05f40cb9c552ffb6e6be83b3b91b5a6d78",
"0x784fd6f34259adab8f740dd0365ff1d4380fc5e58fd1034348e5a0de67332506",
"0xff9d80ee7553ac0eb0089fb7dcde76da63e5cdc3db7121bb18ff1d90370d506f",
"0x5114c2fd76125bc1d6a5d367514684241b2befb318effcf549524fd8257919bf",
"0x4ac22627b90298dfcffa827d527359a5b265a1d05c206236a94990f488e1c895",
"0x34e6bc872572ffb2db4612ca35b8c1274501fa8cce866047fdfd52c73679e14a"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

