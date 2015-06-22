// Code goes here

var app = angular.module('contacts', ['angular-md5']);
app.controller('ContactsCtrl', function($scope, md5){
  console.log("ctrl");
  $scope.contacts = [
    {fname:"tania",
    lname:"leon",
    email:"valentina531@gmail.com",
    phone:"444 3333",
    gravatar:"http://www.gravatar.com/avatar/md5.createHash(valentina531@gmail.com)"},

    {fname:"stan",
    lname:"liu",
    email:"skl92@gmail.com",
    phone:"444 3432",
    gravatar:"http://www.gravatar.com/avatar/md5.createHash(skl92@gmail.com)"},

    {fname:"bonne",
    lname:"so",
    email:"so_bonnie@gmail.com",
    phone:"444 3432",
    gravatar:"http://www.gravatar.com/avatar/md5.createHash(so_bonnie@gmail.com)"},
    {fname:"samer",
    lname:"buna",
    email:"samer.buna@gmail.com",
    phone:"444 3432",
    gravatar:"http://www.gravatar.com/avatar/md5.createHash(samer.buna@gmail.com)"}
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
    $scope.hash = md5.createHash($scope.email);
    return $scope.hash;
  });

});
