var myApp = angular.module('myApp',['ngStorage']);

myApp.controller('GreetingController', ['$scope', '$localStorage', function($scope, $localStorage) {
    
    
  	$scope.textareaAction= function(com){  
  		com.comments.push(com.text);  		
  		com.text = '';
  		com.dept += 1;  		
  	}

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };

    $scope.newTask = '';

    $scope.dataList = $localStorage.dataList || [];
    $scope.add = function(name){
        var data = {};
       data.name = name ;
       data.dept =0;
       data.comments = [];
       data.text = '';  
       $scope.dataList.push(data);
       $scope.newTask = '';
       $localStorage.dataList = $scope.dataList;      

    };


}]);


myApp.directive('ngTextEnter', function() {
return function(scope, element, attrs) {
    var map = {13: false, 17: false};

    element.bind("keydown", function(event) {
        if (event.which in map) {
            map[event.which] = true;
            if (map[13] && map[17]) {
                scope.$apply(function(){
                    scope.$eval(attrs.ngTextEnter, {'event': event});
                });
                event.preventDefault();
            }
        }
    });
    element.bind("keyup", function(event) {
        if (event.which in map) {
            map[event.keyCode] = false;
        }
    });
};
})