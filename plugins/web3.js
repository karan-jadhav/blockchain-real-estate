import Web3 from 'web3';

export default async function (context, inject) {
    const web3 = new Web3("ws://localhost:7545");
    inject('web3', web3);
}