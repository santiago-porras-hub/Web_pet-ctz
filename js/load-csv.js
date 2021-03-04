var allData;
d3.dsv( ";", "C:\Users\santi\Web_pet-ctz\data\pets-citizens.csv" )
  .then( function( data ) {

  allData= data;
printData();
  } )
  .catch( function( error ) {
  
  } );

  function printData(data){
  	console.log(data);
  }
