const flatMarkup = function(amount) {
	if (typeof amount === 'string') {
		amount = removeComma(amount);
	}
	let priceWithMarkup = Number.parseFloat(amount) + (Number.parseFloat(amount) * 0.05);
	return priceWithMarkup;
};

const removeComma = function(string) {
	let parsedAmount = ""
	for (i in string) {
		if (string[i] !== ",") {
		parsedAmount += string[i];
		}
	}
	return parsedAmount;
}

const labourMarkup = function(amount, workers) {
	let labourCost = (flatMarkup(amount) * 0.012) * workers;
	return labourCost;
};

const materialMarkup = function(amount, material) {
	let materialCost = 0;
	if (material === "drugs") {
	 materialCost = 0.075;
	} else if (material === "food") {
	 materialCost = 0.13;
	} else if (material === "electronics") {
	 materialCost = 0.02;
	}
	return flatMarkup(amount) * materialCost;
}

const totalEstimate = function(amount, workers, material) {
	let markup = flatMarkup(amount);
	let labour = labourMarkup(amount, workers);
	let materials = materialMarkup(amount, material);
	let estimate = (markup + labour + materials).toFixed(2);
	return `$${estimate}`;
}

console.log(totalEstimate("1299.99", 3, "food"));

