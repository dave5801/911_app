var userApp = angular.module('userApp', ['ngAnimate', 'ui.bootstrap']);

userApp.controller('userController', ['$scope','$uibModal','$log',  function ($scope, $uibModal, $log) {

    var profile_name = ' ';
    var medical_description = ' ';


    $scope.CreateProfile = [];
    
    $scope.medical_profile = {
        pro_name: " ", 
        med_description: " "
       
    };    
  
    $scope.animationsEnabled = true;     

    $scope.submit_form = function (size) {
        
        $scope.CreateProfile.push({data:$scope.medical_profile.pro_name, sort_id:profile_name})
        $scope.CreateProfile.push({data:$scope.medical_profile.med_description, sort_id:medical_description})
       
        var modalInstance = $uibModal.open({
      
          animation: $scope.animationsEnabled,
          templateUrl: 'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          size: size,
          resolve: {
            items: function () {
              return $scope.CreateProfile;
            }
          }
        });
       
    };

    $scope.call_fire = function (){
      console.log("Call Fire Department");
    }

    $scope.domestic_hotline = function(){
      console.log("Call domestic hotline");
    }


}]);

userApp.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});