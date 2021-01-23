import { Result } from "../global/results.ts";

export interface INumberResult extends Result{
	be(compared: number): void,
	beGreaterThan(compared: number): void,
	beLessThan(compared: number): void,
	beNil(): void,
	beNaN(): void,
	bePositive(): void,
	beNegativ(): void,
	beMultipleOf(compared: number): void,
}
