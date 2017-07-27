/**
 * Created by user on 18.7.17.
 */


    angular.module('calculatorApp', []);

// var calculatorApp = angular.module("calculatorApp", []);
//
//
//     // $scope.colors = [
//     //     {color: '#000'},
//     //     {color: '#DDA0DD', colorbutton: '#FF69B4'},
//     //     {color: '#4B0082', colorbutton: '#FFFF00'},
//     //     {color: '#696969', colorbutton: '#DCDCDC'},
//     //     {color: '#006400', colorbutton: '#00FF00'},
//     //     {color: '#00008B', colorbutton: '#00FFFF'},
//     //     {color: '#FF69B4', colorbutton: '#fff'},
//     //     {color: '#8A2BE2', colorbutton: '#FF69B4'},
//     //     {color: '#A0522D', colorbutton: '#DEB887'}
//     // ];
//     // $scope.color = function () {
//     //     $scope.changeColor = {'background-color':this.n.color};
//     //     $scope.changeColorButton = {'background-color':this.n.colorbutton}
//     // }
//
//   //  $scope.backColorPannel = {'background-color':n.color};
//
//
//
// function Calculator() {
//     this.items = [
//         { number: 7},
//         { number: 8},
//         { number: 9},
//         { number: 4},
//         { number: 5},
//         { number: 6},
//         { number: 1},
//         { number: 2},
//         { number: 3},
//         { number: 0},
//         { number: '00'},
//         { number: '.'}
//     ];
//     console.log(this.items);
//     console.log(this);
//     this.sum = function () {
//         console.log(123);
//     }
// }
//
// // var numberController = new Calculator();
//
// calculatorApp.controller("numberController", Calculator);

// function calculator($scope){
//     $scope.output = 0;
//     $scope.newNumber = true;
//     $scope.pendingValue = null;
//     $scope.runningadd = null;
//     //  $scope.summa = null;
//     $scope.pendingOperation = null;
//     $scope.running = null;
//     // $scope.res = 0;
//     $scope.numberOutput = function (num) {
//
//         if ($scope.output == "0" || $scope.newNumber) {
//             $scope.output = num;
//             $scope.newNumber = false;
//         } else {
//             $scope.output += String(num);
//         }
//         $scope.pendingValue = Number($scope.output);
//
//         console.log($scope.pendingValue);
//     };
//     $scope.clear = function () {
//         $scope.output = 0;
//         $scope.running = 0;
//         $scope.running2 = 0;
//         $scope.res = 0;
//     };
//
//     $scope.sum = function () {
//         if ($scope.pendingValue) {
//             $scope.pendingValue = Number($scope.output);
//             $scope.running += $scope.pendingValue;
//         }
//
//
//         $scope.newNumber = true;
//         $scope.pendingValue = null;
//         $scope.pendingOperation = '+';
//
//
//     };
//     $scope.minus = function () {
//         if ($scope.pendingValue) {
//             $scope.pendingValue = Number($scope.output);
//             $scope.running += $scope.pendingValue;
//             $scope.running = -$scope.running;
//         }
//         $scope.newNumber = true;
//         $scope.pendingValue = null;
//         $scope.pendingOperation = '-';
//     };
//     $scope.mul = function () {
//         if ($scope.pendingValue) {
//             $scope.pendingValue = Number($scope.output);
//             $scope.runningadd += $scope.pendingValue;
//             $scope.running = $scope.pendingValue * ($scope.runningadd - $scope.pendingValue);
//         }
//         $scope.newNumber = true;
//         $scope.pendingValue = null;
//         $scope.pendingOperation = '*';
//     };
//     $scope.division = function () {
//         if ($scope.pendingValue != '0') {
//             $scope.pendingValue = Number($scope.output);
//             $scope.runningadd += $scope.pendingValue;
//             $scope.running = ($scope.runningadd - $scope.pendingValue) / $scope.pendingValue;
//         } else {
//             $scope.running = 'Error';
//         }
//         $scope.newNumber = true;
//         $scope.pendingValue = null;
//         $scope.pendingOperation = '/';
//     };
//     // $scope.pro = function () {
//     //
//     //     if ($scope.pendingValue) {
//     //         $scope.pendingValue = Number($scope.output);
//     //         $scope.running = $scope.pendingValue / 100;
//     //         $scope.output = $scope.running;
//     //     }
//     //     $scope.newNumber = true;
//     //     $scope.pendingValue = null;
//     //     $scope.pendingOperation = '%';
//     // }
//     $scope.result = function () {
//
//         if( $scope.pendingOperation == '+'){
//             $scope.sum();
//             $scope.res = $scope.running;
//
//         } else if( $scope.pendingOperation == '-'){
//             $scope.minus();
//             $scope.res = $scope.running;
//         }else if( $scope.pendingOperation == '*'){
//             $scope.mul();
//             $scope.res = $scope.running;
//         }else if( $scope.pendingOperation == '/'){
//             $scope.division();
//             $scope.res = $scope.running;
//         }
//         $scope.output = $scope.res;
//         $scope.res += $scope.res;
//         //$scope.running = null;
//     }
// }

document.addEventListener('ready', function () {
    mdc.ripple.MDCRipple.attachTo(document.querySelector('.mdc-button'));
});