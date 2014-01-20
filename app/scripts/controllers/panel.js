'use strict';

angular.module('builderApp')
  .controller('PanelCtrl', function ($scope, Auth, $location) {
    $scope.showing = "";
    $scope.open = false;
    $scope.menuin = [{
      'title': 'Sign Up',
    }, {
      'title': 'Sign In',
    }];
    $scope.menuout = [{
      'title': 'Settings',
    }, {
      'title': 'Log Out'
    }];
    $scope.changeShowing = function(title) {
      $scope.showing = title;
    };
  });

angular.module('builderApp').directive('globalEvents', function() {
  //A directive attached to handle global clicks (to close open panels, for instance);
  return function(scope, element, attrs) {
    element.bind('click', function(e){
      var isDescendant = function(parent, child) {
        var node = child.parentNode;
        while (node != null) {
          if (node == parent) {
            return true;
          }
          node = node.parentNode;
        }
        return false;
      };
      var target = e.target;
      var panel = document.querySelector('#panel');
      var scope = angular.element(panel).scope();
      if(target == panel || isDescendant(panel, target) ) {
        scope.$apply(function(){
          scope.open = true;
        });
      } else {
        if(scope.open) {
          scope.$apply(function(){
            scope.showing = "";
            scope.open = false;
          });
        }
      }

    });
  }
});