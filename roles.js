// ----------------------------------
// class Role
// ----------------------------------
class Role 
{
  /*
   * Constructor
   */
	constructor(id, name, parent){
		this.id = id.trim();
		this.name = name;
		this.parent = parent.trim();
	}
}

/*
 * Read CSV File
 */
function setRoles(fileName, callback)
{
	console.log('set Roles');
	var roles = [];
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
			var parent = items[2];
			
			if (id != "") {				 
				var role = new Role(id, name, parent);
				roles.push(role);
			}
		}
		roles = callback(roles); 
	};
	reader.onerror = function (e) {
		if(e.target.error.name == "NotReadableError") {
			alert("Cann't read file!");
		}
		
	};
	if (fileUpload)
		reader.readAsText(fileUpload.files[0]);
	return roles;
};
