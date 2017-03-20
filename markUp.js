const flatMarkup = function(amount) {
	let markUpPrice = Number.parseFloat(amount) + (Number.parseFloat(amount) * 0.05)
	return markUpPrice;
};

const labourMarkup = function(amount, workers) {
	let labourAmount = workers * 0.012
	let markUpPrice = flatMarkup(amount)
	let markUpAndLabour = labourAmount + markUpPrice
	return markUpAndLabour;
};

const materialCost = function(amount, material) {
	let materialMarkup = 0;
	if (material === "drugs") {
		materialMarkup = 0.075;
	} else if (material === "food") {
		materialMarkup = 0.13;
		debugger;
	} else if (material === "electronics") {
		materialMarkup = 0.02;
	}
	const materialCost = (flatMarkup(amount) * materialMarkup).toFixed(2)
	return materialCost;
}

const totalCost = function(amount, workers, material) {
	let markup = Number.parseFloat(flatMarkup(amount))
	let labour = Number.parseFloat(labourMarkup(amount, workers))
	let materials = Number.parseFloat(materialCost(amount, material))
	let grandTotal = (markup + labour + materials).toFixed(2)

	console.log(labour)
	// Math.round(total * 10);
	// return `$${grandTotal}`
}

console.log(totalCost("1299.99", 3, "food"))

// console.log(totalCost("1299.99", 3, "food"));

