// import { BooleanResult } from "../boolean/class.ts";
// import { IBooleanResult } from "../boolean/interface.ts";
// import { ResultType } from "../global/results.ts";
// import { NumberResult } from "../number/class.ts";
// import { INumberResult } from "../number/interface.ts";
// import { ExpectationOptions } from "./interfaces.ts";

// export function expect<T>(input?: T): ExpectationOptions<T>{
// 	return new Options(input);
// }


// class Options<T> implements ExpectationOptions<T>{
// 	private input?: T;
// 	constructor(input?: T){
// 			this.input = input;
// 	}
// 	not(){
// 		return this;
// 	}
// 	to(){
// 		switch (typeof this.input) {
// 			case "boolean":
// 				return new BooleanResult(this.input) as IBooleanResult as ResultType<T>
// 			case "number":
// 				return new NumberResult(this.input) as INumberResult as ResultType<T>
// 			default:
// 				break;
// 		}
// 		throw new Error("Not Implemented");
// 	}
// }
