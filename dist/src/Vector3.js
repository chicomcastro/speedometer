"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Vector3 = /** @class */ (function () {
    function Vector3() {
    }
    Vector3.dot = function (array1, array2) {
        var dot = 0;
        for (var i = 0; i < array1.length; i++) {
            dot += array1[i] * array2[i];
        }
        return dot;
    };
    Vector3.norm = function (array) {
        return Math.sqrt(Vector3.dot(array, array));
    };
    return Vector3;
}());
exports.default = Vector3;
