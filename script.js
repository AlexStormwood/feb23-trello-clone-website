console.log(trelloData);

// Data rendering file 
// Read trelloData, find the data display row and 
// generate HTML elements based on the trelloData 

function renderColumns(){
	let trelloDataRowRootNode = document.getElementById("dataDisplayRow");

	trelloDataRowRootNode.innerHTML = "";

}

renderColumns();