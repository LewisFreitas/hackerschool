var colors = {
  1 : 'yellow',
  2 : 'red',
  3 : 'blue',
  4 : 'green',
  5 : 'pink',
  6 : 'orange'
}

App = {

  Lesson1ABI : Config_Lesson1ABI,
  Lesson1Address : Config_Lesson1Address,
  Lesson1Instance : null,

  Lesson2ABI : Config_Lesson2ABI,
  Lesson2Address : Config_Lesson2Address,
  Lesson2Instance : null,

  Lesson3ABI : Config_Lesson3ABI,
  Lesson3Address : Config_Lesson3Address,
  Lesson3Instance : null,

  Lesson4ABI : Config_Lesson4ABI,
  Lesson4Address : Config_Lesson4Address,
  Lesson4Instance : null,

  Lesson5ABI : Config_Lesson5ABI,
  Lesson5Address : Config_Lesson5Address,
  Lesson5Instance : null,

  init : function(){

  },

  initWeb3 : function(){

  },

  loadContracts : function(){
    /*Lesson1*/
    var Lesson1Contract = web3.eth.contract(App.Lesson1ABI);
    App.contracts.Lesson1Contract = Lesson1Contract;
    App.Lesson1Instance = Lesson1Contract.at(App.Lesson1Address);

    /*TODO Add Lesson2*/

    /*TODO Add Lesson2*/

    /*TODO Add Lesson3*/

    /*TODO Add Lesson4*/

    /*TODO Add Lesson5*/

  },

  checkConnection: function(){
    web3.version.getNetwork((err, netId) => {
      var account = web3.eth.accounts[0];
      switch (netId) {
        case "1":
          if(account !== undefined){
            console.log("Not logged-in: Connected to Main Ethereum network.");
          }
          else{
            console.log("Logged-in: Connected to Main Ethereum network.");
          }
          /*TODO: Add Ropsten network case.*/
          break
        default:
          console.log("Connected to default network.");
      }
    });
  },

  eventListenerContracts : function(){

  }
}

$(function(){
  $(window).on('load', function(){
    App.init();
    App.eventListenerContracts();
  });
})
