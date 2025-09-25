/**
 * If possible, put your minimal reproduction in this file, but feel free to
 * create other files elsewhere in the project if necessary.
 *
 * Once you have a minimal reproduction, commit it and push it to a public
 * GitHub repo.
 */

// Dummy function with only formatting issues for Biome to detect
interface Item {
	price: number;
}

function calculateTotal(items: Item[], discount = 0): number {
	let total = 0;

	for (let i = 0; i < items.length; i++) {
		const item = items[i];
		if (item.price) {
			total += item.price;
		}
	}

	// Inconsistent spacing and formatting
	const finalTotal = total*(1-discount);

	// Helper function that's actually used
	function helperFunction(message: string): string {
		return `Processed: ${message}`;
	}

	// Use the helper function
	const processedMessage = helperFunction("Total calculated");
	console.log(processedMessage);

	// Return the result
	return finalTotal;
}

// More formatting issues
const obj = {
	name: "test",
	value: 42,
	// Trailing comma (depending on Biome config)
	extra: "property",
};

// Inconsistent quotes
const message = "Hello world";
const anotherMessage = "Another message";

// Function with proper types
function processData(data: { value: number }[]): number[] {
	return data.map((item) => item.value);
}

// Arrow function that could be simplified
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => {
	return num * 2;
});

// Inconsistent semicolon usage
const result = calculateTotal([{ price: 10 }, { price: 20 }], 0.1);
console.log(result);

// Use the variables to avoid unused variable warnings
console.log(message, anotherMessage);
console.log(processData([{ value: 1 }, { value: 2 }]));
console.log(doubled);
console.log(obj);
