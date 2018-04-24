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

  // Lesson2ABI : Config_Lesson2ABI,
  // Lesson2Address : Config_Lesson2Address,
  // Lesson2Instance : null,
  //
  // Lesson3ABI : Config_Lesson3ABI,
  // Lesson3Address : Config_Lesson3Address,
  // Lesson3Instance : null,
  //
  // Lesson4ABI : Config_Lesson4ABI,
  // Lesson4Address : Config_Lesson4Address,
  // Lesson4Instance : null,
  //
  // Lesson5ABI : Config_Lesson5ABI,
  // Lesson5Address : Config_Lesson5Address,
  // Lesson5Instance : null,

  init : function(){

    return App.initWeb3();
  },

  initWeb3 : function(){
    // Is there an injected web3 instance?
    if (typeof web3 !== 'undefined') {
     App.web3Provider = web3.currentProvider;
    } else {
     App.web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');
    }
    web3 = new Web3(App.web3Provider);

    web3.eth.defaultAccount = web3.eth.accounts[0];
    console.log("setAccount: " + web3.eth.accounts[0]);
    //web3 = new Web3(App.web3Provider);

    return App.loadContracts();
  },

  loadContracts : function(){
    /*Lesson1*/
    var Lesson1Contract = web3.eth.contract(App.Lesson1ABI);
    App.Lesson1Instance = Lesson1Contract.at(App.Lesson1Address);

    /*TODO Add Lesson2*/

    /*TODO Add Lesson2*/

    /*TODO Add Lesson3*/

    /*TODO Add Lesson4*/

    /*TODO Add Lesson5*/

    return App.checkConnection();

  },

  checkConnection: function(){
    web3.version.getNetwork((err, netId) => {
      var account = web3.eth.accounts[0];
      switch (netId) {
        case "3":
          var account = web3.eth.accounts[0];
          if(account !== undefined){
            console.log("Connected to Ropsten");
            console.log("Logged to Metamask");
          }
          else{
            console.log("Not connected to Ropsten");
          }
          break
        default:
          console.log("Connected to default network.");
      }
    });
  },

  eventListenerContracts : function(){
    var changedColor = App.Lesson1Instance.ChangedColor();

    changedColor.watch(function(error, result){
        if (!error){
            console.log(result);
            var newColor = web3.toDecimal(result.args.newColor);
            var oldColor = web3.toDecimal(result.args.oldColor);
            App.handleColorChanges(oldColor, newColor);
        }
    });
  },

  handleStatus : function(status){

  },

  handleColorChanges : function(oldColor, newColor){
    $("#oldColor").css("background-color", colors[oldColor]);
    $("#newColor").css("background-color", colors[newColor]);
  }
}

$(function(){
  $(window).on('load', function(){
    App.init();
    App.eventListenerContracts();
  });
})
