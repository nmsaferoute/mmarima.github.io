// Featured on CodePen's Most Hearted of 2023 list at #100
// https://codepen.io/2023/popular


// Best viewed in Full Screen mode
// https://codepen.io/jackiezen/full/oNJMOvZ


angular.module('ionicApp', ['ionic'])

.controller('MyCtrl', function($scope, $timeout) {
  $scope.items = ['Item 1', 'Item 2', 'Item 3'];
  
  $scope.doRefresh = function() {
    
    console.log('Refreshing!');
    $timeout( function() {
      //simulate async response
      $scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);

      //Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    
    }, 1000);
      
  };
  
});

