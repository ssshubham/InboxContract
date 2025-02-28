const HDWallerProvider = require('@truffle/hdwallet-provider');
const {Web3} = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWallerProvider(
    ' accident multiply burger legend vivid security burst never relax fever team side',
    'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
);

const web3 = new Web3(provider);

const deploy = async() => {
    const account = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['Hi there!']})
    .send({gas: '1000000', from: accounts[0]});

    console.log('Contract deployed at ', result.options.address)
};