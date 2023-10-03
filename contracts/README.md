# STAR REGISTRATION SERVICE

The Ethereum CryptoStar Dapp is a decentralized application for star registration. Users can register stars as non-fungible tokens (ERC-721) and search for registered stars.

This project is part of the [Udacity - Blockchain Developer Nanodegree Program](https://www.udacity.com/course/blockchain-developer-nanodegree--nd1309).

![star-dapp](res/star-dapp.jpg)

## Requirements for Submission

- Truffle version: v5.1.65
- Ganache version: 2.5.4.1367
- OpenZeppelin version: 2.1.2
- ERC-721 Token Name: AmazingCryptoStar
- ERC-721 Token Symbol: ACS
- Rinkeby Network Token Address: 0xe73b80eeD3238C027cD22b42b87513112a54452E
- Contract Address on Rinkeby Network: [0xe73b80eeD3238C027cD22b42b87513112a54452E](https://rinkeby.etherscan.io/address/0xe73b80eeD3238C027cD22b42b87513112a54452E)

## Project Setup

### Setting up the Back-end

Please note that to compile the back-end, you need to have a `node_modules` folder in the root directory. This project uses some outdated libraries, which you should include manually from [this link](https://s3.amazonaws.com/video.udacity-data.com/topher/2019/January/5c51c4c0_project-5-starter-code/project-5-starter-code.zip).

Once you are ready, follow these steps:
- Start Ganache at http://127.0.0.1:7545.
- Install Truffle using 'npm install -g truffle' (if not already installed).
- Execute 'truffle compile' to compile the smart contracts.
- Execute 'truffle migrate --reset' to deploy the contracts to Ganache.

### Testing the Back-end

If you want to run tests at http://127.0.0.1:9545 without affecting your Ganache environment at http://127.0.0.1:7545, do the following:
- Execute 'truffle develop' to enter the Truffle CLI.
- Execute 'test' to run the tests.
- Ensure that Ganache has not added additional transactions at the end of the test.
- To exit the Truffle CLI, simply type '.exit'.

### Deploying the Contract to the Rinkeby Test Network

To deploy the contract to the Rinkeby test network:
- Create a file named `.secret` in the root folder with a mnemonic seed for the Rinkeby network with sufficient credit.
- Create a file named `.rinkeby-infurakey` containing your Rinkeby Infura key.
- Make sure to never commit `.secret` and `.rinkeby-infurakey` to GitHub (add them to your `.gitignore` file).
- Execute 'truffle migrate --network rinkeby' to deploy the contract to the Rinkeby network.

### Setting up the Front-end

To set up the front-end:
- Navigate to the 'app' folder using 'cd app'.
- Execute 'npm install' to install all required node_modules (if not already installed).
- Execute 'npm run dev' to start the front-end.