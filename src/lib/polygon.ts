import { getArea } from './get-area'
type PolygonType = keyof typeof namedPolygons
type NamedPolygon<T extends PolygonType> = {
	type: T
	sides: (typeof namedPolygons)[T]
} & Polygon

export type Triangle = NamedPolygon<'triangle'>
export type Square = NamedPolygon<'square'>
export type Pentagon = NamedPolygon<'pentagon'>
export type Hexagon = NamedPolygon<'hexagon'>
export type Heptagon = NamedPolygon<'heptagon'>
export type Octagon = NamedPolygon<'octagon'>
export type Nonagon = NamedPolygon<'nonagon'>
export type Decagon = NamedPolygon<'decagon'>

const namedPolygons = {
	triangle: 3,
	square: 4,
	pentagon: 5,
	hexagon: 6,
	heptagon: 7,
	octagon: 8,
	nonagon: 9,
	decagon: 10,
} as const

export class Polygon {
	sides: number
	lengthOfSides: number

	constructor(sides: number, lengthOfSides: number) {
		if (sides < 3) throw new Error('Polygons must have three or more sides.')
		this.sides = sides
		this.lengthOfSides = lengthOfSides
	}

	get type(): PolygonType | undefined {
		for (const [type, sides] of Object.entries(namedPolygons)) {
			if (sides === this.sides) return type as PolygonType
		}
	}

	get sumOfAngles() {
		return 180 + (this.sides - 3) * 180
	}

	get perimeter() {
		return this.sides * this.lengthOfSides
	}

	get area() {
		return getArea(this.sides, this.lengthOfSides)
	}

	toJSON() {
		return {
			type: this.type,
			sides: this.sides,
			lengthOfSides: this.lengthOfSides,
			sumOfAngles: this.sumOfAngles,
			perimeter: this.perimeter,
			area: this.area,
		}
	}
}

export const createPolygon = (sides: number, lengthOfSides: number) => {
	return new Polygon(sides, lengthOfSides)
}
