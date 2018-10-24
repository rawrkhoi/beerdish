angular.module('app')
  .controller('AppCtrl', function AppCtrl(itemsService) {
    this.searchService = itemsService;
    this.searchRecipe = (data) => {
      this.recipe = data;
      console.log(data, 'got recipe');
    };

    this.searchBeer = (data) => {
      this.beer = data;
      console.log(data, 'got beer');
    };

    itemsService.getBeer(this.searchBeer);
    itemsService.getRecipe('steak', this.searchRecipe);
  })

  .component('app', {
    bindings: {},
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html',
  });
