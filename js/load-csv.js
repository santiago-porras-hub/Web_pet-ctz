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

function edit(){
	allData[0] = {...allData[0],sex : "MACHO"};
}

function addNewPet(){

  console.log(allData[allData.length-1]);
  allData.push({"microchip" : "1312312", "species" : "1312312", "sex" : "1312312", "size" : "1312312", "potentDangerous" : "1312312", "neighborhood" : "1312312"});
  console.log(allData[allData.length-1]);



