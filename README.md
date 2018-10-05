
<html>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script> 
    <script type="text/javascript" src="getSubOrdinators.js"></script>
    <script>
  
  function getResults() {
  var roles = document.forms["myForm"]["roles"].value;
  var users = document.forms["myForm"]["users"].value;
  
  var userId = parseInt(document.forms["myForm"]["userId"].value);
  
  if (userId)
  {
  var roles = setRoles(roles);
  var users = setUsers(users);
 
      console.log(roles);
      console.log(users);
      if (users && roles) {
      var result = getSubOrdinators(userId, users, roles);     
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
   <td ><input type="file" name="roles" id="roles" onchange="" ng-model="csv" required/>
   <div id="csvError" ng-show="myForm.roles.$untouched">required</div>
   </td>
  </tr>
  <tr>
   <td >CSV File for Users:</td>
   <td ><input type="file" name="users" id="users" onchange="" ng-model="csv" required/>
   <div id="csvError" ng-show="myForm.users.$untouched">required</div>
   </td>
  </tr>
  <tr>
   <td >User ID: </td>
   <td ><input type="text" name="userId" ng-model="from" value="3" required>
    <div id="fromError" ng-show="myForm.userID.$invalid">required</div></td>
  </tr>
   
  <tr><td  colspan="2"><input type="button" onclick="getResults()" value="Get SubOrdinators" /></td></tr>
  
  </table>
  
 </form>
 </body>

