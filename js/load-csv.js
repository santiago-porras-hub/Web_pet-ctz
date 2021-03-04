var allData;
d3.dsv( ";", "../data/pets-citizens.csv" )
  .then( function( data ) {

  allData= data;
printData();
  } )
  .catch( function( error ) {
  
  } );

  function printData(data){
  	console.log(data);
  }
