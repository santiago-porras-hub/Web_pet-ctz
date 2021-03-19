var allData;
d3.dsv( ";", "../data/pets-citizens.csv" )
.then( function( data ) {

	allData= data;
	
	printData();
	edit();
	addNewPet();
	mostrar();
} )
.catch( function( error ) {

} );

function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("listingTable");
    var page_span = document.getElementById("page");

    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";

    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
        listing_table.innerHTML += allData[i].microchip +"&nbsp"+ allData[i].species + "&nbsp"+ allData[i].size+"&nbsp"+ allData[i].sex+"&nbsp" +allData[i].potentDangerous+"&nbsp"+ allData[i].neighborhood+"<br>";
    }
    page_span.innerHTML = page;

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages()
{
    return Math.ceil(allData.length / records_per_page);
}

window.onload = function() {
    changePage(1);
};





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

	allData.unshift({"microchip" : document.getElementById('Microchip').value, "species" : document.getElementById('Specie').value, "sex" : document.getElementById('Sex').value, "size" :document.getElementById('Size').value, "potentDangerous" : document.getElementById('Potent').value, "neighborhood" : document.getElementById('Neighborhood').value});	
console.log(allData[0]);
}


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

var current_page = 1;
var records_per_page = 5;

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}




