angular.module('app')
  .component('list', {
    bindings: {
      recipes: '<',
      beers: '<',
    },
    controller() {

    },
    templateUrl: '/templates/list.html',
  });
