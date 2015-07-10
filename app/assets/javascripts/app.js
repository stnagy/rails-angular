(function () {
    
    // creating the customersApp module
    angular.module('testApp', [
    	]);
    
    // value
    // can't be injected into config()
    angular.module('testApp').value('version', '1.0');
    
    // constant
    // can be injected into config()
    angular.module('testApp').constant('version', '1.0');
    
}());
