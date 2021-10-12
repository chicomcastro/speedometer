"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MathUtils_1 = require("./MathUtils");
var Vector3_1 = require("./Vector3");
var Speedometer = /** @class */ (function () {
    function Speedometer() {
    }
    Speedometer.setUpdateInterval = function (newValue) {
        this.measurementsCount = newValue;
    };
    Speedometer.getVelocityFromAccelerometerData = function (accelerometerData) {
        // Object data from accelerometer (in G)
        var x = accelerometerData.x, y = accelerometerData.y, z = accelerometerData.z;
        // Extract each axis value and convert to m/s^2
        var acc = [x, y, z].map(function (component) { return component * Constants.G; });
        // Append to array of values
        this.measuredData.push(acc);
        if (this.measuredData.length >= 10) {
            this.measuredData = this.measuredData.slice(1);
        }
        var axArray = this.measuredData.map(function (e) { return e[0]; });
        var ayArray = this.measuredData.map(function (e) { return e[1]; });
        var azArray = this.measuredData.map(function (e) { return e[2]; });
        var axMean = MathUtils_1.default.arrayMean(axArray);
        var ayMean = MathUtils_1.default.arrayMean(ayArray);
        var azMean = MathUtils_1.default.arrayMean(azArray);
        var acceleration = {
            x: axMean,
            y: ayMean,
            z: azMean,
        };
        // Velocidades
        var vxArray = MathUtils_1.default.integrate(axArray, this.updateIntervalMilliseconds / 1000);
        var vyArray = MathUtils_1.default.integrate(ayArray, this.updateIntervalMilliseconds / 1000);
        var vzArray = MathUtils_1.default.integrate(azArray, this.updateIntervalMilliseconds / 1000);
        var vxMean = MathUtils_1.default.arrayMean(vxArray);
        var vyMean = MathUtils_1.default.arrayMean(vyArray);
        var vzMean = MathUtils_1.default.arrayMean(vzArray);
        var vx = vxMean;
        var vy = vyMean;
        var vz = vzMean;
        var normV = Vector3_1.default.norm([vx, vy, vz]);
        var speed = normV;
        var velocity = {
            x: vx,
            y: vy,
            z: vz,
        };
        return { acceleration: acceleration, speed: speed, velocity: velocity };
    };
    Speedometer.measurementsCount = 10;
    Speedometer.updateIntervalMilliseconds = 100;
    Speedometer.measuredData = [];
    return Speedometer;
}());
exports.default = Speedometer;
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.G = 9.81; // m/s^2
    return Constants;
}());
