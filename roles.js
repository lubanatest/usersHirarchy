// ----------------------------------
// class Role
// ----------------------------------
class Role {
  /*
   * Constructor
   */
	constructor(id, name, parent){
		this.id = id.trim();
		this.name = name;
		this.parent = parent.trim();
	}
}

// ----------------------------------
// class Node
// ----------------------------------
function Node(role) {
    this.role = role;
    this.children = [];
}

// ----------------------------------
// class Tree
// ----------------------------------
function Tree() {
  this.root = null;
}
	
Tree.prototype.add = function(role) {
  var node = new Node(role);
  var parent = this.find(role.parent);
  if(parent) {
    parent.children.push(node);
  } else {
    if(!this.root) {
      this.root = node;
    } else {
      return 'Root node is already assigned';
    }
  }
};

Tree.prototype.find = function(role) {
  if (this.root === null)
	return null;
  var queue = [this.root];
  while(queue.length) {
    var node = queue.shift();
    if(node.role.id === role) {
      return node;
    }
    for(var i = 0; i < node.children.length; i++) {
      queue.push(node.children[i]);
    }
  }
  return null;
};

Tree.prototype.print = function() {
  var string = "Roles Tree \n";
  if(!this.root) {
	return console.log('No root node found');
  }
  var queue = [this.root];
  while(queue.length) {
    var node = queue.shift();
    string += node.role.name + ' ';
    if(queue.length) {
      string += '|';
    }
    for(var i = 0; i < node.children.length; i++) {
      string += ' \n ';
      queue.push(node.children[i]);
    }
  }
  console.log(string.trim());
};

/*
 * Read CSV File
 */
function setRoles(fileName, callback)
{
	console.log('set Roles');
	var roles = new Tree();
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
				roles.add(role);
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
