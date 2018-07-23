import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import people from './People.json';

var ETHEREUM_CLIENT = new Web3('http://localhost:8545')
var peopleContractABI = people.abi;
var last_network = Object.keys(people.networks).pop();
var peopleContractAddress = people.networks[last_network].address;
var peopleContract = new ETHEREUM_CLIENT.eth.Contract(peopleContractABI, peopleContractAddress)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstNames: [],
      lastNames: [],
      ages: []
    }
  }

  componentWillMount() {
    console.log(ETHEREUM_CLIENT)
      peopleContract.methods.getPeople().call().then((data) => {
        console.log(data);
      this.setState({
        firstNames: data[0].map(x => ETHEREUM_CLIENT.utils.hexToAscii(x)),
        lastNames: data[1].map(x => ETHEREUM_CLIENT.utils.hexToAscii(x)),
        emails: data[2].map(x => ETHEREUM_CLIENT.utils.hexToAscii(x)),
        ages: String(data[3]).split(',')
      })
    })
  }

  render() {
    var rows = [];

    for (let i in this.state.firstNames) {
      rows.push(
        <tr key={i}>
          <td>{this.state.firstNames[i]}</td>
          <td>{this.state.lastNames[i]}</td>
          <td>{this.state.emails[i]}</td>
          <td>{this.state.ages[i]}</td>
        </tr>
        )
    };
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to dApp built with React</h1>
        </header>
        <div className="App-intro">
          <table>
            <thead>
              <tr>
                <th>First name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Age</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
