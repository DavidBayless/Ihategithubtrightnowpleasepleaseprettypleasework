
var app = angular.module("firstApp", []);
app.controller("MyFirstController", function($scope) {
  $scope.name = "Severus Snape";
  console.log($scope);

});

app.controller("ExercisesController", function($scope) {
  $scope.favoriteColor = "#482ab2";
  $scope.secondsInACentury = 60 * 60 * 24 * 365 * 100;
  $scope.rightMeow = new Date();
  $scope.boyname = "BOY'S NAME";
  $scope.adjective = 'ADJECTIVE';
  $scope.pluralnounone = 'PLURAL NOUN';
  $scope.pluralnountwo= 'PLURAL NOUN';
  $scope.insects = 'INSECT, PLURAL';
  $scope.pluralnounthree = 'PLURAL NOUN';
  $scope.verbed = 'VERB ENDING IN "ED"';
  $scope.body = 'BODY PART';
  $scope.go = function(boyname, adjective, pluralnounone, pluralnountwo, insects, pluralnounthree, verbed, body) {
    for (var i = 0; i < arguments.length; i++) {
      arguments[i] = arguments[i].toUpperCase();
    }
    $scope.sentenceOne = "One day, " + boyname + " was walking home from class. Suddenly,";
    $scope.sentenceTwo = "a(n) "+adjective+" jackalope conservationist jumped out from behind the "+pluralnounone+".";
    $scope.sentenceThree = '"Give me your '+pluralnountwo+' or I\'ll force you to eat these '+insects+'! ';
    $scope.sentenceFour = "When suddenly, "+pluralnounthree+" came screaming by and "+verbed+" the conservationist's "+body+".";
  };
});
