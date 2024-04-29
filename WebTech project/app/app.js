const myNinjaApp = angular.module("myNinjaApp",['ngRoute']);
myNinjaApp.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/home',{
        templateUrl : 'views/home.html',
        controller:'NinjaController'
    }) 
    .when('/contact',{
        templateUrl:'views/contact.html',
        
    })
    .when('/directory',{
        templateUrl:'views/directory.html',
        controller : 'NinjaController'
    }).otherwise({
        redirectTo :'/home'
    });
}]);
myNinjaApp.directive('randomNinja',[function(){
    return{
        restrict:'E',
        scope:{
            ninjas:'=',
            
        },
        templateUrl:'views/random.html',
        controller: function($scope){
            $scope.random=Math.floor(Math.random()*4);
        }

    };
}])

myNinjaApp.controller("NinjaController",function($scope){
    $scope.removeNinja= function(ninja){
       var removedNinja=$scope.ninjas.indexOf(ninja);
        $scope.ninjas.splice(removedNinja,1)
    }
    $scope.addNinja=function(){
        $scope.ninjas.push({
            name:$scope.newninja.name,
            belt:$scope.newninja.belt,
            rate:parseInt($scope.newninja.rate),
            available:true
        });
        $scope.newninja.name="";
        $scope.newninja.belt="";
        $scope.newninja.rate="";
    }
    $scope.ninjas=[
        {
            name:"yoshi",
            belt:"Green",
            rate:50,
            available : true,
            thumb:"content/img/a.png.jpg"
        },
        {
            name:"Crystal",
            belt:"Yellow",
            rate:30,
            available:true,
            thumb:"content/img/b.png.jpg"
        },
        {
            name:"Ryu",
            belt:"orange",
            rate:10,
            available: false,
            thumb:"content/img/download (4).jpg"
        },
        {
            name:"Shaun",
            belt:"black",
            rate:1000,
            available: true,
            thumb:"content/img/c.png.jpg"
        }

    ];
   
})
