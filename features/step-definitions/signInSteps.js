import { Given, When, Then } from "@wdio/cucumber-framework";
import { tests } from "../support/tests.js";

Given ("User logs in", async function() {
	await tests.signInTest.userInputsData()
	await tests.signInTest.userSignsIn()
})