'use strict';

var app = angular.module('apiViewer');

app.controller('detailCtrl', function($scope, name){
    console.log(name);
    $scope.pokie = name.data;

});
app.controller('listCtrl', function($scope, $state, Pokemon) {
  Pokemon.getAll()
  .then(pokemon => {
      console.log(pokemon.data.results);
    $scope.pokemon = pokemon.data.results;
    $scope.currentPokemon = [];

    for(var i= 0; i<=19; i++){
        $scope.currentPokemon.push($scope.pokemon[i]);
    }
  });

  var startIndex = 0;
  var endIndex = 19;
  $scope.nextList =() => {
      if(endIndex+20 <= $scope.pokemon.length ){
          startIndex += 20;
          endIndex += 20
          $scope.currentPokemon = [];
          for(var i= startIndex; i<=endIndex; i++){
              $scope.currentPokemon.push($scope.pokemon[i]);
          }
      }else{
          $scope.currentPokemon = $scope.currentPokemon;
      }

  }
  $scope.previousList =() => {
      if(startIndex-20 >= 0){
          startIndex -= 20;
          endIndex -= 20
          $scope.currentPokemon = [];
          for(var i= startIndex; i<=endIndex; i++){
              $scope.currentPokemon.push($scope.pokemon[i]);
          }
      }else {
          $scope.currentPokemon = $scope.currentPokemon;
      }

  }

});



app.controller('homeCtrl', function(){
    console.log('homeCtrl');
});
app.controller('contactCtrl', function($scope, $state){
    console.log('contactCtrl');

});
