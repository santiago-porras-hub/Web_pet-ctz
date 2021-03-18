var allData;
d3.dsv( ";", "../data/pets-citizens.csv" )
.then( function( data ) {

	allData= data;
	
	printData();
	edit();
	addNewPet();
} )
.catch( function( error ) {

} );

var dataPoints = [];

for (var prop in allData) {
    var arr = [];
    for(key in allData[prop]){
        arr.push(allData[prop][key]);
    }
    dataPoints.push(arr);
}   


function edit(){
	
	console.log(allData[0] );
	
	console.log(allData[allData.length-1]);

	var microchip = document.getElementById('upmicro').value;
	

	for (var i = 0; i < allData.length; i++) {

		if( microchip= allData[i].microchip){

			var species=  allData[i]["species"]=document.getElementById('upspecie').value;
			var sex =allData[i]["sex"]=document.getElementById('upsex').value;
			var size =allData[i]["size"]=document.getElementById('upsize').value;
			var potent=allData[i]["potentDangerous"]=document.getElementById('uppotent').value;
			var neigh=allData[i]["neighborhood"]=document.getElementById('upneighboorhood').value;

			allData.push({"microchip": microchip,"species": species,"sex": sex,"size": size,"potentDangerous":potent,"neighborhood":neigh,"race": document.getElementById('uprace').value});
			console.log(allData[0] );
			break;
		}

	}
	
}

function addNewPet(){

	allData.push({"microchip" : document.getElementById('Microchip').value, "species" : document.getElementById('Specie').value, "sex" : document.getElementById('Sex').value, "size" :document.getElementById('Size').value, "potentDangerous" : document.getElementById('Potent').value, "neighborhood" : document.getElementById('Neighborhood').value});	
}

$(document).ready(function() {
    $('#example').DataTable( {
        data: dataPoints,
        columns: [
            { title: "Microchip" },
            { title: "Position" },
            { title: "Office" },
            { title: "Extn." },
            { title: "Start date" },
            { title: "Salary" }
        ]
    } );
} );

function mostrar(){
  var archivo = document.getElementById("file").files[0];
  var reader = new FileReader();
  if (file) {
    reader.readAsDataURL(archivo );
    reader.onloadend = function () {
      document.getElementById("img").src = reader.result;
    }
  }
}













