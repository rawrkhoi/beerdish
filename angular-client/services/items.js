angular.module('app')
  .service('itemsService', function itemsService($http) {
    this.getRecipe = (query, callback) => {
      $http.get(`https://api.edamam.com/search?app_id=b9d531b7&app_key=4ce2f6ffaefc283787ab3b2c58b95f90&q=${query}`, {})
        .then(({ data }) => {
          if (callback) { callback(data); }
        })
        .catch((err) => { console.log(err); });
    };
    this.getBeer = (callback) => {
      $http.get('/beer', {})
        .then(({ data }) => {
          if (callback) { callback(data); }
        })
        .catch((err) => { console.log(err); });
    };
  });
