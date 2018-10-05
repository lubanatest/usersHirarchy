// ----------------------------------
// class User
// ----------------------------------
class User 
{
  /*
   * Constructor
   */
	constructor(id, name, role){
		this.id = id;
		this.name = name;
		this.role = role;
	}
}

// ----------------------------------
// class Role
// ----------------------------------
class Role 
{
  /*
   * Constructor
   */
	constructor(id, name, parent){
		this.id = id;
		this.name = name;
		this.parent = parent;
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
		var text = e.target.result;
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
		var text = e.target.result;  
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
 * Get Role Id of a user
 */
 
 function getRoleId(userId, users) {
  var item = users.find(user => user.id === userId);
  if (item)
    return item.role;
 };
 
 /*
  * Get the Children roles of a role
  */
  function getChildren(roleId, roles) {
    var children = roles.filter(role => role.parent === roleId);
    if (children)
      return children;
    return [];
  };
 
 /*
  * Get the users of a role
  */
  function getUsers(roleId, users) {
    var subordinators = users.filter(user => user.role === roleId);
    if (subordinators)
      return subordinators;
    return [];
  };
 
/*
 * Recursive Function to get a user subordinators.
 */
function getSubOrdinators(userId, users, roles) {
	console.log('sub ordinators');
  // Initialize the result array
  var subOrdinators = [];
  
  // Get the role id of a user
  var roleId = getRoleId(userId, users);
  console.log(roleId);
  // Get the Children roles of a role
  var children = getChildren(roleId, roles);
  console.log(children);
  // For each child role get the users
  for (var i; i < children.length; i++) {
    subOrdinators = getUsers(i);
    for (var j; j < subOrdinators.length; j++) {
      subOrdinators = [...subOrdinators, getSubOrdinators(j, users, roles)];
    }
  }
  
  return subOrdinators;
}
// ----------------------------------

