angular.module('app')
  .service('itemsService', function itemsService($http) {
    this.getAll = (query, callback) => {
      $http.get(`https://api.edamam.com/search?app_id=b9d531b7&app_key=4ce2f6ffaefc283787ab3b2c58b95f90&q=${query}`, {})
        .then(({ data }) => {
          console.log(data);
          if (callback) { callback(data); }
        })
        .catch((err) => { console.log(err); });
    };
    this.getAll = (callback) => {
      $http.get('/beer', {})
        .then(({ data }) => {
          console.log(data);
          if (callback) { callback(data); }
        })
        .catch((err) => { console.log(err); });
    };
  });
