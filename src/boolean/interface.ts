import { Result } from "../global/results.ts";

export interface IBooleanResult extends Result{
	beTrue(): void,
	beFalse(): void,
}
