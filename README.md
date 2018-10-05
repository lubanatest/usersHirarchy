
<html>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script> 
    <script type="text/javascript" src="getSubOrdinators.js"></script>
    <script>
  
      function getResults() {
        var userId = parseInt(document.forms["myForm"]["userId"].value);

        if (userId)
        {
          var roles = [];
          var user = [];
          setRoles('roles', function(results) { console.log(results); roles = results;});
          setUsers('users', function(results) { console.log(results); users = results;});

          if (users !== undefined && roles !== undefined && roles.length > 0 && users.length > 0) {
          var result = getSubOrdinators(userId, users, roles);    
            console.log('results');
            console.log(result);
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
  <table style="width:100%">
   <tr>
   <td >CSV File for Roles:</td>
   <td ><input type="file" name="roles" id="roles" onchange="" ng-model="roles" required/>
   </td>
  </tr>
  <tr>
   <td >CSV File for Users:</td>
   <td ><input type="file" name="users" id="users" onchange="" required/>
   </td>
  </tr>
  <tr>
   <td >User ID: </td>
   <td ><input type="text" name="userId" ng-model="userId" value="3" required>
    <div id="fromError" ng-show="myForm.userID.$invalid">required</div></td>
  </tr>
   
  <tr><td  colspan="2"><input type="button" onclick="getResults()" value="Get SubOrdinators" /></td></tr>
  
  </table>
  
 </form>
 </body>

