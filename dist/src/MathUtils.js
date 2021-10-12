"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    MathUtils.round = function (n) {
        if (!n) {
            return 0;
        }
        return Math.round(n * 100) / 100;
    };
    MathUtils.arraySum = function (array) {
        return array.reduce(function (a, b) { return a + b; }, 0);
    };
    MathUtils.arrayMean = function (array) {
        return MathUtils.arraySum(array) / array.length;
    };
    MathUtils.derivate = function (array, interval) {
        var delta = array.map(function (v, i, a) { return v - (a[i - 1] || 0); });
        return delta.map(function (value) { return value / interval; }).slice(1);
    };
    MathUtils.integrate = function (array, interval) {
        var bases = array.map(function (v, i, a) { return (v + (a[i - 1] || 0)) / 2; });
        return bases.map(function (value) { return value * interval; }).slice(1);
    };
    return MathUtils;
}());
exports.default = MathUtils;
