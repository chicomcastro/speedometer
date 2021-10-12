export default class MathUtils {
    static round(n: number | null | undefined): number;
    static arraySum(array: number[]): number;
    static arrayMean(array: number[]): number;
    static derivate(array: number[], interval: number): number[];
    static integrate(array: number[], interval: number): number[];
}
