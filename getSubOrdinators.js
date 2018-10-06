
/*
 * Get Role Id of a user
 */
 
 function getRoleId(userId, users) {
  var item = users.find(user => user.id == userId);
  if (item)
    return item.role;
  console.log('The user is not found');
 };
 
 /*
  * Get the Children roles of a role
  */
  function getChildren(roleId, roles) {
    var node = roles.find(roleId);
	  var children = [];
	  if (node)
		  children = node.children;
    for (var i = 0; i < children.length; i++) {
	    children = children.concat(getChildren(children[i].role.id, roles));
    }  
    return [...new Set(children)];
  };
 
 /*
  * Get the users of a role
  */
  function getUsers(roleId, users) {
    var subordinators = users.filter(user => user.role === roleId);
      return subordinators;
  };
 
/*
 * Recursive Function to get a user subordinators.
 */
function getSubOrdinators(userId, users, roles) {
	console.log('sub ordinators');
  // Initialize the result array
  var results = [];
  
  // Get the role id of a user
  var roleId = getRoleId(userId, users);
	
  // Get the Children roles of a role
  var children = getChildren(roleId, roles);
  console.log('Children roles');
  console.log(children);
	
  // For each child role get the users
  for (var i = 0; i < children.length; i++) {
    subOrdinators = getUsers(children[i].role.id, users);
    results = results.concat(subOrdinators);
  }
  
  return results;
}
// ----------------------------------

