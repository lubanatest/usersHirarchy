# Users Hierarchy

## Description

To get the subordinators of a user:
The roles and the users’ information are saved in CSV files.

### setRoles function:
This function reads the CSV file and save the data into Tree Structure.
### setUsers function:
This function reads the CSV file and save the data into array of users.

A Tree structure which has the following methods:
### Add:
This method adds a new node to the tree. The node contains a role object with (id, name, parent attributes) and an array of children to save the children of a role.
### Find:
This method searches the tree to find a role by ID.
### Print:
This is a recursive method to print the tree.

<a href="https://lubanatest.github.io/usersHirarchy/" > example </a>
