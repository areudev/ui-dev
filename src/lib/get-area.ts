export const getArea = (sides: number, lengthOfSides: number) => {
	return (Math.pow(lengthOfSides, 2) * sides) / (4 * Math.tan(Math.PI / sides))
}
