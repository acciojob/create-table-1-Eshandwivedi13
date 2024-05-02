const table_js = document.getElementById('sampleTable');
function insert_Row() {
//document.createElement('tr')//create tr & td like this and then append also works 
//but new way ->
  const newRow = table_js.insertRow();//0th or -1th idx pe insert kar sakte
  const col1 = newRow.insertCell();
  const col2 = newRow.insertCell();
	col1.innerText = "New cell1";
	col2.innerText = "New Cell2";
}
