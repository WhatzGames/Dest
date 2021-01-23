import { assert, assertEquals, assertExists, assertStrictEquals, assertThrows } from "https://deno.land/std@0.83.0/testing/asserts.ts";
import { expect } from "../src/mod.ts";
import { NumberError } from "../src/number/errors.ts";


Deno.test("NumberTest #1: expect() with number input returns", (): void => {
	const nil = expect(0).to();
	assertExists(nil);
});

Deno.test("NumberTest #2: beGreaterThan(number)", () => {
	const nil = expect(0).to();
	const nan = expect(NaN).to();

	assertExists(nil.beGreaterThan);
	assertStrictEquals(nil.beGreaterThan(-1), undefined);
	assertThrows(() => nil.beGreaterThan(0), NumberError, "is not greater than")
	assertThrows(() => nil.beGreaterThan(1), NumberError, "is not greater than")
	assertThrows(() => nan.beGreaterThan(1), NumberError, "is NaN");
	assertThrows(() => nil.beGreaterThan(NaN), NumberError, "is NaN")
});

Deno.test("NumberTest #3: beLessThan(number)", (): void => {
	const nil = expect(0).to();
	const nan = expect(NaN).to();

	assertExists(nil.beLessThan);
	assertStrictEquals(nil.beLessThan(1), undefined);
	assertThrows(() => nil.beLessThan(0), NumberError, "is not less than")
	assertThrows(() => nil.beLessThan(-1), NumberError, "is not less than")
	assertThrows(() => nan.beLessThan(1), NumberError, "is NaN");
	assertThrows(() => nil.beLessThan(NaN), NumberError, "is NaN")
});

Deno.test("NumberTest #4: be(number)", (): void => {
	const nil = expect(0).to();
	const nan = expect(NaN).to();

	assertExists(nil.be);
	assertStrictEquals(nil.be(0), undefined);
	assertThrows(() => nil.be(1), NumberError, "is not equal to");
	assertThrows(() => nil.be(NaN), NumberError, "is not equal to");
	assertStrictEquals(nan.be(NaN), undefined);
});

Deno.test("NumberTest #5: beNil", (): void => {
	const nil = expect(0).to();
	const other = expect(1).to();

	assertExists(nil.beNil);
	assertStrictEquals(nil.beNil(), undefined);
	assertThrows(() => other.beNil(), NumberError, "is not equal to");
});

Deno.test("NumberTest #6: beNaN()", (): void => {
	const nan = expect(NaN).to();
	const nil = expect(0).to();

	assertExists(nan.beNaN);
	assertStrictEquals(nan.beNaN(), undefined);
	assertThrows(() => nil.beNaN(), NumberError, "is a number");
});

Deno.test("NumberTest #7: bePositiv()", (): void => {
	const positive = expect(Number.POSITIVE_INFINITY).to();
	const negative = expect(Number.NEGATIVE_INFINITY).to();
	const nil = expect(0).to();
	const nan = expect(NaN).to();

	assertExists(positive.bePositive);
	assertStrictEquals(positive.bePositive(), undefined);
	assertThrows(() => negative.bePositive(), NumberError, "is not positive");
	assertThrows(() => nil.bePositive(), NumberError, "is not positive");
	assertThrows(() => nan.bePositive(), NumberError, "is NaN");
});

Deno.test("NumberTest #8: beNegativ()", (): void => {
	const negative = expect(Number.NEGATIVE_INFINITY).to();
	const positive = expect(Number.POSITIVE_INFINITY).to();
	const nil = expect(0).to();
	const nan = expect(NaN).to();
	assertExists(negative.beNegativ);
	assertStrictEquals(negative.beNegativ(), undefined);
	assertThrows(() => positive.beNegativ(), NumberError, "is not negative");
	assertThrows(() => nil.beNegativ(), NumberError, "is not negative");
	assertThrows(() => nan.beNegativ(), NumberError, "is NaN");
});

Deno.test("NumberTest #9: beMultipleOf(number)", (): void => {
	const num1 = expect(4).to();
	const num2 = expect(6).to();
	const nil = expect(0).to();
	const nan = expect(NaN).to();
	assertExists(num1.beMultipleOf);
	assertStrictEquals(num1.beMultipleOf(2), undefined);
	assertStrictEquals(num2.beMultipleOf(2), undefined);
	assertThrows(() => num1.beMultipleOf(3), NumberError, "is not a multiple of");
	assertStrictEquals(num2.beMultipleOf(3), undefined);
	assertStrictEquals(nil.beMultipleOf(1), undefined);
	assertThrows(() => nil.beMultipleOf(NaN), NumberError, "is NaN");
	assertThrows(() => nil.beMultipleOf(0), NumberError, "tried to be divisible by 0");
	assertThrows(() => nan.beMultipleOf(1), NumberError, "is NaN");
})
