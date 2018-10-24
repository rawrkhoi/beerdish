angular.module('app')
  .controller('AppCtrl', function AppCtrl(itemsService) {
    this.searchService = itemsService;
    this.searchRecipe = (data) => {
      this.recipes = data.hits;
      console.log(data.hits, 'got recipe');
    };

    this.searchBeer = (data) => {
      this.beers = data;
      console.log(data, 'got beer');
    };

    itemsService.getBeer(this.searchBeer);

    this.getRecipe = (query) => {
      itemsService.getRecipe(query, this.searchRecipe);
    };
  })

  .component('app', {
    bindings: {},
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html',
  });
