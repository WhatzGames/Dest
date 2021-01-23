import {
  assertStrictEquals,
} from "https://deno.land/std@0.83.0/testing/asserts.ts";
import { IBooleanResult } from "./boolean/interface.ts";
import { ResultType } from "./global/results.ts";
import { NumberResult } from "./number/class.ts";
import { INumberResult } from "./number/interface.ts";

export function expect<T>(input?: T) {
  return {
    to(): ResultType<T> {
      switch (typeof input) {
        case "boolean":
          return {
            beTrue() {
              assertStrictEquals<boolean>(input, true);
            },
            beFalse() {
              assertStrictEquals<boolean>(input, false);
            },
          } as IBooleanResult as ResultType<T>;
        case "number":
          return new NumberResult(input) as INumberResult as ResultType<T>;
        default:
          throw new Error("Not Implemented");
      }
    },
  };
}
