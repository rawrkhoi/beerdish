angular.module('app')
  .service('itemsService', function itemsService($http) {
    // this.db to talk to database
    this.getAll = (query, callback) => {
      // $http.get('https://api.edamam.com/search', {
      //   parameters: {
      //     app_id: window.EDAMAM_API_ID,
      //     app_key: window.EDAMAM_API_KEY,
      //     q: query,
      //     headers: {
      //       'Access-Control-Allow-Origin': '*',
      //     },
      //   },
      // })
      $http.get('https://api.punkapi.com/v2/beers', {
        params: {
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        },
      })
        .then(({ data }) => {
          if (callback) {
            console.log(data);
            callback(data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
  });
