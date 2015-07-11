(function () {
    
    // creating the testApp module
    angular.module('testApp', [
    	'templates', // templates added by 'angular-rails-templates' gem
  		'ngRoute',
  		'ngResource' // provides interaction for RESTful services (such as APIs) via $resource service
  		]);

    // dummy data
    var recipes = [
		  {
		    id: 1,
		    name: 'Baked Potato w/ Cheese'
		  },
		  {
		    id: 2,
		    name: 'Garlic Mashed Potatoes'
		  },
		  {
		    id: 3,
		    name: 'Potatoes Au Gratin'
		  },
		  {
		    id: 4,
		    name: 'Baked Brussel Sprouts'
		  },
		];

    // creating the router
    angular.module('testApp').config(['$routeProvider', function($routeProvider){

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

    }]);

    // creating the controller
    angular.module('testApp').controller('RecipesController', ['$scope', '$routeParams', '$location', '$resource'
    	function( $scope, $routeParams, $location, $resource ) {
    	
    	$scope.search = function(keywords){
    		$location.path('/').search('keywords', keywords);
    	}
    	
    	if ( $routeParams.keywords ) {
    		keywords = $routeParams.keywords.toLowerCase();
    		$scope.recipes = recipes.filter(function(recipe) {
    			//console.log(recipe.name.toLowerCase().indexOf(keywords) != -1);
    			return recipe.name.toLowerCase().indexOf(keywords) != -1 ;
    		});
    	} else {
    		$scope.recipes = [];
    	}

    }]);
    
    // value
    // can't be injected into config()
    angular.module('testApp').value('version', '1.0');
    
    // constant
    // can be injected into config()
    angular.module('testApp').constant('version', '1.0');
    
}());
