
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
    console.log(roleId);
    var node = roles.find(roleId);
	  var children = [];
	  if (node)
		  children = node.children;
	  console.log('*');
	  console.log(children);
    for (var i = 0; i < children.length; i++) {
	    console.log(children[i].role.id);
	    children = children.concat(getChildren(children[i].role.id, roles));
    }  
    return children;
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
  var results = [];
  
  // Get the role id of a user
  var roleId = getRoleId(userId, users);
  console.log(roleId);
	
  // Get the Children roles of a role
  var children = getChildren(roleId, roles);
  console.log(children);
  // For each child role get the users
  for (var i = 0; i < children.length; i++) {
    subOrdinators = getUsers(children[i].role.id, users);
    console.log(subOrdinators);
	  
    results = results.concat(subOrdinators);
    console.log(results);
  }
  
  return results;
}
// ----------------------------------

