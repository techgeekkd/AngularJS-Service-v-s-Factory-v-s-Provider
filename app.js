var kdApp = angular.module("kdTutorial", []);

/*kdApp.provider("kdProvider", function() {    
    
    this.value ="Kd Value";
    
    this.setValue = function(newValue){
        this.value = newValue;
    }
    
    this.$get = function() {
        console.log("Hey KD this is $get PROVIDER Function");
        //return "Tech Geek KD --> Provider";
        return this.value;
    };    
});

kdApp.config(function(kdProviderProvider) {
    kdProviderProvider.setValue("KD New Value");
});*/

kdApp.value("kdProvider", "Kd Value");
kdApp.value("kdProvider", "Kd Value CHANGED");

kdApp.constant("kdProvider2", "Kd Value Constant");
kdApp.constant("kdProvider2", "Kd Value Constant CHANGED");

/*
var KdObject = function (myName) { 
    this.name = myName;
    this.getValue = function() {
        return this.name;
    };
}

kdApp.factory("kdProvider", function() {    
        console.log("Hey KD this is PROVIDER Function");
       // return "Tech Geek KD --> Provider";
        return new KdObject("I am TECH GEEK");
}); 
*/

/*kdApp.service("kdProvider", function() {   
        console.log("Hey KD this is SERVICE Function");
        this.getValue = function() {
            return "Tech Geek KD --> Service Object Value";
        };  
}); */

kdApp.controller("kdController", function(kdProvider,$scope) {
    $scope.kdProvider = kdProvider;
    console.log("kdController :: kdProvider: " + kdProvider);
});

kdApp.controller("kdController2", function(kdProvider2,$scope) {
    $scope.kdProvider2 = kdProvider2;
    console.log("kdController2 :: kdProvider: " + kdProvider2);
});
