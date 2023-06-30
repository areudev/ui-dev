const isMultipleOf = (divisor: number) => (number: number) => number % divisor === 0;

export const toFizzBuzz = (number: number): number | string => {
	const isMultipleOf3 = isMultipleOf(3);
	const isMultipleOf5 = isMultipleOf(5);

	if (isMultipleOf3(number) && isMultipleOf5(number)) {
		return 'FizzBuzz';
	}
	if (isMultipleOf3(number)) {
		return 'Fizz';
	}
	if (isMultipleOf5(number)) {
		return 'Buzz';
	}
	return number;
}