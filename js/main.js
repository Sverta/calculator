/**
 * Created by user on 18.7.17.
 */

angular.module('calculatorApp', []);

document.addEventListener('ready', function () {
    mdc.ripple.MDCRipple.attachTo(document.querySelector('.mdc-button'));
});