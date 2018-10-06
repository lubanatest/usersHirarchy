// ----------------------------------
// class User
// ----------------------------------
class User 
{
  /*
   * Constructor
   */
	constructor(id, name, role){
		this.id = id.trim();
		this.name = name;
		this.role = role.trim();
	}
}

/*
 * Read CSV File
 */
function setUsers(fileName, callback)
{
	console.log('set Users');
	var users = [];
	var fileUpload = document.getElementById(fileName);
	var reader = new FileReader();
		
	reader.onload = function (e) {
		var text = e.target.result.replace(/\"/g, "");  
		var rows = text.split("\n");		

		for (var i = 0; i < rows.length; i++) {
			
			// For each line in the CSV File:
			// insert data into Tree
			// -------------------------------
			
			var items = rows[i].split(",");
			var id = items[0];
			var name = items[1];
			var role = items[2];
			
			if (id != "") {				 
				var user = new User(id, name, role);
				users.push(user);
			}
		}
		users = callback(users); 
	};
	
	reader.onerror = function (e){
		if(e.target.error.name == "NotReadableError") {
			alert("Canno't read file !");
		}
		
	};
	if (fileUpload)
		reader.readAsText(fileUpload.files[0]);
	return users;
};

/*
 * Print Array of Users into HTML Table
 */
function createTable(tableData) {
  var table = document.createElement('table');
  var tableBody = document.createElement('tbody');

  tableData.forEach(function(rowData) {
    var row = document.createElement('tr');
      var cell = document.createElement('td');
      cell.appendChild(document.createTextNode(rowData.id));
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.appendChild(document.createTextNode(rowData.name));
      row.appendChild(cell);

      cell = document.createElement('td');
      cell.appendChild(document.createTextNode(rowData.role));
      row.appendChild(cell);

    tableBody.appendChild(row);
  });

  table.appendChild(tableBody);
  var label = document.createElement('h3');
  label.innerHTML = 'Results';
  document.getElementById('table').appendChild(label);
  document.getElementById('table').appendChild('<br/>');
  document.getElementById('table').appendChild(table);
}
