
<html>
  <head>
    <style>
      td {
        text-align : left;
      }
      th {
        text-align : left;
        font-weight: bold;
      }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script> 
    <script type="text/javascript" src="getSubOrdinators.js"></script>
    <script type="text/javascript" src="roles.js"></script>
    <script type="text/javascript" src="users.js"></script>
    
    <script>
  
      var roles = new Tree();
      var user = [];
      /*
       * readRoles
       * Read CSV File and save the data into array
       */
      function readRoles() {
              setRoles('roles', function(results) { roles = results; roles.print();});
      }
      /*
       * readUsers
       * Read CSV File and save the data into array
       */
      function readUsers() {
              setUsers('users', function(results) { console.log(results); users = results;});
      }
  
      /*
       * getSubOrdinators
       */
       
      function getResults() {
        var userId = document.forms["myForm"]["userId"].value;

        if (userId)
        {
          if (users !== undefined && roles !== undefined && users.length > 0) {
          var result = getSubOrdinators(userId, users, roles);    
            console.log('results');
            console.log(result);
            createTable(result);
          } else {
            console.log('error in the data');
          }
         } 
       }
    </script>
  </head>
  <body>
<h3>Users Hirarchy</h3>

<h3>Please enter the following information:</h3>
 
 <form name="myForm">
  <table>
   <tr>
   <td >CSV File for Roles:</td>
   <td ><input type="file" name="roles" id="roles" onchange="readRoles()" ng-model="roles" required/>
   </td>
  </tr>
  <tr>
   <td >CSV File for Users:</td>
   <td ><input type="file" name="users" id="users" onchange="readUsers()" required/>
   </td>
  </tr>
  <tr>
   <td >User ID: </td>
   <td ><input type="text" name="userId" ng-model="userId" value="1" required>
    <div id="fromError" ng-show="myForm.userID.$invalid">required</div></td>
  </tr>
   
  <tr><td  colspan="2"><input type="button" onclick="getResults()" value="Get SubOrdinators" /></td></tr>
  
  </table>
  
  <br/>
  <br/>
  
  <div id='table'>
    <!-- The Results will be displayed here -->
  </div>
  
 </form>
 </body>

