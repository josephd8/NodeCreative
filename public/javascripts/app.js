

var app = window.angular.module('app', [])

app.factory('logFetcher', logFetcher)
app.controller('mainCtrl', mainCtrl)


app.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});

function logFetcher ($http) {

  var API_ROOT = 'log'
  return {
    get: function () {
      return $http
        .get(API_ROOT)
        .then(function (resp) {
          return resp.data
        })
    }
}
}





function mainCtrl ($scope, logFetcher, $http, $window) {

$scope.log = [];
  logFetcher.get()
    .then(function (data) {
      $scope.log = data
    })



$scope.simplify = function(){

url="https://newton.now.sh/simplify/"+$scope.expr;
console.log($scope.expr);
console.log(url)

$http.get(url)
    .then(function(response) {
        console.log(response);
        $scope.result = response.data.result;
        $scope.operation = response.data.operation;
        $scope.expression = response.data.expression;
        
var formData = {operation:$scope.operation,expression:$scope.expression,result:$scope.result};
console.log(formData);
var logURL = 'log';
  $http({
     url: logURL,
     method: "POST",
     data: formData
  }).success(function(data, status, headers, config) {
    console.log("Post worked");
  }).error(function(data, status, headers, config) {
console.log(status);
console.log("Post failed");
  });


    });

$scope.show = true;

}

$scope.derive = function(){

url="https://newton.now.sh/derive/"+$scope.expr;
console.log($scope.expr);
console.log(url)

$http.get(url)
    .then(function(response) {
        console.log(response);
        $scope.result = response.data.result;
        $scope.operation = response.data.operation;
        $scope.expression = response.data.expression;

var formData = {operation:$scope.operation,expression:$scope.expression,result:$scope.result};
console.log(formData);
var logURL = 'log';
  $http({
     url: logURL,
     method: "POST",
     data: formData
  }).success(function(data, status, headers, config) {
    console.log("Post worked");
  }).error(function(data, status, headers, config) {
console.log(status);
console.log("Post failed");
  });


    });

$scope.show = true;

}

$scope.factor = function(){

url="https://newton.now.sh/factor/"+$scope.expr;
console.log($scope.expr);
console.log(url)

$http.get(url)
    .then(function(response) {
        console.log(response);
        $scope.result = response.data.result;
        $scope.operation = response.data.operation;
        $scope.expression = response.data.expression;

var formData = {operation:$scope.operation,expression:$scope.expression,result:$scope.result};
console.log(formData);
var logURL = 'log';
  $http({
     url: logURL,
     method: "POST",
     data: formData
  }).success(function(data, status, headers, config) {
    console.log("Post worked");
  }).error(function(data, status, headers, config) {
console.log(status);
console.log("Post failed");
  });


    });

$scope.show = true;

}

$scope.integrate = function(){

url="https://newton.now.sh/integrate/"+$scope.expr;
console.log($scope.expr);
console.log(url)

$http.get(url)
    .then(function(response) {
        console.log(response);
        $scope.result = response.data.result;
        $scope.operation = response.data.operation;
        $scope.expression = response.data.expression;

var formData = {operation:$scope.operation,expression:$scope.expression,result:$scope.result};
console.log(formData);
var logURL = 'log';
  $http({
     url: logURL,
     method: "POST",
     data: formData
  }).success(function(data, status, headers, config) {
    console.log("Post worked");
  }).error(function(data, status, headers, config) {
console.log(status);
console.log("Post failed");
  });


    });

$scope.show = true;

}

$scope.zeroes = function(){

url="https://newton.now.sh/zeroes/"+$scope.expr;
console.log($scope.expr);
console.log(url)

$http.get(url)
    .then(function(response) {
        console.log(response);
        $scope.result = response.data.result;
        $scope.operation = response.data.operation;
        $scope.expression = response.data.expression;

var formData = {operation:$scope.operation,expression:$scope.expression,result:$scope.result};
console.log(formData);
var logURL = 'log';
  $http({
     url: logURL,
     method: "POST",
     data: formData
  }).success(function(data, status, headers, config) {
    console.log("Post worked");
  }).error(function(data, status, headers, config) {
console.log(status);
console.log("Post failed");
  });


    });

$scope.show = true;

}

$scope.area = function(){

url="https://newton.now.sh/area/"+$scope.expr;
console.log($scope.expr);
console.log(url)

$http.get(url)
    .then(function(response) {
        console.log(response);
        $scope.result = response.data.result;
        $scope.operation = response.data.operation;
        $scope.expression = response.data.expression;

var formData = {operation:$scope.operation,expression:$scope.expression,result:$scope.result};
console.log(formData);
var logURL = 'log';
  $http({
     url: logURL,
     method: "POST",
     data: formData
  }).success(function(data, status, headers, config) {
    console.log("Post worked");
  }).error(function(data, status, headers, config) {
console.log(status);
console.log("Post failed");
  });


    });

$scope.show = true;

}

$scope.reloadPage = function(){$window.location.reload();}


}
