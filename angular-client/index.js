angular.module('app', [])
  .config(($sceDelegateProvider) => {
    $sceDelegateProvider.resourceUrlWhitelist([
      'self',
      'https://www.edamam.com/**',
    ]);
  });
