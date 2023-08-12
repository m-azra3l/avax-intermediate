# AVAX-Intermediate-Module-2

This is the second project in AVAX-Intermediate, in this project I am tasked to create a simple contract with 2-3 functions. Then show the values of those functions in frontend of the application.

## Getting Started

### Requirement

MetaMask

### Executing program

Download the codes by downloading the entire repository which will give you access to other contencts of the repository.In the project directory,  run:

```shell

 yarn install

```

After installing the dependences, run:

```shell
yarn hardhat node
```

Open a second terminal and run the following command to deploy the contract on local hardhat node:

```shell
yarn hardhat run scripts/deploy.js --network localhost
```

After deploying the contract, [add hardhat to your metamask]('https://support.chainstack.com/hc/en-us/articles/4408642503449-Using-MetaMask-with-a-Hardhat-node#:~:text=Connect%20to%20the%20Hardhat%20network%20fork%20in%20MetaMask,URL%3A%20http%3A%2F%2F127.0.0.1%3A8545%2F%20ChainID%3A%2031337%204%204.%20Click%20Save.'), chain ID is 1337. Go to the first terminal and copy any of the private keys (best to copy the first one) and import it into metamask. In the second terminal,run:

```shell
yarn start
```

This runs the app frontend in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
You can also run the following commands to get help or test the contract:

```shell
yarn hardhat help
yarn hardhat test
```

## Author

[Michael](https://github.com/m-azra3l)

## License

This project is licensed under the [MIT License](LICENSE).
