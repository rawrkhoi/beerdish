angular.module('app')
  .component('listItem', {
    bindings: {
      recipe: '<',
      beer: '<',
    },
    controller() {

    },
    templateUrl: '/templates/list-item.html',
  });
