import { getConverterById } from './unitDefinitions'

/**
 * Convert a numeric value from one unit to another within a given category.
 *
 * For standard (multiplicative) categories the conversion goes:
 *   value × fromUnit.toBase  →  base value  →  base / toUnit.toBase
 *
 * For custom categories (temperature, fuel economy, electric) the units
 * carry toBase / fromBase *functions* instead of numbers.
 *
 * @param {number}  value       – the numeric value to convert
 * @param {string}  fromUnitId  – id of the source unit
 * @param {string}  toUnitId    – id of the target unit
 * @param {string}  categoryId  – converter category id (e.g. 'length')
 * @returns {{ result: number|null, formula: string, error: string|null }}
 */
export function convert(value, fromUnitId, toUnitId, categoryId) {
    // Edge cases
    if (value === '' || value === null || value === undefined) {
        return { result: null, formula: '', error: null }
    }

    const num = Number(value)
    if (isNaN(num)) {
        return { result: null, formula: '', error: 'Invalid number' }
    }

    const category = getConverterById(categoryId)
    if (!category) {
        return { result: null, formula: '', error: 'Unknown category' }
    }

    const fromUnit = category.units.find(u => u.id === fromUnitId)
    const toUnit = category.units.find(u => u.id === toUnitId)
    if (!fromUnit || !toUnit) {
        return { result: null, formula: '', error: 'Unknown unit' }
    }

    // Same unit shortcut
    if (fromUnitId === toUnitId) {
        return {
            result: num,
            formula: `1 ${fromUnit.symbol} = 1 ${toUnit.symbol}`,
            error: null,
        }
    }

    let result
    let formula

    if (category.isCustomConversion) {
        // Units have toBase / fromBase as functions
        const baseValue = fromUnit.toBase(num)
        result = toUnit.fromBase(baseValue)
        formula = `${formatNumber(num)} ${fromUnit.symbol} = ${formatNumber(result)} ${toUnit.symbol}`
    } else {
        // Standard multiplicative conversion via base unit
        const factor = fromUnit.toBase / toUnit.toBase
        result = num * factor
        formula = `1 ${fromUnit.symbol} = ${formatNumber(factor)} ${toUnit.symbol}`
    }

    return { result, formula, error: null }
}

/**
 * Get all units for a category.
 */
export function getAllUnits(categoryId) {
    const category = getConverterById(categoryId)
    return category ? category.units : []
}

/**
 * Build a quick-conversion reference table for a given pair.
 * Returns array of { input, output } for common values.
 */
export function getQuickConvertTable(fromUnitId, toUnitId, categoryId) {
    const sampleValues = [1, 5, 10, 25, 50, 100, 500, 1000]
    return sampleValues.map(v => {
        const { result } = convert(v, fromUnitId, toUnitId, categoryId)
        return { input: v, output: result }
    })
}

// ─── Formatting Helpers ──────────────────────────────────────────────────

/**
 * Format a number for display. Uses toPrecision for very large/small numbers
 * and toLocaleString otherwise.
 */
export function formatNumber(num) {
    if (num === null || num === undefined || isNaN(num)) return '—'
    if (num === 0) return '0'

    const abs = Math.abs(num)

    // Scientific notation for very small or very large
    if (abs < 1e-6 || abs >= 1e12) {
        return num.toExponential(6)
    }

    // Integer-ish numbers
    if (Number.isInteger(num) && abs < 1e15) {
        return num.toLocaleString('en-US')
    }

    // Decimal numbers — show up to 8 significant digits
    const formatted = parseFloat(num.toPrecision(8))
    return formatted.toLocaleString('en-US', { maximumFractionDigits: 10 })
}
