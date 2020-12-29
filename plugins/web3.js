import Portis from '@portis/web3';
import Web3 from 'web3';

export default async function (context, inject) {
    const portis = new Portis('211b48db-e8cc-4b68-82ad-bf781727ea9e', 'rinkeby');
    console.log(portis);
    console.log(portis.provider);
    const web3 = new Web3(portis.provider);
    inject('portis', portis);
    inject('web3', web3);

}