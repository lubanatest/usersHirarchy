
<html>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script> 
  </head>
  <body>
    
<h3>Users Hirarchy</h3>

<h3>Please nter the following information:</h3>
 
 <form name="myForm">
  <table >
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
   <td ><input type="text" name="userId" ng-model="from" required>
    <div id="fromError" ng-show="myForm.userID.$invalid">required</div></td>
  </tr>
   
  <tr><td  colspan="2"><input type="button" onclick="validateForm()" value="Get SubOrdinators" /></td></tr>
  
  </table>
  
 </form>
 </body>

