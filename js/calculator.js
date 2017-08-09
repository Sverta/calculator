function Calculator($scope, $element) {

    var ctrl = this,
        newValue = true,
        pendingOperation = null,
        running = 0,
        ADD = "+",
        SUBTRACT = "-",
        DIVISION = "/",
        MULTIPLICATION = "*",
        SQUARE = "&#8730;",
        SIGN = "&#177;";


    ctrl.pendingValue = null;
    ctrl.output = 0;
    ctrl.lastOperation = null;

    ctrl.list = [
        {number: 7},
        {number: 8},
        {number: 9},
        {number: 4},
        {number: 5},
        {number: 6},
        {number: 1},
        {number: 2},
        {number: 3},
        {number: 0},
        {number: '00'},
        {number: '.'}
    ];

    //input number
    ctrl.numberOutput = function (value) {

        if(value == '.') {
            for (var i = 0; i < ctrl.output.length; i++) {
                if (ctrl.output.charAt(i) == '.') {
                      newValue = true;
                }
            }
        }

        if((value == "00" && ctrl.output == "0") || (value == "00" && newValue == true) ){
            ctrl.output = "0";
        }
        else if((value == "." && ctrl.output == "0") || (value == "." && newValue == true)  ) {
            ctrl.output = "0"+ value;
            newValue = false;
        }
         else if (ctrl.output == "0" || newValue) {
            ctrl.output = value;
            newValue = false;
        } else {
            ctrl.output += String(value);
        }
        ctrl.pendingValue = Number(ctrl.output);

    };
    angular.element(document).on('keypress', function (evt, key) {
        $scope.$apply(function () {
            if ((evt.keyCode >= 48 && evt.keyCode <= 57) || evt.keyCode == 46){
                evt.key = key;
                ctrl.numberOutput(evt.key);
            } else if (evt.keyCode == 127 || evt.keyCode == 8) {
                ctrl.clear();
            } else if (evt.keyCode == 13) {
                ctrl.result();
            } else if (evt.keyCode == 43) {
                ctrl.sum();
            } else if (evt.keyCode == 45) {
                ctrl.minus();
            } else if (evt.keyCode == 42) {
                ctrl.mul();
            } else if (evt.keyCode == 47) {
                ctrl.division();
            }
        });
    });

    //clear
    ctrl.clear = function () {
        ctrl.output = 0;
        running = 0;
    };

    //summa
    ctrl.sum = function () {

        if(ctrl.pendingValue) {
            if(running && pendingOperation == ADD){
                running += ctrl.pendingValue;
            }
            else {
                running = ctrl.pendingValue;
            }
        }
        newValue = true;
        ctrl.pendingValue = null;
        pendingOperation = ADD;
    };

    //minus
    ctrl.minus = function () {
        if (ctrl.pendingValue) {
            if( pendingOperation == SUBTRACT ) {
                running -= ctrl.pendingValue;
            } else {
                running = ctrl.pendingValue;

            }
        }
        newValue = true;
        ctrl.pendingValue = null;
        pendingOperation = SUBTRACT;
    };

    //multiplication
    ctrl.mul = function () {
        if (ctrl.pendingValue) {
            console.log(ctrl.pendingValue);
            if(running && pendingOperation == MULTIPLICATION ) {
                running *= ctrl.pendingValue;
            }
            else {
                running = ctrl.pendingValue;
            }
        }
        newValue = true;
        ctrl.pendingValue = null;
        pendingOperation = MULTIPLICATION;
    };

    //division
    ctrl.division = function () {
        if (ctrl.pendingValue) {
            if(running && pendingOperation == DIVISION ) {
                running = running/ctrl.pendingValue;
            }
            else {
                running = ctrl.pendingValue;
            }
        }
        newValue = true;
        ctrl.pendingValue  = null;
        pendingOperation = DIVISION;
    };

    //square root
    ctrl.square = function () {
        if (ctrl.pendingValue) {
            running = Math.sqrt(ctrl.pendingValue);
        } else {
            running = Math.sqrt(running);
        }
        ctrl.output =running;
        newValue = true;
        ctrl.pendingValue  = null;
        pendingOperation = SQUARE;
    };
    //sign
    ctrl.sign = function () {
        if(ctrl.pendingValue) {
            ctrl.pendingValue = -ctrl.pendingValue;
            running = ctrl.pendingValue;
        } else {
            running = -running;
        }
        ctrl.output = running;
        newValue = true;
        ctrl.pendingValue  = null;
        pendingOperation = SIGN;
    };

    //result
    ctrl.result = function () {
        if (!newValue) {
            ctrl.pendingValue = Number(ctrl.output);
            ctrl.lastValue = ctrl.pendingValue;
        }
        if (pendingOperation == ADD) {
            ctrl.sum();
            running += ctrl.pendingValue;
            ctrl.lastOperation = ADD;
        } else if (pendingOperation == SUBTRACT) {
            ctrl.minus();
            running -= ctrl.pendingValue;
            ctrl.lastOperation = SUBTRACT;
        } else if (pendingOperation == MULTIPLICATION) {
            ctrl.mul();
            ctrl.lastOperation = MULTIPLICATION;
        } else if (pendingOperation == DIVISION) {
            if (ctrl.pendingValue != '0') {
                ctrl.division();
            } else {
                running = 'Error';
                newValue = true;
            }
            ctrl.lastOperation = DIVISION;

        } else if (pendingOperation == SQUARE) {
            ctrl.lastOperation  = SQUARE;
        } else if (pendingOperation == SIGN) {
            ctrl.lastOperation  = SIGN;
        }
        else {
            if(ctrl.lastOperation) {
                if(ctrl.lastOperation == ADD) {
                    if(running) {
                        running += ctrl.lastValue;
                    } else {
                        running = 0;
                    }
                } else if(ctrl.lastOperation == SUBTRACT) {
                    if(running) {
                        running -= ctrl.lastValue;
                    } else {
                        running = 0;
                    }
                } else if(ctrl.lastOperation == MULTIPLICATION) {
                    if(running) {
                        running *= ctrl.lastValue;
                    } else {
                        running = 0;
                    }
                } else if(ctrl.lastOperation == DIVISION) {
                    if(running != "Error") {
                        if (running) {
                            running /= ctrl.lastValue;
                        } else {
                            running = 0;
                        }
                    }
                } else if (pendingOperation == SQUARE || pendingOperation == SIGN) {
                    if(running) {
                        running = ctrl.lastValue;
                    } else {
                        running = 0;
                    }
                }
            } else {
                running = 0;
            }
        }


        ctrl.output = running;

        pendingOperation = null;
        ctrl.pendingValue = null;
    };

    ctrl.key = 'none';


}


angular.module('calculatorApp').directive('keypressEvents',

    function ($document, $rootScope) {
        return {
            restrict: 'A',
            link: function () {
                $document.bind('keypress', function (e) {
                    $rootScope.$broadcast('keypress', e, String.fromCharCode(e.which));
                });
            }
        }
    }).component('innercalc', {
        templateUrl: '../template/innerCalc.html',
        controller: Calculator
    });



