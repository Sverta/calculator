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
    $scope.colors = [
        {color: '#000'},
        {color: '#DDA0DD', colorbutton: '#FF69B4'},
        {color: '#4B0082', colorbutton: '#FFFF00'},
        {color: '#696969', colorbutton: '#DCDCDC'},
        {color: '#006400', colorbutton: '#00FF00'},
        {color: '#00008B', colorbutton: '#00FFFF'},
        {color: '#FF69B4', colorbutton: '#fff'},
        {color: '#8A2BE2', colorbutton: '#FF69B4'},
        {color: '#A0522D', colorbutton: '#DEB887'}
    ];
    $scope.color = function () {
        $scope.changeColor = {'background-color':this.n.color};
        $scope.changeColorButton = {'background-color':this.n.colorbutton}
    }

  //  $scope.backColorPannel = {'background-color':n.color};
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
        $scope.running2 = 0;
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
        $scope.newNumber = true;
        $scope.pendingValue = null;
        $scope.pendingOperation = '-';
    };
    $scope.mul = function () {
        if ($scope.pendingValue) {
            $scope.pendingValue = Number($scope.output);
            $scope.running2 += $scope.pendingValue;
            $scope.running = $scope.pendingValue * ($scope.running2 - $scope.pendingValue);
        }
        $scope.newNumber = true;
        $scope.pendingValue = null;
        $scope.pendingOperation = '*';
    };
    $scope.div = function () {
        if ($scope.pendingValue) {
            $scope.pendingValue = Number($scope.output);
            $scope.running2 += $scope.pendingValue;
            $scope.running = ($scope.running2 - $scope.pendingValue) / $scope.pendingValue;
        }
        $scope.newNumber = true;
        $scope.pendingValue = null;
        $scope.pendingOperation = '/';
    };
    $scope.pro = function () {

        if ($scope.pendingValue) {
            $scope.pendingValue = Number($scope.output);
            $scope.running = $scope.pendingValue / 100;
            $scope.output = $scope.running;
        }
        $scope.newNumber = true;
        $scope.pendingValue = null;
        $scope.pendingOperation = '%';
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
        }else if( $scope.pendingOperation == '/'){
            $scope.div();
            $scope.res = $scope.running;
        }
        $scope.output = $scope.res;
        $scope.res = null;
        //$scope.running = null;
    }
});