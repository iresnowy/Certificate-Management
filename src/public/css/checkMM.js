$(document).ready(function(){

const abi=[
	{
		"constant": false,
		"inputs": [
			{
				"name": "code",
				"type": "string"
			},
			{
				"name": "title",
				"type": "string"
			},
			{
				"name": "studentName",
				"type": "string"
			},
			{
				"name": "dataOfBirth",
				"type": "string"
			},
			{
				"name": "yearOfGraduation",
				"type": "string"
			},
			{
				"name": "degreeClassification",
				"type": "string"
			},
			{
				"name": "modeOfStudy",
				"type": "string"
			}
		],
		"name": "addCetificate1",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "code",
				"type": "string"
			},
			{
				"name": "date",
				"type": "string"
			},
			{
				"name": "author",
				"type": "string"
			},
			{
				"name": "status",
				"type": "string"
			}
		],
		"name": "addCetificate2",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			},
			{
				"name": "title",
				"type": "string"
			},
			{
				"name": "studentName",
				"type": "string"
			},
			{
				"name": "dataOfBirth",
				"type": "string"
			},
			{
				"name": "yearOfGraduation",
				"type": "string"
			},
			{
				"name": "degreeClassification",
				"type": "string"
			},
			{
				"name": "modeOfStudy",
				"type": "string"
			}
		],
		"name": "updateCetificate1",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "index",
				"type": "uint256"
			},
			{
				"name": "date",
				"type": "string"
			},
			{
				"name": "author",
				"type": "string"
			},
			{
				"name": "updateBy",
				"type": "string"
			},
			{
				"name": "status",
				"type": "string"
			},
			{
				"name": "timeUpdate",
				"type": "string"
			}
		],
		"name": "updateCetificate2",
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
				"name": "_code",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_title",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_studentName",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_dataOfBirth",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_yearOfGraduation",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_degreeClassification",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_modeOfStudy",
				"type": "string"
			}
		],
		"name": "eventUpdateCetificate1",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "_code",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_date",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_author",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_updateBy",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_status",
				"type": "string"
			},
			{
				"indexed": false,
				"name": "_timeUpdate",
				"type": "string"
			}
		],
		"name": "eventUpdateCetificate2",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "cetificates1",
		"outputs": [
			{
				"name": "code",
				"type": "string"
			},
			{
				"name": "title",
				"type": "string"
			},
			{
				"name": "studentName",
				"type": "string"
			},
			{
				"name": "dataOfBirth",
				"type": "string"
			},
			{
				"name": "yearOfGraduation",
				"type": "string"
			},
			{
				"name": "degreeClassification",
				"type": "string"
			},
			{
				"name": "modeOfStudy",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "cetificates2",
		"outputs": [
			{
				"name": "code",
				"type": "string"
			},
			{
				"name": "date",
				"type": "string"
			},
			{
				"name": "author",
				"type": "string"
			},
			{
				"name": "updateBy",
				"type": "string"
			},
			{
				"name": "status",
				"type": "string"
			},
			{
				"name": "timeUpdate",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "cetificatesCount1",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "cetificatesCount2",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

const addressSM="0x15274c6e5139c37eD2b8D5aeeda9DA09Dd036b72";


const web3= new Web3(window.ethereum);
window.ethereum.enable();

var contract_MM= new web3.eth.Contract(abi, addressSM);
console.log(contract_MM);

// var provider= new Web3.providers.WebsocketProvider("wss://kovan.infura.io/ws/v3/033ba1bd6df6493880796bdd791588a8")
// var web3_infura= new Web3(provider);
// var contract_infura= web3_infura.eth.Contract(abi, addressSM)
// console.log(contract_infura)
// contract_infura.events.eventUpdateCetificate1({filter:{},fromBlock:"latest"},function(error, data){
// 	if(error){
// 		console.log(err)
// 	}else{
// 		console.log(data)
// 		console.log(data.returnValues[1])
		// const upda= new updatelist({
		// 	codecb:data.returnValues[1],
		// 	title:data.returnValues[2], 
		// 	name:data.returnValues[3], 
		// 	birday:data.returnValues[4], 
		// 	grayear:data.returnValues[5],
		// 	hinhthucdt:data.returnValues[6],
		// 	trinhdodt:data.returnValues[7]
		// })
		// upda.save(upda)
// 	}
// })

var currentAccount="";
checkMM();
connectandshow();

$("#btneditpoint").click(function(){
      var index=document.getElementById('codecb').value
      var title=document.getElementById('title').value
      var studentName=document.getElementById('name').value
	  var dataOfBirth=document.getElementById('birday').value
      var yearOfGraduation=document.getElementById('grayear').value
      var degreeClassification=document.getElementById('xeploai').value
	  var modeOfStudy=document.getElementById('hinhthucdt').value
	  var date=document.getElementById('ngaytao').value
	  var updateBy=document.getElementById('updater').value
	  var author=document.getElementById('author').value
	  var status=document.getElementById('status').value
	  const d= new Date()
	  var timeUpdate=Date()
	console.log(index, studentName, title, yearOfGraduation,degreeClassification,date,author,status,timeUpdate)
    contract_MM.methods.updateCetificate1(index,title, studentName, dataOfBirth,yearOfGraduation,
        degreeClassification,modeOfStudy).send({
            from: currentAccount
        });
	contract_MM.methods.updateCetificate2(index,date, author,updateBy, status,timeUpdate).send({
			from: currentAccount
			});
});

$("#btnadd").click(function(){
	var code=document.getElementById('code').value
	var title=document.getElementById('title').value
	var studentName=document.getElementById('name').value
	var dataOfBirth=document.getElementById('birday').value
	var yearOfGraduation=document.getElementById('grayear').value
	var degreeClassification=document.getElementById('xeploai').value
	var modeOfStudy=document.getElementById('hinhthucdt').value
	var date=document.getElementById('ngaytao').value
//	var updateBy=document.getElementById('updater').value
	var author=document.getElementById('author').value
	var status=document.getElementById('status').value
	
  console.log(code, studentName, title, yearOfGraduation,degreeClassification,date,author,status)
  contract_MM.methods.addCetificate1(code,title, studentName, dataOfBirth,yearOfGraduation,
	  degreeClassification,modeOfStudy).send({
		  from: currentAccount
	  });
  contract_MM.methods.addCetificate2(code,date, author, status).send({
		  from: currentAccount
		  });
});

function connectandshow(){
    connectMM().then((data)=>{
         currentAccount = data[0];
         console.log(currentAccount);
    }).catch((err)=>{
         console.log(err);
    });
};



});

async function connectMM(){
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        return accounts;
   }

function checkMM(){
    if (typeof window.ethereum !== 'undefined') {
         console.log('MetaMask is installed!');
       }else{
         console.log('Pls install MetaMask!');
       }
  }