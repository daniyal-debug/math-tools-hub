/**
 * Geometry & Algebra Calculation Utilities
 */

// Area Calculations
export const calculateCircleArea = (radius) => ({
    area: Math.PI * Math.pow(radius, 2),
    perimeter: 2 * Math.PI * radius
})

export const calculateRectangleArea = (width, height) => ({
    area: width * height,
    perimeter: 2 * (width + height)
})

export const calculateTriangleArea = (base, height) => ({
    area: 0.5 * base * height,
    perimeter: null // Requires side lengths
})

// Volume Calculations
export const calculateSphereVolume = (radius) => ({
    volume: (4 / 3) * Math.PI * Math.pow(radius, 3),
    surfaceArea: 4 * Math.PI * Math.pow(radius, 2)
})

export const calculateCylinderVolume = (radius, height) => ({
    volume: Math.PI * Math.pow(radius, 2) * height,
    surfaceArea: 2 * Math.PI * radius * (radius + height)
})

export const calculateCubeVolume = (side) => ({
    volume: Math.pow(side, 3),
    surfaceArea: 6 * Math.pow(side, 2)
})

// Algebra
export const solveQuadratic = (a, b, c) => {
    const discriminant = (b * b) - (4 * a * c)
    if (discriminant < 0) return null

    const x1 = (-b + Math.sqrt(discriminant)) / (2 * a)
    const x2 = (-b - Math.sqrt(discriminant)) / (2 * a)

    return { x1, x2, discriminant }
}

export const solvePythagorean = (a, b) => {
    return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
}
