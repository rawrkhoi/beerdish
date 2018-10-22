angular.module('app')
  .controller('AppCtrl', (itemsService) => {
    itemsService.getAll((ingredients) => {
      this.search = ingredients;
      this.results = (data) => {
        this.recipes = data;
      };
    });
  })
  .component('app', {
    bindings: {},
    controller: 'AppCtrl',
    templateUrl: '/templates/app.html',
  });
