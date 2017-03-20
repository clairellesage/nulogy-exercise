const flatMarkup = function(amount) {
	let markUpPrice = Number.parseFloat(amount) + (Number.parseFloat(amount) * 0.05)
	return markUpPrice;
};

const labourMarkup = function(amount, workers) {
	let markUp = flatMarkup(amount)
	let labourAmount = (markUp * 0.012) * workers
	return labourAmount;
};

const materialCost = function(amount, material) {
	let materialMarkup = 0;
	if (material === "drugs") {
		materialMarkup = 0.075;
	} else if (material === "food") {
		materialMarkup = 0.13;
	} else if (material === "electronics") {
		materialMarkup = 0.02;
	}
	const materialCost = flatMarkup(amount) * materialMarkup;
	return materialCost;
}

const totalCost = function(amount, workers, material) {
	let markup = flatMarkup(amount)
	let labour = labourMarkup(amount, workers)
	let materials = materialCost(amount, material)
	let grandTotal = (markup + labour + materials).toFixed(2)
	// Math.round(total * 10);
	return `$${grandTotal}`
}

console.log(totalCost("12456.95", 4, "books"))

// console.log(totalCost("1299.99", 3, "food"));

