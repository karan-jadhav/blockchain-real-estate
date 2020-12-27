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


// import Portis from '@portis/web3';
// import Web3 from 'web3';

// export default function(context, inject) {
//     const portis = new Portis('211b48db-e8cc-4b68-82ad-bf781727ea9e', 'rinkeby');
//     const web3 = new Web3(portis.provider);
//     inject('web3', web3)
// }






// import Web3 from "web3"

// export default async function(context, inject) {
//     const httpEndpoint = "http://127.0.0.1:7545"
//     const web3 = new Web3(new Web3.providers.HttpProvider(httpEndpoint))

//     inject('web3',web3)
// }
