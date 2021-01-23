import { assertEquals, assertStrictEquals } from "https://deno.land/std@0.83.0/testing/asserts.ts";
import { IBooleanResult } from "./interface.ts";

export class BooleanResult implements IBooleanResult{
	private input: boolean;
	constructor(input: boolean){
		this.input = input;
	}
	beTrue(): void {
		assertStrictEquals<boolean>(this.input, true);
	}
	beFalse(): void {
		assertStrictEquals<boolean>(this.input, false);
	}
}
