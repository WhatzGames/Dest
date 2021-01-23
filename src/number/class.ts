import {
  assertEquals,
  assertStrictEquals,
  assertThrows,
} from "https://deno.land/std@0.83.0/testing/asserts.ts";
import { ResultType } from "../global/results.ts";
import { NumberError } from "./errors.ts";
import { INumberResult } from "./interface.ts";

export class NumberResult implements ResultType<number> {
  private input: number;
  constructor(input: number) {
    this.input = input;
  }

  private throwError(msg: string) {
    throw new NumberError(msg);
  }

  private checkNaN(input: number, prefix?: string) {
    if (isNaN(input)) {
      this.throwError(`${prefix ? prefix : "a parameter"} is NaN`);
    }
  }

  be(compared: number): void {
    try {
      assertEquals(this.input, compared);
    } catch {
      this.throwError(`${this.input} is not equal to ${compared}`);
    }
  }
  beGreaterThan(compared: number): void {
    this.checkNaN(compared, "the smaller element");
    this.checkNaN(this.input, "the bigger element");
    try {
      assertEquals(this.input > compared, true);
    } catch {
      this.throwError(`${this.input} is not greater than ${compared}`);
    }
  }
  beLessThan(compared: number): void {
    this.checkNaN(compared, "the bigger element");
    this.checkNaN(this.input, "the smaller element");
    try {
      assertEquals(this.input < compared, true);
    } catch {
      this.throwError(`${this.input} is not less than ${compared}`);
    }
  }
  beNil(): void {
    this.be(0);
  }
  beNaN(): void {
    try {
      assertThrows(() => this.checkNaN(this.input));
    } catch {
      this.throwError(`${this.input} is a number`);
    }
  }
  bePositive(): void {
    this.checkNaN(this.input, `the current value`);
    try {
      this.beGreaterThan(0);
    } catch {
      this.throwError(`${this.input} is not positive`);
    }
  }
  beNegativ(): void {
    this.checkNaN(this.input, `the current value`);
    try {
      this.beLessThan(0);
    } catch {
      this.throwError(`${this.input} is not negative`);
    }
  }
  beMultipleOf(compared: number): void {
    this.checkNaN(compared, "the bigger element");
    this.checkNaN(this.input, "the smaller element");
    try {
      assertEquals(this.input % compared, 0);
    } catch {
      this.throwError(
        (compared == 0)
          ? `tried to be divisible by 0`
          : `${this.input} is not a multiple of ${compared}`,
      );
    }
  }
}

// be(compared: number) {
// 	try {
// 		if (isNaN(input) && isNaN(compared)) {
// 			return;
// 		}
// 		assertStrictEquals<number>(input, compared);
// 	} catch {
// 		throw new NumberError(`${input} is not equal to ${compared}`);
// 	}
// },
// beGreaterThan(compared: number) {
// 	checkForNaN(input, "expectation");
// 	checkForNaN(compared, "result");
// 	try {
// 		assertStrictEquals<boolean>(input > compared, true);
// 	} catch (error) {
// 		if (error instanceof AssertionError) {
// 			throw new NumberError(
// 				`${input} is not greater than ${compared}`,
// 			);
// 		}
// 	}
// },
// beLessThan(compared: number) {
// 	checkForNaN(input, "expectation");
// 	checkForNaN(compared, "result");
// 	try {
// 		assertStrictEquals<boolean>(compared > input, true);
// 	} catch (error: unknown) {
// 		throw new NumberError(
// 			`${input} is not less than ${compared}`,
// 		);
// 	}
// },
// beNaN() {
// 	try {
// 		assertStrictEquals<boolean>(isNaN(input), true);
// 	} catch (error) {
// 		throw new NumberError(`${input} is a number`);
// 	}
// },
// beNegativ() {
// 	try {
// 		this.beLessThan(0);
// 	} catch (error: unknown) {
// 		if (error instanceof NumberError) {
// 			if (error.message.includes("is NaN")) {
// 				throw error;
// 			}
// 			error.message = `${input} is not negative`;
// 		}
// 		throw error;
// 	}
// },
// beNil() {
// 	this.be(0);
// },
// bePositiv() {
// 	try {
// 		this.beGreaterThan(0);
// 	} catch (error: unknown) {
// 		if (error instanceof NumberError) {
// 			if (error.message.includes("is NaN")) {
// 				throw error;
// 			}
// 			error.message = `${input} is not positiv`;
// 		}
// 		throw error;
// 	}
// },
// beMultipleOf(compared: number){
// 	checkForNaN(input, "expectation");
// 	checkForNaN(compared, "result");
// 	try {
// 		if(input != 0)
// 			this.beGreaterThan(compared);
// 		if(compared == 0)
// 			throw new NumberError("cannot divide by 0");
// 		assertStrictEquals<number>(input%compared, 0);
// 	} catch (error) {
// 		if(error instanceof AssertionError)
// 		{
// 			throw new NumberError(`${input} is not a multiple of ${compared}`);
// 		}
// 		throw error;
// 	}
// }
// } as INumberResult as ResultType<T>;
