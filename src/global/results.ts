import { IBooleanResult } from "../boolean/interface.ts";
import { INumberResult } from "../number/interface.ts";

// deno-lint-ignore no-explicit-any
export type Result = Record<string, any>;
export type ResultType<T> = T extends boolean ? IBooleanResult : T extends number ? INumberResult : Result;
