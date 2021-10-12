export default class Speedometer {
    static measurementsCount: number;
    static updateIntervalMilliseconds: number;
    static measuredData: number[][];
    static setUpdateInterval(newValue: number): void;
    static getVelocityFromAccelerometerData(accelerometerData: {
        x: number;
        y: number;
        z: number;
    }): {
        acceleration: {
            x: number;
            y: number;
            z: number;
        };
        speed: number;
        velocity: {
            x: number;
            y: number;
            z: number;
        };
    };
}
