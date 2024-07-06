class HashMap {
	constructor() {
		this.hashTable = {};
	}
	hash(key) {
		let hashCode = 0;

		const primeNumber = 31;
		for (let i = 0; i < key.length; i++) {
			hashCode = primeNumber * hashCode + key.charCodeAt(i);
		}

		return hashCode;
	}

	set(key, value) {
		this.hashTable[key] = value;
	}

	get(key) {
		// takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
		if (!this.hashTable[key]) {
			return null;
		} else {
			return this.hashTable[key];
		}
	}

	has(key) {
		if (!this.hashTable[key]) {
			return false;
		} else {
			return true;
		}
	}

	remove(key) {
		// takes a key as an argument. If the given key is in the hash map, it should remove the entry with that key and return true. If the key isn’t in the hash map, it should return false.
		if (!this.hashTable[key]) {
			return false;
		} else {
			delete this.hashTable[key];
			return true;
		}
	}

	length() {
		// returns the number of stored keys in the hash map.
		let storedKeysNumber = 0;
		for (const key in this.hashTable) {
			storedKeysNumber++;
		}
		return storedKeysNumber;
	}

	clear() {
		// removes all entries in the hash map.
		this.hashTable = {};
	}

	keys() {
		// returns an array containing all the keys inside the hash map.
		let keyArray = [];
		for (let element in this.hashTable) {
			if (this.hashTable.hasOwnProperty(element)) keyArray.push(element);
		}
		return keyArray;
	}

	values() {
		// returns an array containing all the values.
		let valueArray = [];
		for (let element in this.hashTable) {
			let tempValue = this.hashTable[element];
			valueArray.push(tempValue);
		}
		return valueArray;
	}

	entries() {
		// returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
		let entryArray = [];
		for (const key in this.hashTable) {
			let tempValue = this.hashTable[key];
			let keyValuePair = [];
			keyValuePair.push(key, tempValue);
			entryArray.push(keyValuePair);
		}
		return entryArray;
	}
}

// Extra credit:
// Create a class HashSet that behaves the same as a HashMap but only contains keys with no values.

function fullTest() {
	const myHashMap = new HashMap();
	let myValue = "Blueberries";
	// Hash test,
	console.log("\t----------HASH TEST----------");
	const myKey = myHashMap.hash(myValue);
	console.log(myValue + " " + myKey);
	// Set test,
	console.log("\t----------SET TEST----------");
	myHashMap.set(myKey, myValue);
	console.log(myHashMap);
	myHashMap.set(myKey, "Brownies");
	console.log(myHashMap);
	const mySecondKey = myHashMap.hash("Jackson");
	myHashMap.set(mySecondKey, "Jackson");
	console.log(myHashMap);
	let myThirdValue = "Tootsie";
	const myThirdKey = myHashMap.hash(myThirdValue);
	myHashMap.set(myThirdKey, myThirdValue);
	console.log(myHashMap);
	// Get test,
	console.log("\t----------GET TEST----------");
	console.log(myHashMap.get(myKey) + "\t\t//Should be Brownies");
	// Has test,
	console.log("\t----------HAS TEST----------");
	console.log(myHashMap.has(myKey) + "\t\t//Should be true");
	console.log(myHashMap.has("Yucca") + "\t\t//Should be false");
	console.log(myHashMap);
	// Entries test,
	console.log("\t----------ENTRIES TEST----------");
	let myEntriesArray = myHashMap.entries();
	console.log(myEntriesArray);
	// Length test,
	console.log("\t----------LENGTH TEST----------");
	let lengthOfMyHash = myHashMap.length();
	console.log(lengthOfMyHash + "`\t\tShould be 3");
	// Remove test,
	console.log("\t----------REMOVE TEST----------");

	let isRemoved = myHashMap.remove("JamJar");
	console.log(isRemoved + "\t\t Should be false");
	isRemoved = myHashMap.remove(myThirdKey);
	console.log(isRemoved + "\t\t Should be true");
	console.log(myHashMap);
	// Keys test,
	console.log("\t----------KEYS TEST----------");
	let myKeysArray = myHashMap.keys();
	console.log(myKeysArray + "\t\tKeys Array");
	// Values test,
	console.log("\t----------VALUES TEST----------");
	let myValuesArray = myHashMap.values();
	console.log(myValuesArray);
	// Clear test,
	console.log("\t----------CLEAR TEST----------");
	myHashMap.clear();
	lengthOfMyHash = myHashMap.length();
	console.log(lengthOfMyHash + "`\t\tLength should be 0");
	console.log(myHashMap);
}

fullTest();

// TODO:Use the following snippet whenever you access a bucket through an index. We want to throw an error if we try to access an out of bound index:
//
// if (index < 0 || index >= buckets.length) {
//   throw new Error("Trying to access index out of bound");
// }
