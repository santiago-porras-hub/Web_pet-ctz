var allData;
d3.dsv( ";", "../data/pets-citizens.csv" )
.then( function( data ) {

	allData= data;
	printData();
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
