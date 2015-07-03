var number = 13195;

var is_a_prime_number = function (parameter) {
	var divisor = parameter;
	for (var i = parameter; i >= 2; i--) {
		if (parameter % i === 0) {
			divisor = i;
		}
	}
	if (divisor === parameter) {
		return true;
	} else {
		return false;
	}
};

var largest_prime_factor = function (parameter) {
	for (var i = parameter; i >= 2; i--) {
		if (is_a_prime_number(i) && (parameter % i === 0)) {
			return i;
		}
	}
};

console.log("The largest prime factor of " + number + " is " + largest_prime_factor(number));