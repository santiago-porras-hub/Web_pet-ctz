var allData;
d3.dsv( ";", "../data/pets-citizens.csv" )
.then( function( data ) {

	allData= data;
	printData();
	edit();
	addNewPet();
	mostrar();
	found();
	found2();
} )
.catch( function( error ) {

} );



var current_page = 1;
var records_per_page = 10;

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

function numPages()
{
	return Math.ceil(allData.length / records_per_page);
}

window.onload = function() {
	changePage(1);
};


function changePage(page)
{
	var btn_next = document.getElementById("btn_next");
	var btn_prev = document.getElementById("btn_prev");


	var listing_table = document.getElementById("listingTable");
	var listing_table2=document.getElementById("listingTable2");
	var listing_table3=document.getElementById("listingTable3");
	var listing_table4=document.getElementById("listingTable4");
	var listing_table5=document.getElementById("listingTable5");
	var listing_table6=document.getElementById("listingTable6");




	var page_span = document.getElementById("page");

    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";
    listing_table2.innerHTML="";
    listing_table3.innerHTML="";
    listing_table4.innerHTML="";
    listing_table5.innerHTML="";
    listing_table6.innerHTML="";



    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
    	listing_table.innerHTML += allData[i].microchip +"<br>";
    }
    page_span.innerHTML = page;

    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
    	listing_table2.innerHTML += allData[i].species +"<br>";
    }
    page_span.innerHTML = page;

    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
    	listing_table3.innerHTML += allData[i].sex +"<br>";
    }
    page_span.innerHTML = page;

    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
    	listing_table4.innerHTML += allData[i].size +"<br>";
    }
    page_span.innerHTML = page;

    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
    	listing_table5.innerHTML += allData[i].potentDangerous +"<br>";
    }
    page_span.innerHTML = page;

    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
    	listing_table6.innerHTML += allData[i].neighborhood +"<br>";
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





function edit(){
	
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

	console.log(allData[0])

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


function found(){

	

	if(document.getElementById("found").value== "microchip"){

		var founded = allData.find(arr=>arr.microchip === document.getElementById('find').value);

		console.log(founded);

	}

	else if(document.getElementById("found").value=="size"){

		for (var i = 0; i < allData.length; i++) {


			if(size= allData[i].size){
				var founded = allData.find(arr=>arr.size === document.getElementById('find').value);

				console.log(founded);

			}
		}

	}

	else if(document.getElementById("found").value=="specie"){

		for (var i = 0; i < allData.length; i++) {


			if(size= allData[i].specie){
				var founded = allData.find(arr=>arr.specie === document.getElementById('find').value);
				console.log(founded);

			}
		}

	}

	else if(document.getElementById("found").value=="neigh"){

		for (var i = 0; i < allData.length; i++) {


			if(size= allData[i].neighborhood){
				var founded = allData.find(arr=>arr.neighborhood === document.getElementById('find').value);
				console.log(founded);

			}
		}

	}









	

}





