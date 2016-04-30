'use strict';

var app = angular.module('apiViewer');

app.service('Pokemon', function($q, $http){

    this.getAll = () => {
        return $q((resolve, reject) => {
        var pokemon = $http.get('http://pokeapi.co/api/v2/pokemon-species/?limit=721&offset=260');
        resolve(pokemon)
        });
    };
    this.getByName = name => {
        return $q((resolve, reject) => {
            var singlePokemon = $http.get(`http://pokeapi.co/api/v2/pokemon/${name}`);
             if(singlePokemon){
                 resolve(singlePokemon);  // trigger  .then()
             }else{
                 reject(new Error('singlePokemon not found')); // trigger .catch()
             }
        });
    };
});
