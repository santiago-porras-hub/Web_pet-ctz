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


function edit(){
	
	console.log(allData[0] );
	for (var i = 0; i < allData.length; i++) {
		
	console.log(allData[allData.length-1]);
	var microchip = allData[i]["microchip"]=document.getElementById('upmicro').value;
	var species=  allData[i]["species"]=document.getElementById('upspecie').value;
	var sex =allData[i]["sex"]=document.getElementById('upsex').value;
	var size =allData[i]["size"]=document.getElementById('upsize').value;
	var potent=allData[i]["potentDangerous"]=document.getElementById('uppotent').value;
	var neigh=allData[i]["neighborhood"]=document.getElementById('upneighboorhood').value;

	allData.push({"microchip": microchip,"species": species,"sex": sex,"size": size,"potentDangerous":potent,"neighborhood":neigh,"race": document.getElementById('uprace').value});
	console.log(allData[0] );
	}
	

	
}

function addNewPet(){

	allData.push({"microchip" : document.getElementById('Microchip').value, "species" : document.getElementById('Specie').value, "sex" : document.getElementById('Sex').value, "size" :document.getElementById('Size').value, "potentDangerous" : document.getElementById('Potent').value, "neighborhood" : document.getElementById('Neighborhood').value});	
}

function printData(data){

	for(var i = 1; i < table.rows.length; i++)
	{

		for(var j = 0; j < table.rows[i].cells.length; j++)
		{
			table.rows[i].cells[0].innerHTML = allData[i-1]["microchip"];
		}

		for(var j = 0; j < table.rows[i].cells.length; j++)
		{
			table.rows[i].cells[1].innerHTML = allData[i-1]["species"];
		}

		for(var j = 0; j < table.rows[i].cells.length; j++)
		{
			table.rows[i].cells[2].innerHTML = allData[i-1]["sex"];
		}

		for(var j = 0; j < table.rows[i].cells.length; j++)
		{
			table.rows[i].cells[3].innerHTML = allData[i-1]["size"];
		}

		for(var j = 0; j < table.rows[i].cells.length; j++)
		{
			table.rows[i].cells[4].innerHTML = allData[i-1]["potentDangerous"];
		}

		for(var j = 0; j < table.rows[i].cells.length; j++)
		{
			table.rows[i].cells[5].innerHTML = allData[i-1]["neighborhood"];
		}
	}


}









