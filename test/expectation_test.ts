import { assert, assertExists, assertThrows } from 'https://deno.land/std@0.83.0/testing/asserts.ts';
import { expect } from "../src/mod.ts";
Deno.test("for expect function to exists", (): void => {
	assertExists(expect);
})

Deno.test("for expect returning object with 'to' function", (): void => {
	const expectation = expect();
	assertExists(expectation);
	assertExists(expectation.to);
	assertThrows(expectation.to, Error, "Not Implemented");
});
