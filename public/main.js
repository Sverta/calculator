/**
 * Created by user on 18.7.17.
 */
var calculatorApp = angular.module("calculatorApp", []);
calculatorApp.controller("numberController", function ($scope) {
    $scope.items = [
        { number: 1},
        { number: 2},
        { number: 3},
        { number: 4},
        { number: 5},
        { number: 6},
        { number: 7},
        { number: 8},
        { number: 9},
        { number: 0}
    ];
    $scope.output = 0;
    $scope.newNumber = true;
    $scope.pendingValue = null;
    $scope.running2 = null;
  //  $scope.summa = null;
    $scope.pendingOperation = null;
    $scope.running = null;
    // $scope.res = 0;
    $scope.numberOutput = function (num) {

        if ($scope.output == "0" || $scope.newNumber) {
            $scope.output = num;
            $scope.newNumber = false;
        } else {
            $scope.output += String(num);
        }

        // if ($scope.pendingValue){
        // }
        $scope.pendingValue = Number($scope.output);


    };
    $scope.clear = function () {
        $scope.output = 0;
        $scope.running = 0;
        $scope.res = 0;
    };

    $scope.sum = function () {
        if ($scope.pendingValue) {
            $scope.pendingValue = Number($scope.output);
            $scope.running += $scope.pendingValue;
        }


        $scope.newNumber = true;
        $scope.pendingValue = null;
        $scope.pendingOperation = '+';


    };
    $scope.minus = function () {
        if ($scope.pendingValue) {
            $scope.pendingValue = Number($scope.output);
            $scope.running += $scope.pendingValue;
            $scope.running = -$scope.running;
        }
        //console.log($scope.pendingValue[1]);
        $scope.newNumber = true;
        $scope.pendingValue = null;
        $scope.pendingOperation = '-';
    };
    $scope.mul = function () {
        if ($scope.pendingValue) {
            $scope.pendingValue = Number($scope.output);
            $scope.running = $scope.pendingValue;

            console.log($scope.running);

            $scope.running *= $scope.running;
           console.log($scope.running);

          //  $scope.running *= $scope.running;//


        }
        $scope.newNumber = true;
        $scope.pendingValue = null;
        $scope.pendingOperation = '*';
    }
    $scope.result = function () {

        if( $scope.pendingOperation == '+'){
            $scope.sum();
            $scope.res = $scope.running;

        } else if( $scope.pendingOperation == '-'){
            $scope.minus();
            $scope.res = $scope.running;
        }else if( $scope.pendingOperation == '*'){
            $scope.mul();
            $scope.res = $scope.running;
        }
        $scope.output = $scope.res;
        $scope.res = null;
        //$scope.running = null;
    }
});