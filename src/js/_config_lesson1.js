Config_Lesson1ABI = [
	{
		"constant": true,
		"inputs": [],
		"name": "getBackgroundColor",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_colorId",
				"type": "uint8"
			}
		],
		"name": "setBackgroundColor",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "oldColor",
				"type": "uint8"
			},
			{
				"indexed": false,
				"name": "newColor",
				"type": "uint8"
			}
		],
		"name": "ChangedColor",
		"type": "event"
	}
]
