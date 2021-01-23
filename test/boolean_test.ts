import { assert, assertEquals, assertExists, assertStrictEquals, assertThrows, equal } from "https://deno.land/std@0.83.0/testing/asserts.ts";
import { expect } from "../src/mod.ts";

const rightTo = expect(true).to();
const wrongTo = expect(false).to();


Deno.test("BooleanTest #1: expect() with boolean input returns", (): void => {
	assertExists(rightTo);
	assertExists(wrongTo);
});

Deno.test("BooleanTest #2: beTrue()", (): void => {
	assertExists(rightTo.beTrue);
	assertStrictEquals(rightTo.beTrue(), undefined);
	assertThrows(wrongTo.beTrue);
});

Deno.test("BooleanTest #3: beFalse()", (): void => {
	assertExists(wrongTo.beFalse);
	assertStrictEquals(wrongTo.beFalse(), undefined);
	assertThrows(rightTo.beFalse);
});
