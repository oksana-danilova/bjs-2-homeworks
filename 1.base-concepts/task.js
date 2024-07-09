"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;

	switch (d) {
		case d > 0:
			arr.push((-b + Math.sqrt(d)) / (2 * a));
			arr.push((-b - Math.sqrt(d)) / (2 * a));
			break;

		case d === 0:
			arr.push(-b / (2 * a));
			break;

		default:
			arr = [];
			break;
	}

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyPercent = percent / 100 / 12;
	let loanBody = amount - contribution;
	let monthlyPayment = loanBody * (monthlyPercent + (monthlyPercent / (((1 + monthlyPercent) ** countMonths) - 1)));
	let totalAmount = monthlyPayment * countMonths;

	return +totalAmount.toFixed(2);
}