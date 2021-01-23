import { ResultType } from "../global/results.ts";
export interface ExpectationOptions<T>{
	to(): ResultType<T>
	not(): Pick<ExpectationOptions<T>, "to">
}
