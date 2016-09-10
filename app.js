var kdApp = angular.module("kdTutorial", []);

kdApp.controller("CopyController", function($scope) {
    
    //SYNTAX angular.copy(src,[destination])
     $scope.runCopy = function() {
         
      $scope.sourceObject = {
            name: 'techgeekkd',
            age: 26,
          address: {
              city: 'delhi',
              country :'india'
          }
      };
        
      // angular.copy -> Code Style#1
      $scope.destinationObject = angular.copy($scope.sourceObject);
         
      $scope.destinationObject2 = {
          name : 'technocrat'
      }       
      
      // angular.copy -> Code Style#2
      angular.copy($scope.sourceObject, $scope.destinationObject2);
         
      console.log('Source object :' + JSON.stringify($scope.sourceObject));     
      console.log('Destination object AFTER angular.copy :' + JSON.stringify($scope.destinationObject));     
      console.log('Destination2 object AFTER angular.copy:' + JSON.stringify($scope.destinationObject2));

         
      console.log( $scope.sourceObject.address === $scope.destinationObject.address);   
      console.log( $scope.destinationObject2.address === $scope.destinationObject.address);   
         
      $scope.sourceObject.address.city = 'NY';    
         
      console.log('Source object AFTER Change :' + JSON.stringify($scope.sourceObject));     
      console.log('Destination2 object AFTER Change:' + JSON.stringify($scope.destinationObject2));           
    }
});

kdApp.controller("ExtendController", function($scope) {
    
    $scope.runExtendSimple = function() {
        
      $scope.sourceObject1 = {
            name: 'techGeekKD',
            bio: 'MEAN Stack',
            level : 'Pro',
          address: {
              city: 'delhi',
              country :'india'
          }
      };
         
      $scope.sourceObject2 = {
            name: 'technoCrat',
            bio: 'Java'
      };    
        
      $scope.destinationObject = {};      
         
      angular.extend($scope.destinationObject,$scope.sourceObject1,$scope.sourceObject2);
        
      console.log('Destination object after Extend :' + JSON.stringify($scope.destinationObject));
      console.log('Source 1 object after Extend :' + JSON.stringify($scope.sourceObject1));
      console.log('Source 2 object after Extend :' + JSON.stringify($scope.sourceObject2));  
        
      console.log( $scope.destinationObject.address === $scope.sourceObject1.address);       
        
      $scope.sourceObject1.address.city = 'NY';  
        
      console.log('Source1 object AFTER Change :' + JSON.stringify($scope.sourceObject1));     
      console.log('Destination object AFTER Change:' + JSON.stringify($scope.destinationObject)); 
     
    }    
    
    //SYNTAX angular.extend(dst, src1, src2, ...)
    $scope.runExtendComplex = function() {
        
      $scope.sourceObject1 = {
         name: 'technoCrat',
         bio: 'Java',
         level : 'Pro',
          address: {
              city: 'delhi',
              state: 'UT',
              country :'india'
          }
      };
         
      $scope.sourceObject2 = {
            name: 'techGeekKD',
            bio: 'MEAN Stack',
              address: {
                  city: 'delhi',
                  country :'india'
              }
      };    
        
      $scope.destinationObject = {};      
         
      angular.extend($scope.destinationObject,$scope.sourceObject1,$scope.sourceObject2);
        
      console.log('Destination object after Extend :' + JSON.stringify($scope.destinationObject));
      console.log('Source 1 object after Extend :' + JSON.stringify($scope.sourceObject1));
      console.log('Source 2 object after Extend :' + JSON.stringify($scope.sourceObject2));
    }
});

kdApp.controller("MergeController", function($scope) {
    
    //SYNTAX angular.extend(dst, src1, src2, ...)
    $scope.runMerge = function() {
        
       $scope.sourceObject1 = {
         name: 'technoCrat',
         bio: 'Java',
         level : 'Pro',
          address: {
              city: 'delhi',
              state: 'UT',
              country :'india'
          }
      };
         
      $scope.sourceObject2 = {
            name: 'techGeekKD',
            bio: 'MEAN Stack',
              address: {
                  city: 'mumbai',
                  country :'india'
              }
      };    
        
      $scope.destinationObject = {};      
         
      angular.merge($scope.destinationObject,$scope.sourceObject1,$scope.sourceObject2);
        
      console.log('Destination object after Merge :' + JSON.stringify($scope.destinationObject));
      console.log('Source 1 object after Merge :' + JSON.stringify($scope.sourceObject1));
      console.log('Source 2 object after Merge :' + JSON.stringify($scope.sourceObject2));
        
      $scope.sourceObject1.address.city = 'NY';   
        
      console.log('Source1 object AFTER Change :' + JSON.stringify($scope.sourceObject1));     
      console.log('Destination object AFTER Change:' + JSON.stringify($scope.destinationObject));     
        
    }
});
