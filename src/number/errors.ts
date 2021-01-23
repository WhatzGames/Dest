import { AssertionError } from "https://deno.land/std@0.83.0/testing/asserts.ts";

export class NumberError extends Error{
	constructor(m: string) {
		super(m);
		this.name = NumberError.name;
		Object.setPrototypeOf(this, NumberError.prototype);
	}
}
