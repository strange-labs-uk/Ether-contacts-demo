# Ethereum people contacts demo
A demo Ethereum based Dapp and smart contract to save and retrieve contacts.

## 
First install [nodejs and
npm](https://docs.npmjs.com/getting-started/installing-node).

```bash
$ node --version
v9.11.1
```
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Then install dependencies:

```bash
cd peoplelistui && npm install
```

## using ganache and truffle to compile and run tests
If you haven't got them, install first:
```bash
npm install -g truffle
npm install -g ganache-cli
```

Then run a development server in one window:

```bash
ganache-cli
```

In another window run to deploy the contract to the blockchain:
```bash
truffle  migrate
```

Run the development console mode, you will need it to add contact data later:
```bash
truffle console
```

## Run frontend
Lastly in a separate window, run the react frontend:

```bash
npm start
```

Then open your browser to http://localhost:3000/
With a bit of luck you should be good to go. Note: if you are using VPN, don't forget to add localhost to the bypass list in the network proxy settings. But since we haven't added any contacts therefore initially only an empty contacts table will be showing.

## Add a contact:
Now switch to the development console window and run:
```bash
var people = People.deployed()
people.then(function(o){return o.addPerson("jo", "bloggs", "bobloggs@example.com", 20)})
```
