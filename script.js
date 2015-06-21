// Code goes here

var app = angular.module('contacts', ['angular-md5']);
app.controller('ContactsCtrl', function($scope, md5){
  console.log("ctrl");
  $scope.contacts = [
    {fname:"tania",
    lname:"leon",
    email:"valentina531@gmail.com",
    phone:"444 3333",
    grav:"grav"},

    {fname:"stan",
    lname:"liu",
    email:"skl@gmail.com",
    phone:"444 3432",
    gravatar:"s ta"},

    {fname:"bonne",
    lname:"so",
    email:"so_bonnie@gmail.com",
    phone:"444 3432",
    gravatar:"b ta"}
  ];
  $scope.contact = {};
  $scope.addContact = function(contact){
    console.log("click");
    $scope.contacts.push(contact);
    console.log("$scope.contacts: ", $scope.contacts);
    $scope.contact = '';
  };
  $scope.$watch('email' ,function() {
    $scope.message = 'Your email Hash is: ' + md5.createHash($scope.email || '');
  });

});
