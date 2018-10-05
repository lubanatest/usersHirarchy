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
	constructor(id, name, paent){
		this.id = id;
		this.name = name;
		this.parent = parent;
	}
}

/*
 * Read CSV File
 */
function setRoles(file, callback)
{
	var roles = [];
	
	var fileUpload = document.getElementById(file);
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
			
			if (id!="") {				 
				var role = new Role(id, name, parent);
        roles.push(role);
			}
			// -------------------------------
		}
		// callback(graph); 
};

/*
 * Read CSV File
 */
function setUsers(file, callback)
{
	var users = [];
	
	var fileUpload = document.getElementById(file);
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
			
			if (id!="") {				 
				var user = new User(id, name, role);
        users.push(user);
			}
			// -------------------------------
		}
		// callback(graph); 
};

/*
 * Get Role Id of a user
 */
 
 function getRoleId(userId, users) {
  var user = users.find(user => user.id === userId);
  if (user)
    return user.role;
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
  // Initialize the result array
  var subOrdinators = [];
  
  // Get the role id of a user
  var roleId = getRoleId(userId, users);
  
  // Get the Children roles of a role
  var children = getChildren(roleId, roles);
  
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

