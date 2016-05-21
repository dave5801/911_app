var page1App = angular.module('page1App', ['ngAnimate', 'ui.bootstrap']);


page1App.controller('page1Controller', ['$scope','$uibModal','$log',  function ($scope, $uibModal, $log) {

    var position_description = ' ';
    var position_section = ' ';
    var position_job_code = ' ';
    var position_mgmt_code = ' ';
    var position_code_max = ' ';
    var position_code_min = ' ';
    var position_from_date = ' ';
    var position_thru_date = ' ';

  
    /*
    $scope.showJson = function() {
        $scope.json = angular.toJson($scope.user);
    }*/

    $scope.output = [];

    $scope.position_info = { 
        selectSJC: null,
        selectSMC: null,
        availableOptions: [
          {
            id: '1',
            description: 'software engineer',
            category: 'development',
            sow_sjc: '12AB',
            sow_smc: '56DF',
            max: 5,
            min: 1,
            timeframe: '11-6-15'
          },
          {
            id: '2',
            description: 'electrical engineer',
            category: 'development',
            sow_sjc: '56YX',
            sow_smc: '102AC',
            max: 5,
            min: 1,
            timeframe: '11-6-15' 
          }


        ],
        };

       
        $scope.jobCodeList = { 
          selectMAX: null,
          selectMIN: null,
          availableOptions: [
            {id: 1, name: '6J7B'},
            {id: 2, name: '6K8C'},
            {id: 3, name: 'BAUS'}
          ],
        };                    

        //contains inputs
    $scope.position = {
        pos_description: " ",

        section: " ",

        job_code: " ",

        mgmt_code: " ",

        max: " ",

        min: " "
    };    
  
    $scope.animationsEnabled = true;     

    $scope.submit_form = function (size) {
        
       // console.log("TEST open");
         //console.log($scope.position_info.selectSJC);
        $scope.output.push({data:$scope.position.pos_description, sort_id:position_description})
        $scope.output.push({data:$scope.position.section, sort_id:position_section})
        $scope.output.push({data:$scope.position_info.selectSJC, sort_id:position_job_code})
        $scope.output.push({data:$scope.position_info.selectSMC, sort_id:position_mgmt_code})
        $scope.output.push({data:$scope.jobCodeList.selectMAX, sort_id:position_code_max})
        $scope.output.push({data:$scope.from_date, sort_id:position_from_date})
        $scope.output.push({data:$scope.thru_date, sort_id:position_thru_date})



        var modalInstance = $uibModal.open({
      
          animation: $scope.animationsEnabled,
          templateUrl: 'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          size: size,
          resolve: {
            items: function () {
              return $scope.output;
            }
          }
        });
       
    };


/******************************************************* BEGIN DATEPICKER FUNCTIONS **************************************************************/

  $scope.today = function() {
    $scope.from_date = new Date();
    $scope.thru_date = new Date();
  };
  $scope.today();
  

  $scope.clear = function () {
    $scope.from_date = null;
    $scope.thru_date = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();
  $scope.maxDate = new Date(2020, 5, 22);

  $scope.open = function($event) {
    $scope.status.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.from_date = new Date(year, month, day);
    $scope.thru_date = new Date(year, month, day);
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  //console.log($scope.format);

  $scope.status = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };

/******************************************************* END DATEPICKER FUNCTIONS ****************************************************************/
        

}]);

page1App.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

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