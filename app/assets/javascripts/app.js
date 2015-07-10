(function () {
    
    // creating the testApp module
    angular.module('testApp', [
    	'templates', // templates added by 'angular-rails-templates' gem
  		'ngRoute'
  		]);

    // creating the router
    angular.module('testApp').config(function($routeProvider){

    	// Routes provided below
    	$routeProvider
    		.when("/",
    			{
    				controller: 'RecipesController',
    				templateUrl: 'index.html'
    			})
    		.when("/404",
    		{
    			templateUrl: '404.html'
    		})
    		.otherwise({ redirectTo: '/404' });

    });

    // creating the controller
    angular.module('testApp').controller('RecipiesController', function( $scope, $routeParams ) {
    	// Add controller information here
    });
    
    // value
    // can't be injected into config()
    angular.module('testApp').value('version', '1.0');
    
    // constant
    // can be injected into config()
    angular.module('testApp').constant('version', '1.0');
    
}());
