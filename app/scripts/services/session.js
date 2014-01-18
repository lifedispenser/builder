'use strict';

angular.module('builderApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
