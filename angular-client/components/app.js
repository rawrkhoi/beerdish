angular.module('app')
  .controller('AppCtrl', (itemsService) => {
    this.searchService = itemsService;
    this.searchResults = (data) => {
      this.beer = data;
    };

    itemsService.getAll('steak', this.searchResults);
  })

  .component('app', {
    bindings: {},
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html',
  });
