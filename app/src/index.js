import Web3 from "web3";
import starNotaryArtifact from "../../build/contracts/StarNotary.json";

const App = {
  web3: null,
  account: null,
  meta: null,

  start: async function() {
    const { web3 } = this;

    try {
      // Get contract instance
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = starNotaryArtifact.networks[networkId];
      this.meta = new web3.eth.Contract(
        starNotaryArtifact.abi,
        deployedNetwork.address
      );

      // Get accounts
      const accounts = await web3.eth.getAccounts();
      this.account = accounts[0];
    } catch (error) {
      console.error("Could not connect to the contract or blockchain.");
    }
  },

  setStatus: function(message) {
    const status = document.getElementById("status");
    status.innerHTML = message;
  },

  createStar: async function() {
    const { createStar } = this.meta.methods;
    const name = document.getElementById("starName").value;
    const id = document.getElementById("starId").value;
    await createStar(name, id).send({ from: this.account });
    App.setStatus("New Star Owner is " + this.account + ".");
  },

  lookUp: async function() {
    const { lookUptokenIdToStarInfo } = this.meta.methods;
    const id = document.getElementById("lookid").value;
    const starName = await lookUptokenIdToStarInfo(id).call();

    let status;
    if (starName === "") {
      status = 'Error! No star found with the selected ID: ' + id;
    } else {
      status = 'Found star [' + starName + '] with the selected ID: ' + id;
    }

    App.setStatus(status);
  }
};

window.App = App;

window.addEventListener("load", async function() {
  if (window.ethereum) {
    // Use MetaMask's provider
    App.web3 = new Web3(window.ethereum);
    await window.ethereum.enable(); // Get permission to access accounts
  } else {
    console.warn(
      "No web3 detected. Falling back to http://127.0.0.1:9545. You should remove this fallback when you deploy live."
    );
    // Fallback - use your fallback strategy (local node / hosted node + in-dapp ID management / fail)
    App.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9545"));
  }

  App.start();
});
